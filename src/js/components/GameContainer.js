import React, { PureComponent } from 'react';
import '../../css/LifeContainer.css';
import CellsField from './CellsField';
import GameControls from './controls/GameControls';
import { store, loadStore } from '../utils/reduxStore';

export default class GameContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    };
  }
  componentDidMount() {
    let setLoaded = () => {
      this.setState({loaded: true})
    };
    loadStore(store)
      .then(setLoaded)
      .catch(setLoaded);
  }
  render() {
    return (
      <div className="life-container">
        {this.state.loaded ?
          <div className="life-container-wrapper">
            <CellsField/>
            <GameControls/>
          </div>:
          <div className="life-container-loading">
            Loading game...
          </div>}
      </div>
    );
  }
}