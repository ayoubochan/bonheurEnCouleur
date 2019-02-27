import React, { Component } from 'react';
import './index.scss';
import Logomenu from '../../assets/images/logomenu.png';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <a className="navbar__link" href="#welcome">
            <img className="navbar__link__image" src={Logomenu} alt="fleur logo" />
            <p className="navbar__link__welcome" href="#welcome">WELCOME</p>
          </a>
          <ul className="navbar__menu">
            <li className="navbar__menu__item"><a className="navbar__menu__item__link" href="#calendriercal">Calendrier</a></li>
            <li className="navbar__menu__item"><a className="navbar__menu__item__link" href="#concept">Concept</a></li>
          </ul>
        </nav>
      </div>

    );
  }
}

export default NavBar;
