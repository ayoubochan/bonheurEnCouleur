import React, { Component } from 'react';
import './index.scss';
import { withRouter } from 'react-router';
import PackageList from '../PackageList/index';

class LeftSide extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    if (this.props.location.pathname === '/calendrier/1') {
      return (
        <div className="left-container">Planches</div>
      );
    }
    if (this.props.location.pathname === '/calendrier/2') {
      return (
        <div className="left-container">
          <PackageList />
        </div>
      );
    }
    if (this.props.location.pathname === '/calendrier/3') {
      return (
        <div className="left-container">Formulaire</div>
      );
    }
    if (this.props.location.pathname === '/recharge/1') {
      return (
        <div className="left-container">Couleurs</div>
      );
    }
    if (this.props.location.pathname === '/recharge/2') {
      return (
        <div className="left-container">Formulaire</div>
      );
    }
    return (
      <div className="left-container">ERREUR</div>
    );
  }
}

export default withRouter(LeftSide);
