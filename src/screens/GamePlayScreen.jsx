import React, { useState, useEffect, useContext } from 'react';
import { View, Text, Button } from 'react-native';

const GamePlayScreen = ({ navigation }) => {
  const [coins, setCoins] = useState(21);
  const [turn, setTurn] = useState('player'); // Keeps track of whose turn it is

  const handlePlayerMove = (numCoins) => {
    // Player's move
    const updatedCoins = coins - numCoins;
    setCoins(updatedCoins);
    setTurn('ai'); // Set turn to AI after player's move

    // Check for winner
    if (updatedCoins <= 0) {
      // Game ends, add game to history
      navigation.navigate('Lost');
    } else {
      // Introduce a delay for AI's turn
      setTimeout(handleAIMove, 2000);
    }
  };

  const handleAIMove = () => {
    // AI's move (Always wins)
    let aiMove = (coins - 1) % 5;
    if (aiMove === 0) {
      aiMove = 1; // AI must pick at least one coin
    }
    setCoins((prevCoins) => prevCoins - aiMove);
    setTurn('player'); // Set turn back to player after AI's move

    // Check for winner
    if (coins <= 0) {
      // Game ends, add game to history
      navigation.navigate('Lost');
    }
  };

  useEffect(() => {
    // Start with player's turn
    setTurn('player');
  }, []);

  return (
    <View>
      <Text>{turn === 'player' ? 'Player Turn' : 'AI Turn'}</Text>
      <Text>Coins remaining: {coins}</Text>
      <Button title="Pick 1" onPress={() => handlePlayerMove(1)} />
      <Button title="Pick 2" onPress={() => handlePlayerMove(2)} />
      <Button title="Pick 3" onPress={() => handlePlayerMove(3)} />
      <Button title="Pick 4" onPress={() => handlePlayerMove(4)} />
    </View>
  );
};

export default GamePlayScreen;
