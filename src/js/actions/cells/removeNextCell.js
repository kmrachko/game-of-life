import { NEXT_REMOVE_CELL } from '../../constants/actionTypes';

export default function (x, y) {
  return {
    type: NEXT_REMOVE_CELL,
    payload: `{"x":${x},"y":${y}}`
  }
}