import React, { Component } from 'react';
import './Dashboard.css';
import House from '../House/House';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import { connect } from 'react-redux';
import { updateHouses } from '../../ducks/reducer';

class Dashboard extends Component {
  constructor(props){
    super(props);

    this.state = {
      housesData: []
    }

    this.deleteHouse = this.deleteHouse.bind(this);
    this.editHouse = this.editHouse.bind(this);
  }

  componentDidMount(){
    Axios.get('/api/houses')
      .then( response => {
        this.props.updateHouses(response.data);
      })
      .catch( err => console.log(err.message));
  }

  deleteHouse(id){
    Axios.delete(`/api/house/${id}`)
      .then(response => {
        this.props.updateHouses(response.data);
      })
      .catch(err => console.log(err.message));
  }

  editHouse(id){
    Axios.edit(`/api/house/${id}`)
      .then(response => {
        this.props.updateHouses(response.data);
      })
      .catch(err => console.log(err.message));
  }

  render() {
    let { housesData } = this.props;
    let houses = housesData.map(house => {
      let { house_id, image_url, property_name, address, city, state, zipcode, monthy_morgage, desired_rent } = house;

      return House(house_id, image_url, property_name, address, city, state, zipcode, monthy_morgage, desired_rent, this.deleteHouse, this.editHouse);
    });

    return (
      <div className="dashboard below-header">
        <div className="heading">
          <h1>Dashboard</h1>
          <Link to="/wizard"><button className="green btn"><h3>Add New Property</h3></button></Link>
        </div>
        <hr/>
        <h3>Home Listings</h3>
        <div className="houses-container">
          { houses }
        </div>
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

export default connect(mapStateToProps, { updateHouses })(Dashboard);