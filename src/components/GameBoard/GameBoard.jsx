import React from 'react';
import Tile from '../Tile/Tile.jsx';

function GameBoard({
  board,
  tileClickHandler,
  isActive,
  isTileDisabled,
  currPlayerInfo,
}) {
  const lowerLastChar = currPlayerInfo.name
    .charAt(currPlayerInfo.name.length - 1)
    .toLowerCase();
  let playerText = currPlayerInfo.name;
  playerText += lowerLastChar === 's' ? `' Turn` : `'s Turn`;
  const directionText = `Place an ${currPlayerInfo.symbol}`;
  const tileList = board.map((value, index) => (
    <Tile
      symbol={value}
      tileID={index}
      clickHandler={tileClickHandler}
      isDisabled={isTileDisabled}
    ></Tile>
  ));
  return (
    <div
      className={`w-1/2 h-1/2 flex flex-col gap-4 ${
        isActive ? '' : 'invisible'
      }`}
    >
      <div className='flex flex-col text-center font-bold justify-center items-center gap-1'>
        <h1 className='text-4xl'>{playerText}</h1>
        <div className='w-1/2 text-2xl'>{directionText}</div>
      </div>
      <div className={`w-full h-full grid grid-cols-3 auto-rows-fr`}>
        {tileList}
      </div>
    </div>
  );
}

export default GameBoard;
