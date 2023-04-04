import React from 'react';
import { useState } from 'react';
import PlayerForm from './components/PlayerForm/PlayerForm.jsx';
import GameBoard from './components/GameBoard/GameBoard.jsx';

function App({ name }) {
  const [board, setBoard] = useState(Array(9).fill(''));
  const [currPlayer, setCurrPlayer] = useState('player1');

  const players = {
    player1: { name: 'James', symbol: 'X' },
    player2: { name: 'Frank', symbol: 'O' },
  };

  function handleClick(tileID) {
    setBoard((oldBoard) => {
      let newBoard = [...oldBoard];
      newBoard[tileID] = players[currPlayer].symbol;
      return newBoard;
    });

    if (currPlayer === 'player1') {
      setCurrPlayer('player2');
    } else {
      setCurrPlayer('player1');
    }
  }

  return (
    <div className='h-screen flex items-center justify-center relative'>
      <PlayerForm> </PlayerForm>
      <GameBoard board={board} tileClickHandler={handleClick}></GameBoard>
    </div>
  );
}

export default App;
