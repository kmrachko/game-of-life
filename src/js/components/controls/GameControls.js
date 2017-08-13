import React, { PureComponent } from 'react';
import DisplayControls from './DisplayControls';
import StateControls from './StateControls';
import HistoryControls from './HistoryControls';
import AddShapeControls from './AddShapeControls';
import '../../../css/GameControls.css';

export default class GameControls extends PureComponent {
  render() {
    return (
      <div className="game-controls">
        <DisplayControls/>
        <StateControls/>
        <HistoryControls/>
        <AddShapeControls/>
      </div>
    );
  }
}