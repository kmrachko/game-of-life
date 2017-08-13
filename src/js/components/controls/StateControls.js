import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { DEFAULT_ROWS_COUNT, DEFAULT_COLUMNS_COUNT, INITIAL_CELLS_ALIVE_RATE } from '../../constants/uiConstants';
import setInitialCells from '../../actions/cells/setInitialCells';
import getRandomInt from '../../utils/getRandomInt';
import getParsedCells from '../../utils/getParsedCells';
import setNextCell from '../../actions/cells/setNextCell';
import removeNextCell from '../../actions/cells/removeNextCell';
import applyCellsChanges from '../../actions/cells/applyCellsChanges';
import resetToInitial from '../../actions/cells/resetToInitial';
import clearCells from '../../actions/cells/clearCells';
import getCellNeighbours from '../../utils/getCellNeighbours';

class StateControls extends PureComponent {
  constructor(props) {
    super(props);
    this.parsedCells = getParsedCells(props.cells);
    this.lifeUpdater = false;
  }
  componentWillUpdate(nextProps) {
    if (nextProps.cells !== this.props.cells) {
      this.parsedCells = getParsedCells(nextProps.cells);
    }
    if (nextProps.speed !== this.props.speed && this.lifeUpdater) {
      this.onPause();
      this.onStart(nextProps.speed);
    }
  }
  calculateCellsState() {
    const deadCells = new Set();
    this.parsedCells.forEach(cell => {
      let neighboursCount = 0;
      getCellNeighbours(cell).forEach(neighbour => {
        if (this.props.cells.has(`{"x":${neighbour.x},"y":${neighbour.y}}`)) {
          neighboursCount++;
        } else {
          deadCells.add(neighbour);
        }
      });
      if (neighboursCount < 2 || neighboursCount >= 4) {
        this.props.removeNextCell(cell.x, cell.y);
      } else {
        this.props.setNextCell(cell.x, cell.y);
      }
    });
    deadCells.forEach(deadCell => {
      let neighboursCount = 0;
      getCellNeighbours(deadCell).forEach(neighbour => {
        if (this.props.cells.has(`{"x":${neighbour.x},"y":${neighbour.y}}`)) {
          neighboursCount++;
        }
      });
      if (neighboursCount === 3) {
        this.props.setNextCell(deadCell.x, deadCell.y);
      }
    });
  }
  onStart(speed) {
    speed = speed || this.props.speed;
    console.log(speed);
    this.lifeUpdater =  setInterval(() => {
      this.calculateCellsState();
      this.props.applyCellsChanges();
    }, 100 * speed);
  }
  onPause() {
    if (this.lifeUpdater) {
      clearInterval(this.lifeUpdater);
      this.lifeUpdater = false;
    }
  }
  onStop() {
    this.onPause();
    this.props.resetToInitial();
  }
  onClear() {
    this.onPause();
    this.props.clearCells();
  }
  onGenerateRandomCells() {
    let initialCells = new Set();
    let aliveCellsInitialAmount = Math.round(INITIAL_CELLS_ALIVE_RATE * (DEFAULT_COLUMNS_COUNT + 1)
      * (DEFAULT_ROWS_COUNT + 1)); // add one for 0 column and 0 row
    while (initialCells.size < aliveCellsInitialAmount) {
      let columnsOffset = Math.round(DEFAULT_COLUMNS_COUNT / 2);
      let rowOffset = Math.round(DEFAULT_ROWS_COUNT / 2);
      let x = getRandomInt(-1 * columnsOffset, columnsOffset);
      let y = getRandomInt(-1 * rowOffset, rowOffset);
      initialCells.add(`{"x":${x},"y":${y}}`);
    }
    console.log(initialCells.size);
    this.props.setInitialCells(initialCells);
  }
  render() {
    return (
      <div className="state-controls">
        <div className="state-controls-lifecycle">
          Game state:<br/>
          <button onClick={() => this.onGenerateRandomCells()}>Generate random cells</button><br/>
          <button onClick={() => this.onStart()}>Start</button>
          <button onClick={() => this.onPause()}>Pause</button>
          <button onClick={() => this.onStop()}>Stop</button><br/>
          <button onClick={() => this.onClear()}>Clear</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cells: state.cells.present.currentCells,
    speed: state.gameControls.speed
  };
}

export default connect(mapStateToProps, {setInitialCells, setNextCell,
  removeNextCell, applyCellsChanges, resetToInitial, clearCells})(StateControls);