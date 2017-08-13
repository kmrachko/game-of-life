import { createStore, applyMiddleware } from 'redux';
import * as storage from 'redux-storage';
import createEngine from 'redux-storage-engine-localstorage';
import rootReducer from '../reducers/rootReducer';
import setReplacer from './setReplacer';
import setReviver from './setReviver';
import { SAVE_GAME } from '../constants/actionTypes';

const reducer = storage.reducer(rootReducer);
let engine = createEngine('game-of-life-redux', setReplacer, setReviver);
//engine = debounceEngine(engine, 1000);
const middleware = storage.createMiddleware(engine, [], [SAVE_GAME]);
const createStoreWithMiddleware = applyMiddleware(middleware)(createStore);
export const store = createStoreWithMiddleware(reducer);
export const loadStore = storage.createLoader(engine);
