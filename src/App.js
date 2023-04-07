import React from 'react';
import { useState } from 'react';
import PlayerForm from './components/PlayerForm/PlayerForm.jsx';
import GameBoard from './components/GameBoard/GameBoard.jsx';

function App({ name }) {
  const [board, setBoard] = useState(Array(9).fill(''));
  const [currPlayer, setCurrPlayer] = useState('player1');
  const [turn, setTurn] = useState(1);
  const [players, setPlayers] = useState({
    player1: { name: '', symbol: 'X' },
    player2: { name: '', symbol: 'O' },
  });
  const [isPlayer1X, setIsPlayer1X] = useState(true);
  const [isFormActive, setIsFormActive] = useState(true);
  const [isBoardActive, setIsBoardActive] = useState(false);
  const [isTileDisabled, setIsTileDisabled] = useState(false);

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
      setIsTileDisabled(true);
    } else if (winner === '' && turn === 9) {
      console.log(`It's a tie!`);
      setIsTileDisabled(true);
    } else {
      if (currPlayer === 'player1') {
        setCurrPlayer('player2');
      } else {
        setCurrPlayer('player1');
      }
    }
  }

  function handleNameChange(playerName, playerNum) {
    const newPlayersData = { ...players };

    if (playerNum === '1') {
      newPlayersData.player1.name = playerName;
    } else {
      newPlayersData.player2.name = playerName;
    }
    setPlayers(newPlayersData);
  }

  function handlePlayerBtnClick(playerNum, btnSymbol) {
    const newPlayersData = { ...players };

    if (playerNum === '1') {
      newPlayersData.player2.symbol = newPlayersData.player1.symbol;
      newPlayersData.player1.symbol = btnSymbol;
    } else {
      newPlayersData.player1.symbol = newPlayersData.player2.symbol;
      newPlayersData.player2.symbol = btnSymbol;
    }
    setPlayers(newPlayersData);

    if (newPlayersData.player1.symbol === 'X') {
      setIsPlayer1X(true);
    } else {
      setIsPlayer1X(false);
    }
  }

  function handleSubmit() {
    setIsFormActive(false);
    setIsBoardActive(true);
  }

  return (
    <div className='h-screen flex items-center justify-center relative'>
      <PlayerForm
        playersData={players}
        isPlayer1X={isPlayer1X}
        nameChangeHandler={handleNameChange}
        handlePlayerBtnClick={handlePlayerBtnClick}
        isActive={isFormActive}
        handleSubmit={handleSubmit}
      ></PlayerForm>
      <GameBoard
        board={board}
        tileClickHandler={handleClick}
        isActive={isBoardActive}
        isTileDisabled={isTileDisabled}
        currPlayerInfo={players[currPlayer]}
      ></GameBoard>
    </div>
  );
}

export default App;
