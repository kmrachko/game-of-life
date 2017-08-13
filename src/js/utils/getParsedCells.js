export default function (cellsSet) {
  return Array.from(cellsSet).map(cell => JSON.parse(cell));
}