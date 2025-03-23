// components/GameScreen.js
import React, { useContext, useEffect } from 'react'; //import useEffect
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { GameContext } from '../GameContext';
import Board from './Board';

const GameScreen = ({navigation}) => { //destructured navigation
  const { currentPlayer, gameOver, winner, resetGame } = useContext(GameContext);

    useEffect(() => {
     if (gameOver) {
         navigation.navigate("GameOver")
     }
    }, [gameOver])


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tic-Tac-Toe</Text>
      <Text>Current Player: {currentPlayer}</Text>
      {/* Remove Game Over display
      {gameOver && (
        <Text>
          {winner === 'draw' ? "It's a draw!" : `Player ${winner} wins!`}
        </Text>
      )} */}
      <Board />
      <TouchableOpacity style={styles.resetButton} onPress={resetGame}>
        <Text style={styles.resetButtonText}>Reset Game</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  resetButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  resetButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default GameScreen;