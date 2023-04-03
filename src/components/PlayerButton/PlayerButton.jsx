import React from 'react';

function PlayerButton({ playerSymbol }) {
  return (
    <button className='px-12 border-solid border-2  border-slate-700 text-md font-bold rounded-lg hover:border-slate-900 focus:bg-gray-500'>
      {playerSymbol}
    </button>
  );
}

export default PlayerButton;
