import React from 'react';

function Tile({ symbol, tileID, clickHandler, isDisabled }) {
  return (
    <button
      className='w-full h-full border-solid border-2 border-black font-bold text-9xl'
      onClick={(e) => {
        if (symbol === '') {
          clickHandler(tileID);
        }
      }}
      disabled={isDisabled}
    >
      {symbol}
    </button>
  );
}

export default Tile;
