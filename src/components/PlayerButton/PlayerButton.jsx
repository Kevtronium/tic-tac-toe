import React from 'react';

function PlayerButton({
  playerSymbol,
  playerNum,
  isPlayer1X,
  handlePlayerBtnClick,
}) {
  let isActive = false;

  if (playerSymbol === 'X') {
    if (
      (playerNum === '1' && isPlayer1X) ||
      (playerNum === '2' && !isPlayer1X)
    ) {
      isActive = true;
    }
  } else if (playerSymbol === 'O') {
    if (
      (playerNum === '1' && !isPlayer1X) ||
      (playerNum === '2' && isPlayer1X)
    ) {
      isActive = true;
    }
  }
  return (
    <button
      type='button'
      className={`px-12 border-solid border-2  border-slate-700 text-md font-bold rounded-lg hover:border-slate-900 focus:bg-gray-500 ${
        isActive ? 'bg-gray-500' : ''
      }`}
      onClick={(e) => {
        handlePlayerBtnClick(playerNum, playerSymbol);
      }}
    >
      {playerSymbol}
    </button>
  );
}

export default PlayerButton;
