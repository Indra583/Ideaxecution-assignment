// HistoryScreen.js

import React from 'react';
import { View, Text, Button } from 'react-native';
import { useSelector } from 'react-redux';

const HistoryScreen = ({ navigation }) => {
  const gameHistory = useSelector((state) => state.game.gameHistory);

  return (
    <View>
      <Text>Game History:</Text>
      {gameHistory.map((game, index) => (
        <Text key={index}>{`Winner: ${game.winner}, Time: ${game.timestamp}`}</Text>
      ))}
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default HistoryScreen;
