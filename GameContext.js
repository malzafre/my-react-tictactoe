// GameContext.js
import React, { createContext, useState } from 'react';

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState(null); // null, 'X', 'O', or 'draw'

  const resetGame = () => {
    setCurrentPlayer('X');
    setGameOver(false);
    setWinner(null);
  };

  const switchPlayer = () => {
    setCurrentPlayer((prevPlayer) => (prevPlayer === 'X' ? 'O' : 'X'));
  };

  const setGameResult = (result) => {
      setGameOver(true);
      setWinner(result)
  }

  return (
    <GameContext.Provider
      value={{
        currentPlayer,
        gameOver,
        winner,
        resetGame,
        switchPlayer,
        setGameResult
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export { GameContext, GameProvider };