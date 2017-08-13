import React from 'react';
import ReactDOM from 'react-dom';
import GameContainer from './js/components/GameContainer';
import { Provider } from 'react-redux';
import './css/index.css';
import { store } from './js/utils/reduxStore';

ReactDOM.render(
  <Provider store={store}>
    <GameContainer />
  </Provider>,
  document.getElementById('root')
);
