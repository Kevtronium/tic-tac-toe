import React from 'react';
import PlayerEntry from '../PlayerEntry/PlayerEntry.jsx';

function PlayerForm() {
  return (
    <div className='absolute top-0 w-full h-full'>
      <div className='z-10 absolute top-1/3 right-[40%]'>
        <form className='flex flex-col gap-6 p-6 border-solid border-2 border-black rounded-md'>
          <h1 className='font-bold text-2xl text-center'>Enter Players</h1>
          <PlayerEntry playerNum='1'></PlayerEntry>
          <PlayerEntry playerNum='2'></PlayerEntry>
          <button
            className='px-8 w-full border-solid border-2  border-slate-700 text-md font-bold rounded hover:border-slate-900 focus:bg-gray-500'
            type='submit'
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
}

export default PlayerForm;
