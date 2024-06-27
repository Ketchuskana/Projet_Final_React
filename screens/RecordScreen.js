import React, { useState, useEffect } from 'react';
import { View, Button, FlatList, Text } from 'react-native';
import { Audio } from 'expo-av';
import * as FileSystem from 'expo-file-system';
import { useDispatch, useSelector } from 'react-redux';

export default function RecordScreen() {
  const [recording, setRecording] = useState();
  const [recordings, setRecordings] = useState([]);
  const dispatch = useDispatch();
  const savedRecordings = useSelector(state => state.recordings.recordings);

  useEffect(() => {
    setRecordings(savedRecordings);
  }, [savedRecordings]);

  const startRecording = async () => {
    try {
      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      }); 
      const { recording } = await Audio.Recording.createAsync(
         Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
      );
      setRecording(recording);
    } catch (err) {
      console.error('Failed to start recording', err);
    }
  };

  const stopRecording = async () => {
    setRecording(undefined);
    await recording.stopAndUnloadAsync();
    const uri = recording.getURI(); 
    const newRecording = {
      id: Date.now().toString(),
      uri,
    };
    dispatch({ type: 'ADD_RECORDING', payload: newRecording });
  };

  const playRecording = async (uri) => {
    const { sound } = await Audio.Sound.createAsync({ uri });
    await sound.playAsync(); 
  };

  return (
    <View>
      <Button
        title={recording ? 'Stop Recording' : 'Start Recording'}
        onPress={recording ? stopRecording : startRecording}
      />
      <FlatList
        data={recordings}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.id}</Text>
            <Button title="Play" onPress={() => playRecording(item.uri)} />
            <Button title="Delete" onPress={() => dispatch({ type: 'REMOVE_RECORDING', payload: item.id })} />
          </View>
        )}
      />
    </View>
  );
}

