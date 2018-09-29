import React, { Component } from 'react';
import './Dashboard.css';
import House from '../House/House';
import { Link } from 'react-router-dom';

const DUMMMY_URLS = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0_EN7VrGvU-NrUD7BnD9avISa_DfdRY_IuUcWVh0L20FyH3mmeg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA-LfQpMp7TguZgzvX0mYIVXbbXHIn4BJzTn0iU6XVXY7Ey4nhAQ",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrkJKPbrzaXdkucAybnND9pF1Z71_xgqNeomxosi5UJgmDpHn5"
]

const HOUSES_DUMMY_DATA = [
  {
    house_id: 1,
    image_url: DUMMMY_URLS[0],
    property_name: 'Mansion',
    address: '2222 22nd street',
    city: 'Paltryville',
    state: 'MN',
    zipcode: 22222,
    monthy_morgage: 100,
    desired_rent: 450
  },
  {
    house_id: 2,
    image_url: DUMMMY_URLS[1],
    property_name: 'The House',
    address: '6789 Kilowa Lane',
    city: 'Jaredtown',
    state: 'AZ',
    zipcode: 50692,
    monthy_morgage: 1234,
    desired_rent: 12.45
  },
  {
    house_id: 3,
    image_url: DUMMMY_URLS[2],
    property_name: 'Big Freaking house',
    address: '2322 walnut Ave.',
    city: 'Amsterdam',
    state: 'UT',
    zipcode: 98989,
    monthy_morgage: 10000,
    desired_rent: 1000
  }
];

class Dashboard extends Component {



  render() {

    let houses = HOUSES_DUMMY_DATA.map(house => {
      let { house_id, image_url, property_name, address, city, state, zipcode, monthy_morgage, desired_rent } = house;

      return House(house_id, image_url, property_name, address, city, state, zipcode, monthy_morgage, desired_rent);
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

export default Dashboard;