import React from 'react';
import PlayerButton from '../PlayerButton/PlayerButton.jsx';

function PlayerEntry({ playerNum }) {
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
          className='border-solid border-2 border-slate-700 rounded-md'
          type='text'
          name={`playerName${playerNum}`}
          id='player-name'
          placeholder=' Name'
        />
      </div>
      <div className='flex justify-between'>
        <PlayerButton playerSymbol='X'></PlayerButton>
        <PlayerButton playerSymbol='O'></PlayerButton>
      </div>
    </div>
  );
}

export default PlayerEntry;
