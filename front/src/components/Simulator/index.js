import React, { Component } from 'react';
import './index.css';
import LeftSide from '../LeftSide/index';

class Simulator extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    return (
      <div>
        <LeftSide />
      </div>
    );
  }
}

export default Simulator;
