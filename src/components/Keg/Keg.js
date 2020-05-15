import React from "react";
import PropTypes from "prop-types";


function Keg(props){

  return (
    <React.Fragment>
    <div onClick = {() => props.whenKegClicked(props.id)} >
      <h3>{props.brand}</h3> 
      <p>{props.name}</p>
      <p>{props.price}</p>
      <p>{props.alcohol}</p>
      <p>{props.description}</p>
      <p>Pint Count: {props.count}</p>
    </div>
    </React.Fragment>
  );
  }

  Keg.propTypes = {
    name: PropTypes.string,
    brand: PropTypes.string,
    price: PropTypes.string,
    alcohol: PropTypes.string,
    description: PropTypes.string,
    id: PropTypes.string,
    whenKegClicked: PropTypes.func,
    count: PropTypes.number
  };

export default Keg;

