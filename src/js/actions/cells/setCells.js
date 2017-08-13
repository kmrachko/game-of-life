import { SET_CELLS } from '../../constants/actionTypes';

export default function (cells) {
  let strCells = new Set();
  cells.forEach(cell => strCells.add(`{"x":${cell.x},"y":${cell.y}}`));
  return {
    type: SET_CELLS,
    payload: strCells
  }
}