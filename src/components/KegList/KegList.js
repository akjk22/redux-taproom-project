import React from 'react';
import Keg from '../Keg/Keg';
// import hefImg from './hef.jpg';
// import lagunitasImg from './lagunitas.jpg';
// import rogueImg from './rogue.jpg';
// import avidImg from './avid.jpeg';
// import pfriemImg from './pfriem.png';
import PropTypes from "prop-types";

function KegList(props) {  
  
  return (
  <React.Fragment>
      {/* <hr /> */}
      {props.kegList.map((keg) =>
      <Keg
        whenKegClicked = { props.onKegSelection }
        name={keg.name}
        brand={keg.brand}
        price={keg.price}
        alcohol={keg.alcohol}
        description={keg.description}
        count={keg.count}
        id={keg.id}
        key={keg.id}
        />
    )} >

  </React.Fragment>
);
}
KegList.propTypes = {
  kegList: PropTypes.array,
  onKegSelection: PropTypes.func,
};



export default KegList;