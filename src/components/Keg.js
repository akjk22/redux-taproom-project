import React from "react";
import PropTypes from "prop-types";

// import {KegList} from './fakeKegService';

function Keg(props){
  // const kegImgStyles = {
  //   width: '400px',
  //   height: '400px',
  // }

  return (
    <React.Fragment>
    <div onClick = {() => props.whenKegClicked(props.id)}>
    <label for="keg">Choose a keg:</label>
    <select id="keg">
      <option value="volvo"></option>
      <option value="saab">Saab</option>
      <option value="mercedes">Mercedes</option>
      <option value="audi">Audi</option>
    </select>
      <h3>{props.brand}</h3> 
      <p>{props.name}</p>
      <p>{props.price}</p>
      <p>{props.alcohol}</p>
      <p>{props.description}</p>
      {/* <div>
        <img src={props.img} alt={props.name} style={kegImgStyles}/>
      </div> */}
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
    whenKegClicked: PropTypes.func
    // img: PropTypes.string
  };

export default Keg;

