import React, { Component } from 'react';
import './Dashboard.css';
import House from '../House/House';

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        Dashboard
        <House />
      </div>
    );
  }
}

export default Dashboard;