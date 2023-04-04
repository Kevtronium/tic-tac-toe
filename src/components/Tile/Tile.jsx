import React from 'react';

function Tile({ symbol, tileID, clickHandler }) {
  return (
    <button
      className='w-full h-full border-solid border-2 border-black font-bold text-9xl'
      onClick={(e) => {
        if (symbol === '') {
          clickHandler(tileID);
        }
      }}
    >
      {symbol}
    </button>
  );
}

export default Tile;
