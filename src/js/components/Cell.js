import React, { PureComponent } from 'react';
import '../../css/Cell.css';

class Cell extends PureComponent {
  render() {
    return (
      <div className={"cell"+(this.props.alive?" cell-alive":'')}
           onClick={() => this.props.onClick(!this.props.alive, this.props.x, this.props.y)}>
      </div>
    );
  }
}

export default Cell;
