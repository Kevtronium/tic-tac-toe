import React from 'react';

function GameOver({ endState, handlePlayAgain }) {
  return (
    <div
      className={`flex flex-col justify-center items-center font-bold gap-2`}
    >
      <h2 className='text-4xl'>{endState.msg}</h2>
      <button
        className='px-6 border-solid border-2  border-slate-700 text-md font-bold rounded-lg hover:border-slate-900 focus:bg-gray-500'
        onClick={() => {
          handlePlayAgain();
        }}
      >
        Play Again
      </button>
    </div>
  );
}

export default GameOver;
