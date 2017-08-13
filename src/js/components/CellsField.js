import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import '../../css/CellsField.css';
import { DEFAULT_COLUMNS_COUNT, DEFAULT_ROWS_COUNT } from '../constants/uiConstants';
import setCell from '../actions/cells/setCell';
import removeCell from '../actions/cells/removeCell';
import Cell from './Cell';

class CellsField extends PureComponent {
  constructor(props) {
    super(props);
    this.onCellClick = this.onCellClick.bind(this);
  }
  onCellClick(cellAlive, x, y) {
    if (cellAlive) {
      this.props.setCell(x, y);
    } else {
      this.props.removeCell(x, y);
    }
  }
  getCellsField() {
    const xZoomOffset = Math.round(DEFAULT_COLUMNS_COUNT * this.props.zoom / 2);
    const yZoomOffset = Math.round(DEFAULT_ROWS_COUNT * this.props.zoom / 2);
    const lastRow = DEFAULT_ROWS_COUNT * this.props.zoom + this.props.offset.y - yZoomOffset;
    const lastColumn = DEFAULT_COLUMNS_COUNT * this.props.zoom + this.props.offset.x - xZoomOffset;
    const rows = [];
    
    for (let rowIndex = this.props.offset.y - yZoomOffset; rowIndex <= lastRow; rowIndex++) {
      let rowCells = [];
      for (let column = this.props.offset.x - xZoomOffset; column <= lastColumn; column++) {
        const cell = {x: column, y: rowIndex};
        const strCell = `{"x":${cell.x},"y":${cell.y}}`;
        const alive = this.props.cells.has(strCell);
        rowCells.push(
          <Cell key={strCell}
                {...cell}
                alive={alive}
                onClick={this.onCellClick}
          />
        );
      }
      rows.push(<div key={rowIndex} className="cells-field-row">{rowCells}</div>);
    }
    return rows;
  }
  render() {
    return (
      <div className="cells-field">
        {this.getCellsField()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cells: state.cells.present.currentCells,
    zoom: state.gameControls.zoom,
    offset: state.gameControls.offset
  };
}

export default connect(mapStateToProps, {setCell, removeCell})(CellsField);
