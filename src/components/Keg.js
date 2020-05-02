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
    <div onClick = {() => props.whenKegClicked(props.id)}>
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
    price: PropTypes.string,
    alcholContent: PropTypes.number,
    id: PropTypes.string,
    whenKegClicked: PropTypes.func,
    img: PropTypes.string
  };

export default Keg;

