import React from 'react';
import './House.css';

export default function House(house_id, image_url, property_name, address, city, state, zipcode, monthly_morgage, desired_rent, deleteHouse) {

  return (
    <div className="house" key={house_id}>

      <img src={image_url} alt="house" />

      <div className="info-box">
        <p>Property Name: {property_name}</p>
        <p>Address: {address}</p>
        <p>City: {city}</p>
        <p>State: {state}</p>
        <p>Zip: {zipcode}</p>
      </div>

      <div className="info-box">
        <p>Monthly Morgage: {monthly_morgage}</p>
        <p>Desired Rent: {desired_rent}</p>
      </div>

      <div onClick={() => deleteHouse(house_id)} className="delete-btn" />
    </div>
  );
}

