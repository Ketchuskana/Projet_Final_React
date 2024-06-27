import React, { useState } from 'react';
import { View, TextInput, Button, ToastAndroid } from 'react-native';

export default function HomeScreen({ navigation }) {
  const [ip, setIp] = useState('');
  const [port, setPort] = useState('');

  const testConnection = () => {
    fetch(`http://${ip}:${port}/`)
      .then((response) => response.text())
      .then((text) => {
        ToastAndroid.show(text, ToastAndroid.SHORT);
        navigation.navigate('RecordScreen');
        navigation.navigate('RaveScreen');
      })
      .catch((error) => {
        ToastAndroid.show("Connection failed", ToastAndroid.SHORT);
      });
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput
        placeholder="IP Address"
        value={ip}
        onChangeText={setIp}
        style={{ marginBottom: 10, borderWidth: 1, padding: 8, width: '80%', textAlign: 'center' }}
      />
      <TextInput
        placeholder="Port"
        value={port}
        onChangeText={setPort}
        keyboardType="numeric"
        style={{ marginBottom: 10, borderWidth: 1, padding: 8, width: '80%', textAlign: 'center' }}
      />
      <Button
        title="Test Connection"
        onPress={testConnection}
        disabled={!ip || !port}
      />
    </View>
  );
}
