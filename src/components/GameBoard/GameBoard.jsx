import React from 'react';
import Tile from '../Tile/Tile.jsx';

function GameBoard({ board, tileClickHandler }) {
  const tileList = board.map((value, index) => (
    <Tile symbol={value} tileID={index} clickHandler={tileClickHandler}></Tile>
  ));
  return (
    <div className='w-1/2 h-1/2 grid grid-cols-3 auto-rows-fr'>{tileList}</div>
  );
}

export default GameBoard;
