import React from 'react';
import './House.css';

export default function House(house_id, image_url, property_name, address, city, state, zipcode, monthy_morgage, desired_rent) {

  return (
    <div className="house">
      <div className="info-box">
        <p>Property Name: {property_name}</p>
        <p>Address: {address}</p>
        <p>City: {city}</p>
        <p>State: {state}</p>
        <p>Zip: {zipcode}</p>
      </div>
      <div className="delete-btn" />
    </div>
  );
}
