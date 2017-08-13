import { SET_INITIAL_CELLS } from '../../constants/actionTypes';

export default function (initialCells) {
  return {
    type: SET_INITIAL_CELLS,
    payload: initialCells
  }
}