import React from 'react';
import PlayerButton from '../PlayerButton/PlayerButton.jsx';

function PlayerEntry({
  playerNum,
  player,
  handleNameChange,
  isPlayer1X,
  handlePlayerBtnClick,
}) {
  return (
    <div className='flex flex-col gap-3'>
      <div className='flex flex-col gap-0.5'>
        <label
          className='font-bold text-sm tracking-wider'
          htmlFor='player-name'
        >
          PLAYER {playerNum}
        </label>
        <input
          className='border-solid border-2 border-slate-700 font-bold rounded-md'
          type='text'
          name={`playerName${playerNum}`}
          id='player-name'
          placeholder=' Name'
          required
          value={player.name}
          onChange={(e) => {
            handleNameChange(e.target.value, playerNum);
          }}
        />
      </div>
      <div className='flex justify-between'>
        <PlayerButton
          playerSymbol='X'
          playerNum={playerNum}
          isPlayer1X={isPlayer1X}
          handlePlayerBtnClick={handlePlayerBtnClick}
        ></PlayerButton>
        <PlayerButton
          playerSymbol='O'
          playerNum={playerNum}
          isPlayer1X={isPlayer1X}
          handlePlayerBtnClick={handlePlayerBtnClick}
        ></PlayerButton>
      </div>
    </div>
  );
}

export default PlayerEntry;
