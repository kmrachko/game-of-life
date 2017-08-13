import { REMOVE_CELL } from '../../constants/actionTypes';

export default function (x, y) {
  return {
    type: REMOVE_CELL,
    payload: `{"x":${x},"y":${y}}`
  }
}