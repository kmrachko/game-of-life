import { INCREASE_SPEED, DECREASE_SPEED, INCREASE_ZOOM, DECREASE_ZOOM, MOVE_OFFSET_BOTTOM,
  MOVE_OFFSET_LEFT, MOVE_OFFSET_RIGHT, MOVE_OFFSET_TOP} from '../constants/actionTypes';
import {SPEED_MULTIPLIER, ZOOM_MULTIPLIER, OFFSET_MULTIPLIER} from '../constants/uiConstants';

const defaultState = {
  zoom: 1,
  speed: 3,
  offset: {
    x: 0,
    y: 0
  }
};

export default function (state = defaultState, action) {
  switch (action.type) {
    case INCREASE_SPEED: {
      if (state.speed - SPEED_MULTIPLIER >= 1) {
        return {
          ...state,
          speed: state.speed - SPEED_MULTIPLIER
        };
      } else {
        return state;
      }
    }
    case DECREASE_SPEED: {
      return {
        ...state,
        speed: state.speed + SPEED_MULTIPLIER
      };
    }
    case DECREASE_ZOOM: {
      return { ...state, zoom: state.zoom + ZOOM_MULTIPLIER};
    }
    case INCREASE_ZOOM: {
      if (state.zoom - ZOOM_MULTIPLIER >= 1) {
        return {
          ...state,
          zoom: state.zoom - ZOOM_MULTIPLIER
        };
      } else {
        return state;
      }
    }
    case MOVE_OFFSET_TOP: {
      return { ...state, offset: {...state.offset, y: state.offset.y - OFFSET_MULTIPLIER}};
    }
    case MOVE_OFFSET_BOTTOM: {
      return { ...state, offset: {...state.offset, y: state.offset.y + OFFSET_MULTIPLIER}};
    }
    case MOVE_OFFSET_LEFT: {
      return { ...state, offset: {...state.offset, x: state.offset.x - OFFSET_MULTIPLIER}};
    }
    case MOVE_OFFSET_RIGHT: {
      return { ...state, offset: {...state.offset, x: state.offset.x + OFFSET_MULTIPLIER}};
    }
    default: {
      return state;
    }
  }
};