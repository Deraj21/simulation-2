import React, { Component } from 'react';
import './Wizard.css';
import { Link } from 'react-router-dom';

class Wizard extends Component {
  render() {
    
    return (
      <div className="wizard below-header">
        <div className="heading">
          <h2>Add New Listing</h2>
          <Link to="/"><button className="pink btn">Cancel</button></Link>
        </div>

        <div className="form">
          <h3>Property Name</h3>
          <input type="text" />
          <h3>Address</h3>
          <input type="text" />

          <div className="bottom-inputs">
            <div>
              <h3>City</h3>
              <input type="text" />
            </div>
            <div>
              <h3>State</h3>
              <input type="text" />
            </div>
            <div>
              <h3>Zip</h3>
              <input type="number" />
            </div>
          </div>
        </div>

        <Link to="/"><button className="green btn" >Complete</button></Link>

      </div>
    );
  }
}

export default Wizard;