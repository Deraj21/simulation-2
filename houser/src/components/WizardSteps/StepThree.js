import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import { updateHouses, updateMorgage, updateRent, resetWizardData } from '../../ducks/reducer';

function StepThree(props){

  let { image_url, name, address, city, state, zipcode, morgage, rent } = props;
  console.log({image_url, name, address, city, state, zipcode, morgage, rent});

  function addHouse(){
    Axios.post('/api/house', { image_url, property_name: name, address, city, state, zipcode, monthly_morgage: morgage, desired_rent: rent })
      .then(response => {
        this.props.updateHouses(response.data);
        this.props.resetWizardData();
      })
      .catch(err => console.log(err.message));
  }

  return (
    <div className="step-three step">
      <h3>Monthly Morgage Ammount</h3>
      <input onChange={e => props.updateMorgage(e.target.value)} type="number" value={morgage} />

      <h3>Desired Monthly Rent</h3>
      <input onChange={e => props.updateRent(e.target.value)} type="number" value={rent} />

      <div className="nav-btn-box">
        <Link to="/wizard/step2"><button className="darkgreen btn" >Previous Step</button></Link>
        <Link to="/"><button onClick={() => addHouse()} className="green btn" >Complete</button></Link>
      </div>

    </div>
  );
}

function mapStateToProps(reduxState){
  let { image_url, name, address, city, state, zipcode, morgage, rent } = reduxState;
  return {
    image_url,
    name,
    address,
    city,
    state,
    zipcode,
    morgage,
    rent
  };
}

export default connect(mapStateToProps, { updateHouses, updateMorgage, updateRent, resetWizardData })(StepThree);