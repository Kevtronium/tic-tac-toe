import React from 'react';
import { useState } from 'react';
import PlayerForm from './components/PlayerForm/PlayerForm.jsx';
import GameBoard from './components/GameBoard/GameBoard.jsx';

function App({ name }) {
  const [board, setBoard] = useState(Array(9).fill(''));
  const [currPlayer, setCurrPlayer] = useState('player1');
  const [turn, setTurn] = useState(1);

  const players = {
    player1: { name: 'James', symbol: 'X' },
    player2: { name: 'Frank', symbol: 'O' },
  };

  function isWinningGroup(tileArr) {
    let isWinner = false;
    if (tileArr[0] !== '' && tileArr[1] !== '' && tileArr[2] !== '') {
      if (tileArr[0] === tileArr[1] && tileArr[0] === tileArr[2]) {
        isWinner = true;
      }
    }
    return isWinner;
  }

  function findWinner(winningCombos) {
    let winner = '';

    for (const winGroup in winningCombos) {
      for (const tileGroup of winningCombos[winGroup]) {
        if (isWinningGroup(tileGroup)) {
          if (tileGroup[0] === 'X') {
            winner = 'player1';
          } else {
            winner = 'player2';
          }
          return winner;
        }
      }
    }
    return winner;
  }

  function getWinner(board) {
    const winningCombos = {
      diag: [
        [board[0], board[4], board[8]],
        [board[2], board[4], board[6]],
      ],
      rowWin: [
        [board[0], board[1], board[2]],
        [board[3], board[4], board[5]],
        [board[6], board[7], board[8]],
      ],
      colWin: [
        [board[0], board[3], board[6]],
        [board[1], board[4], board[7]],
        [board[2], board[5], board[8]],
      ],
    };
    let winner = findWinner(winningCombos);

    return winner;
  }

  function handleClick(tileID) {
    let newBoard = [...board];
    newBoard[tileID] = players[currPlayer].symbol;
    setBoard(newBoard);
    let winner = getWinner(newBoard);
    setTurn(turn + 1);

    if (winner === 'player1' || winner === 'player2') {
      console.log(`Congrats to ${winner}`);
    } else if (winner === '' && turn === 9) {
      console.log(`It's a tie!`);
    } else {
      if (currPlayer === 'player1') {
        setCurrPlayer('player2');
      } else {
        setCurrPlayer('player1');
      }
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
