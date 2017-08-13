export default function (cell, rowCount) {
  const neighbours = [];
  rowCount = rowCount || 1;
  
  for (let x = cell.x - rowCount; x <= cell.x + rowCount; x++) {
    for (let y = cell.y - rowCount; y <= cell.y + rowCount; y++) {
      if (x !== cell.x || y !== cell.y) {
        neighbours.push({x, y});
      }
    }
  }
  
  return neighbours;
}