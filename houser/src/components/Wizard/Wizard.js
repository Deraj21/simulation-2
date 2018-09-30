import React, { Component } from 'react';
import './Wizard.css';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import { connect } from 'react-redux';
import { updateHouses } from '../../ducks/reducer';

class Wizard extends Component {
  constructor(props){
    super(props);

    this.state = {
      image_url: '',
      property_name: '',
      address: '',
      city: '',
      state: '',
      zipcode: 0,
      monthly_morgage: 0,
      desired_rent: 0
    }

    this.handleChange = this.handleChange.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  handleChange(e, key){
    let obj = {};
    obj[key] = e.target.value;
    this.setState({ ...obj });
  }

  addHouse(){
    let { image_url, property_name, address, city, state, zipcode } = this.state;
    Axios.post('/api/house', { property_name, address, city, state, zipcode })
      .then(response => {
        this.props.updateHouses(response.data);
      })
      .catch(err => console.log(err.message));
  }

  cancel(){
    this.setState({
      property_name: '',
      address: '',
      city: '',
      state: '',
      zip: null
    });
  }

  render() {
    let { property_name, address, city, state, zipcode } = this.state;
    
    return (
      <div className="wizard below-header">
        <div className="heading">
          <h2>Add New Listing</h2>
          <Link to="/"><button onClick={() => this.cancel()} className="pink btn">Cancel</button></Link>
        </div>

        <div className="form">
          <h3>Property Name</h3>
          <input onChange={e => this.handleChange(e, 'property_name')} value={property_name} type="text" />
          <h3>Address</h3>
          <input onChange={e => this.handleChange(e, 'address')} value={address} type="text" />

          <div className="bottom-inputs">
            <div>
              <h3>City</h3>
              <input onChange={e => this.handleChange(e, 'city')} value={city} type="text" />
            </div>
            <div>
              <h3>State</h3>
              <input onChange={e => this.handleChange(e, 'state')} value={state} maxLength="2" type="text" />
            </div>
            <div>
              <h3>Zip</h3>
              <input onChange={e => this.handleChange(e, 'zipcode')} value={zipcode} maxLength="5" type="number" />
            </div>
          </div>
        </div>

        <Link to="/"><button onClick={() => this.addHouse()} className="green btn" >Complete</button></Link>

      </div>
    );
  }
}

function mapStateToProps(state){
  let { housesData } = state;
  return {
    housesData
  }
}

export default connect(mapStateToProps, { updateHouses })(Wizard);