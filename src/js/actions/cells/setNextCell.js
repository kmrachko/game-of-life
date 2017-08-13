import { NEXT_SET_CELL } from '../../constants/actionTypes';

export default function (x, y) {
  return {
    type: NEXT_SET_CELL,
    payload: `{"x":${x},"y":${y}}`
  }
}