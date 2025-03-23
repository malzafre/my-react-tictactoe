// components/Cell.js
import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { GameContext } from '../GameContext';

const Cell = ({ value, row, col, onPress }) => {
  const { currentPlayer, gameOver } = useContext(GameContext);

  const handlePress = () => {
    if (!gameOver) {
      onPress(row, col, currentPlayer);
    }
  };

  return (
    <TouchableOpacity
      style={[styles.cell, value === 'X' && styles.x, value === 'O' && styles.o]}
      onPress={handlePress}
      disabled={!!value || gameOver} // Use double negation (!!)
    >
      <Text style={styles.cellText}>{value}</Text>
    </TouchableOpacity>
  );
};


const styles = StyleSheet.create({
  cell: {
    width: 100,
    height: 100,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cellText: {
    fontSize: 60,
    fontWeight: 'bold',
  },
  x: {
    backgroundColor: '#aaf',
  },
  o: {
    backgroundColor: '#faa',
  },
});

export default Cell;