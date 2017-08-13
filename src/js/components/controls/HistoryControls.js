import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { ActionCreators } from 'redux-undo';
import saveGame from '../../actions/gameControls/saveGame';

class HistoryControls extends PureComponent {
  render() {
    return (
      <div className="history-controls">
        History:<br/>
        <button onClick={this.props.undo}>Undo</button>
        <button onClick={this.props.redo}>Redo</button><br/>
        <button onClick={this.props.saveGame}>Save</button>
      </div>
    );
  }
}

export default connect(null, {undo: ActionCreators.undo, redo: ActionCreators.redo, saveGame})(HistoryControls);