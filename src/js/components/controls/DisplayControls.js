import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import increaseSpeed from '../../actions/gameControls/increaseSpeed';
import decreaseSpeed from '../../actions/gameControls/decreaseSpeed';
import increaseZoom from '../../actions/gameControls/increaseZoom';
import decreaseZoom from '../../actions/gameControls/decreaseZoom';
import moveOffsetBottom from '../../actions/gameControls/moveOffsetBottom';
import moveOffsetLeft from '../../actions/gameControls/moveOffsetLeft';
import moveOffsetRight from '../../actions/gameControls/moveOffsetRight';
import moveOffsetTop from '../../actions/gameControls/moveOffsetTop';

class DisplayControls extends PureComponent {
  componentWillMount() {
    this.onKeyDown = this.onKeyDown.bind(this);
    window.addEventListener('keydown', this.onKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.onKeyDown);
  }
  onKeyDown(e) {
    switch (e.key) {
      case 'ArrowUp': {
        this.props.moveOffsetTop();
        return;
      }
      case 'ArrowDown': {
        this.props.moveOffsetBottom();
        return;
      }
      case 'ArrowLeft': {
        this.props.moveOffsetLeft();
        return;
      }
      case 'ArrowRight': {
        this.props.moveOffsetRight();
        return;
      }
    }
  }
  render() {
    return (
      <div className="display-controls">
        <div className="display-controls-zoom">
          Zoom:
          <button onClick={this.props.increaseZoom}>+</button>
          <button onClick={this.props.decreaseZoom}>-</button>
        </div>
        <div className="display-controls-speed">
          Speed:
          <button onClick={this.props.increaseSpeed}>+</button>
          <button onClick={this.props.decreaseSpeed}>-</button>
        </div>
        You can also navigate on the field using arrow keys!
      </div>
    );
  }
}

export default connect(null, {increaseZoom, decreaseZoom, increaseSpeed, decreaseSpeed,
  moveOffsetTop, moveOffsetRight, moveOffsetLeft, moveOffsetBottom})(DisplayControls);