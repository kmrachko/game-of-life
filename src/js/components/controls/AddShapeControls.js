import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import setCells from '../../actions/cells/setCells';
import shapes from '../../utils/standardShapes';
import getShapeCoords from '../../utils/getShapeCoords';

class AddShapeControls extends PureComponent {
  constructor(props) {
    super(props);
    let defaultShape = '';
    for (let shapeName in shapes) {
      if (shapes.hasOwnProperty(shapeName)) {
        defaultShape = shapeName;
        break;
      }
    }
    this.state = {
      selectedShape: defaultShape
    };
  }
  getShapesList() {
    const shapesList = [];
    for (let shapeName in shapes) {
      if (shapes.hasOwnProperty(shapeName)) {
        shapesList.push(
          <option key={shapeName} value={shapeName}>{shapeName}</option>
        );
      }
    }
    return (
      <select onChange={(e) => this.setState({selectedShape: e.target.value})}>
        {shapesList}
      </select>);
  }
  onAddShape() {
    const x = this.props.offset.x;
    const y = this.props.offset.y;
    this.props.setCells(getShapeCoords({x, y}, shapes[this.state.selectedShape]))
  }
  render() {
    return (
      <div className="history-controls">
        Add predefined shape: <br/>
        {this.getShapesList()}
        <button onClick={() => this.onAddShape()}>Add</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    zoom: state.gameControls.zoom,
    offset: state.gameControls.offset
  };
}

export default connect(mapStateToProps, {setCells})(AddShapeControls);