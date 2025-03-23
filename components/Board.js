// components/Board.js
import React, { useState, useContext, useEffect } from 'react'; // Import useEffect
import { View, StyleSheet } from 'react-native';
import Cell from './Cell';
import { GameContext } from '../GameContext';

const Board = () => {
  const [boardState, setBoardState] = useState([
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]);

    const {currentPlayer,gameOver, switchPlayer, setGameResult, resetGame} = useContext(GameContext)

  const updateBoard = (row, col, player) => {
    if (gameOver || boardState[row][col]) return;
    const newBoardState = [...boardState];
    newBoardState[row][col] = player;
    setBoardState(newBoardState);
    checkWinner(newBoardState)
  };
    const checkWinner = (currentBoard) => {
    // Check rows
    for (let i = 0; i < 3; i++) {
      if (
        currentBoard[i][0] &&
        currentBoard[i][0] === currentBoard[i][1] &&
        currentBoard[i][0] === currentBoard[i][2]
      ) {
          setGameResult(currentBoard[i][0]);
        return;
      }
    }

    // Check columns
    for (let j = 0; j < 3; j++) {
      if (
        currentBoard[0][j] &&
        currentBoard[0][j] === currentBoard[1][j] &&
        currentBoard[0][j] === currentBoard[2][j]
      ) {
          setGameResult(currentBoard[0][j]);
        return;
      }
    }

    // Check diagonals
    if (
      currentBoard[0][0] &&
      currentBoard[0][0] === currentBoard[1][1] &&
      currentBoard[0][0] === currentBoard[2][2]
    ) {
        setGameResult(currentBoard[0][0]);
      return;
    }
    if (
      currentBoard[0][2] &&
      currentBoard[0][2] === currentBoard[1][1] &&
      currentBoard[0][2] === currentBoard[2][0]
    ) {
        setGameResult(currentBoard[0][2]);
      return;
    }

     if (!currentBoard.flat().includes(null)) {
        setGameResult('draw');
      return;
    }
        switchPlayer();
  }
    // Reset board using useEffect and adding gameOver on the dependency array
    useEffect(() => {
      if (gameOver) {
          setBoardState([
            [null, null, null],
            [null, null, null],
            [null, null, null],
          ]);
      }
    }, [gameOver])


  return (
    <View style={styles.board}>
      {boardState.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map((cell, colIndex) => (
            <Cell
              key={colIndex}
              value={cell}
              row={rowIndex}
              col={colIndex}
              onPress={updateBoard}
            />
          ))}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  board: {
    borderWidth: 4,
  },
  row: {
    flexDirection: 'row',
  },
});

export default Board;