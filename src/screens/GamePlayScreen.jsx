import React, { useState, useEffect, useContext } from 'react';
import { View, Text, Button } from 'react-native';

const GamePlayScreen = ({ navigation }) => {
  const [coins, setCoins] = useState(21);
  const [turn, setTurn] = useState('player');

  const handlePlayerMove = (numCoins) => {
    const updatedCoins = coins - numCoins;
    setCoins(updatedCoins);
    setTurn('ai');

    if (updatedCoins <= 0) {
      navigation.navigate('Lost');
    } else {
      setTimeout(handleAIMove, 2000);
    }
  };

  const handleAIMove = () => {
    let aiMove = (coins - 1) % 5;
    if (aiMove === 0) {
      aiMove = 1;
    }
    setCoins((prevCoins) => prevCoins - aiMove);
    setTurn('player');

    if (coins <= 0) {
      navigation.navigate('Lost');
    }
  };

  useEffect(() => {
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
