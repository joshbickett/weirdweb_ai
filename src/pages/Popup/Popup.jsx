import React from 'react';
import logo from '../../assets/img/robot.png';
import Greetings from '../../containers/Greetings/Greetings';
import './Popup.css';

const Popup = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={logo}
          className="App-logo"
          alt="logo"
          style={{ borderRadius: '25px' }}
        />
      </header>
    </div>
  );
};

export default Popup;
