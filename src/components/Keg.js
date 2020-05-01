import React from "react";
import PropTypes from "prop-types";

// import {KegList} from './fakeKegService';

function Keg(props){
  const kegImgStyles = {
    width: '400px',
    height: '400px',
  }

  return (
    <React.Fragment>
    <div>
      <h3>{props.brand}</h3> 
      <p>{props.name}</p>
      <p>{props.price}</p>
      <p>{props.alcoholContent}</p>
      <div>
        <img src={props.img} alt={props.name} style={kegImgStyles}/>
      </div>
    </div>
    </React.Fragment>
  );
  }

  Keg.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    brand: PropTypes.string,
    price: PropTypes.number,
    alcholContent: PropTypes.number,
    img: PropTypes.string
  };

export default Keg;

