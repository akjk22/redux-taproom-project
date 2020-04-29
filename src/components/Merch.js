import React from "react";
import PropTypes from "prop-types";

// import {merchList} from './fakeMerchService';

function Merch(props){
  const merchImgStyles = {
    width: '400px',
    height: '400px',
  }

  return (
    <React.Fragment>
    <div>
      <h3>{props.name}</h3> 
      <p>{props.description}</p>
      <p>{props.quantity}</p>
      <div>
        <img src={props.img} alt={props.name} style={merchImgStyles}/>
      </div>
    </div>
    </React.Fragment>
  );
  }

  Merch.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    quantity: PropTypes.number,
    img: PropTypes.string
  };

export default Merch;

