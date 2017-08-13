import {SET_CELLS, CLEAR_CELLS, SET_INITIAL_CELLS, RESET_TO_INITIAL, NEXT_SET_CELL, NEXT_REMOVE_CELL, SET_CELL, REMOVE_CELL, APPLY_CELLS_CHANGES} from '../constants/actionTypes';
import addMultiple from '../utils/addMultiple';

const defaultState = {
  initialCells: new Set(),
  currentCells: new Set(),
  nextCells: new Set()
};

export default function (state = defaultState, action) {
  switch (action.type) {
    case SET_CELLS: {
      if (action.payload.size > 0) {
        return {
          ...state,
          currentCells: addMultiple(state.currentCells, action.payload)
        };
      } else {
        return state;
      }
    }
    case CLEAR_CELLS: {
      return defaultState;
    }
    case RESET_TO_INITIAL: {
      return {
        ...state,
        currentCells: new Set(state.initialCells),
        nextCells: new Set(state.initialCells)
      };
    }
    case SET_INITIAL_CELLS: {
      return {
        ...state,
        currentCells: new Set(action.payload),
        nextCells: new Set(action.payload),
        initialCells: new Set(action.payload)
      };
    }
    case NEXT_SET_CELL: {
      if (!state.nextCells.has(action.payload)) {
        let newState = {
          ...state,
          nextCells: new Set(state.nextCells).add(action.payload)
        };
        if (state.nextCells.size === 0) {
          newState.initialCells = new Set(state.currentCells);
        }
        return newState;
      } else {
        return state;
      }
    }
    case NEXT_REMOVE_CELL: {
      if (state.nextCells.has(action.payload)) {
        const newCells = new Set(state.nextCells);
        newCells.delete(action.payload);
        let newState = {
          ...state,
          nextCells: newCells
        };
        if (state.nextCells.size === 0) {
          newState.initialCells = new Set(state.currentCells);
        }
        return newState;
      } else {
        return state;
      }
    }
    case SET_CELL: {
      if (!state.currentCells.has(action.payload)) {
        return {
          ...state,
          currentCells: new Set(state.currentCells).add(action.payload)
        };
      } else {
        return state;
      }
    }
    case REMOVE_CELL: {
      if (state.currentCells.has(action.payload)) {
        const newCells = new Set(state.currentCells);
        newCells.delete(action.payload);
        return {
          ...state,
          currentCells: newCells
        };
      } else {
        return state;
      }
    }
    case APPLY_CELLS_CHANGES: {
      return {...state, currentCells: new Set(state.nextCells)};
    }
    default: {
      return state;
    }
  }
};