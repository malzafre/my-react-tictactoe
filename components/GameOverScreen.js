// components/GameOverScreen.js
import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { GameContext } from '../GameContext';

const GameOverScreen = ({ navigation }) => {
  const { winner, resetGame } = useContext(GameContext);

  const handlePlayAgain = () => {
    resetGame();
    navigation.navigate('Game'); // Navigate back to the GameScreen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Game Over!</Text>
      <Text style={styles.result}>
        {winner === 'draw' ? "It's a draw!" : `Player ${winner} wins!`}
      </Text>
      <TouchableOpacity style={styles.playAgainButton} onPress={handlePlayAgain}>
        <Text style={styles.playAgainButtonText}>Play Again</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  result: {
    fontSize: 18,
    marginBottom: 20,
  },
  playAgainButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
  },
  playAgainButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default GameOverScreen;