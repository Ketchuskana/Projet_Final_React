import React, { useState } from 'react';
import { View, Button, ActivityIndicator, Text } from 'react-native';
import * as FileSystem from 'expo-file-system';
import { useSelector } from 'react-redux';
import { Audio } from 'expo-av';

export default function RaveScreen() {
  const [loading, setLoading] = useState(false);
  const [processedFile, setProcessedFile] = useState(null);
  const recordings = useSelector(state => state.recordings.recordings);

  const uploadFile = async (uri) => {
    setLoading(true);
    let formData = new FormData();
    formData.append('file', {
      uri,
      name: 'audio.wav',
      type: 'audio/wav'
    });

    try {
      let response = await fetch('http://134.157.121.73:8002/upload', {
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.ok) {
        setProcessedFile('processed-file-path');
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const downloadProcessedFile = async () => {
    try {
      let response = await fetch('http://134.157.121.73:8002/download');
      let blob = await response.blob();
      const uri = FileSystem.documentDirectory + 'processedAudio.wav';
      await FileSystem.writeAsStringAsync(uri, blob, { encoding: FileSystem.EncodingType.Base64 });
      setProcessedFile(uri);
    } catch (error) {
      console.error(error);
    }
  };

  const playAudio = async (uri) => {
    const { sound } = await Audio.Sound.createAsync({ uri });
    await sound.playAsync();
  };

  return (
    <View>
      {loading ? <ActivityIndicator size="large" color="#0000ff" /> : null}
      <Button title="Upload File" onPress={() => uploadFile('path/to/your/audio.wav')} />
      <Button title="Download Processed File" onPress={downloadProcessedFile} />
      {processedFile && <Button title="Play Processed Audio" onPress={() => playAudio(processedFile)} />}
    </View>
  );
}
