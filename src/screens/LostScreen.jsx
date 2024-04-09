// LostScreen.js

import React from 'react';
import { View, Text, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addGameToHistory } from '../utils/gameSlice';
import { logout } from '../utils/userSlice';

const LostScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.currentUser);
  const gameHistory = useSelector((state) => state.game.gameHistory);

  const handlePlayAgain = () => {
    // Add current game to history
    dispatch(addGameToHistory({ winner: 'AI', timestamp: new Date() }));
    // Navigate to Game Play Screen
    navigation.navigate('GamePlay');
  };

  const handleGameHistory = () => {
    navigation.navigate('History');
  };

  return (
    <View>
      <Text>You lost the game!</Text>
      <Text>Game History:</Text>
      <Text>{currentUser.username}</Text>
      {gameHistory.map((game, index) => (
        <Text key={index}>{`Winner: ${game.winner}, Time: ${game.timestamp}`}</Text>
      ))}
      <Button title="Play Again" onPress={handlePlayAgain} />
      <Button title="Game History Page" onPress={handleGameHistory} />
    </View>
  );
};

export default LostScreen;
