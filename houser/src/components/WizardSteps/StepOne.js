import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { updateName, updateAddress, updateCity, updateState, updateZip } from '../../ducks/reducer';

function StepOne(props){

  let { name, address, city, state, zipcode } = props;
  console.log(`name: ${name}, address: ${address}, city: ${city}, state: ${state}, zip: ${zipcode}`);

  return (
    <div className="step-one step">
      <h3>Property Name</h3>
      <input onChange={e => props.updateName(e.target.value)} value={name} type="text" />
      <h3>Address</h3>
      <input onChange={e => props.updateAddress(e.target.value)} value={address} type="text" />

      <div className="bottom-inputs">
        <div>
          <h3>City</h3>
          <input onChange={e => props.updateCity(e.target.value)} value={city} type="text" />
        </div>
        <div>
          <h3>State</h3>
          <input onChange={e => props.updateState(e.target.value)} value={state} maxLength="2" type="text" />
        </div>
        <div>
          <h3>Zip</h3>
          <input onChange={e => props.updateZip(e.target.value) } value={zipcode} type="number" />
        </div>
      </div>

      <div className="nav-btn-box">
        <div></div>
        <Link to="/wizard/step2"><button className="darkgreen btn" >Next Step</button></Link>
      </div>

    </div>
  );
}

function mapStateToProps(reduxState){
  let { name, address, city, state, zip } = reduxState;
  return {
    name,
    address,
    city,
    state,
    zip
  };
}

export default connect(mapStateToProps, {updateName, updateAddress, updateCity, updateState, updateZip})(StepOne);