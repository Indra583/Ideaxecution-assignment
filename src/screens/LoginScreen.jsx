// LoginScreen.js

import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { setUser } from '../utils/userSlice'; // Update this import

const LoginScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    // Validate login
    if (username === 'admin' && password === 'admin1234') {
      // Dispatch the setUser action
      dispatch(setUser({ username: 'admin', role: 'admin' }));
      // Navigate to Game Play Screen
      navigation.navigate('GamePlay');
    } else if (username === 'guest' && password === 'guest1234') {
      // Dispatch the setUser action
      dispatch(setUser({ username: 'guest', role: 'guest' }));
      // Navigate to Game Play Screen
      navigation.navigate('GamePlay');
    } else {
      // Handle invalid login
      setErrorMessage('Invalid username or password');
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
      {errorMessage ? <Text style={{ color: 'red' }}>{errorMessage}</Text> : null}
    </View>
  );
};

export default LoginScreen;
