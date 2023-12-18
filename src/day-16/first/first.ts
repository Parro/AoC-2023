import advanceBeam from '../advanceBeam';

type First = (input: string) => number;

const first: First = (input) => {
  // Build matrix
  const matrix = input
    .split('\n')
    .map((line) => line.split('').map((val) => val));

  const start = { tile: { x: 0, y: 0 }, direction: 'toDown' };

  const energizedTiles = advanceBeam({
    matrix,
    start,
    direction:'toDown',
    energized: [],
  });
  return energizedTiles.filter(
    (energizedTile, index) => energizedTiles.findIndex((searchTile)=>{
      return searchTile.tile.x === energizedTile.tile.x && searchTile.tile.y === energizedTile.tile.y; 
    }) === index
  ).length;
};

export default first;
