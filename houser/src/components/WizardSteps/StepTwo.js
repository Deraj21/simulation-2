import React from 'react';
import { connect } from 'react-redux';
import { updateImageUrl } from '../../ducks/reducer';
import { Link } from 'react-router-dom';

function StepTwo(props){

  let { image_url } = props;

  return (
    <div className="step-two step">
      <h3>Image Url</h3>
      <input onChange={e => props.updateImageUrl(e.target.value)} type="text" value={image_url} />

      <div className="nav-btn-box">
        <Link to="/wizard/step1"><button className="darkgreen btn" >Previous Step</button></Link>
        <Link to="/wizard/step3"><button className="darkgreen btn" >Next Step</button></Link>
      </div>

    </div>
  );
}

function mapStateToProps(state){
  let { image_url } = state;
  return {
    image_url
  };
}

export default connect(mapStateToProps, {updateImageUrl})(StepTwo);