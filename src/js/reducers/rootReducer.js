import {combineReducers} from 'redux';
import cellsReducer from './cellsReducer';
import gameControlsReducer from './gameControlsReducer';
import undoable, { includeAction } from 'redux-undo';
import { APPLY_CELLS_CHANGES, CLEAR_CELLS, SET_INITIAL_CELLS, SET_CELL, REMOVE_CELL } from '../constants/actionTypes';

export default combineReducers({
  cells: undoable(cellsReducer, {
    limit: 1,
    filter: includeAction([APPLY_CELLS_CHANGES, CLEAR_CELLS, SET_INITIAL_CELLS, SET_CELL, REMOVE_CELL])
  }),
  gameControls: gameControlsReducer
});