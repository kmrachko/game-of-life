import { SET_CELL } from '../../constants/actionTypes';

export default function (x, y) {
  return {
    type: SET_CELL,
    payload: `{"x":${x},"y":${y}}`
  }
}