import React from 'react';
import Keg from '../Keg/Keg';
import PropTypes from "prop-types";

function KegList(props) {  
  
  return (
  <React.Fragment>
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
    )}

  </React.Fragment>
);
}
KegList.propTypes = {
  kegList: PropTypes.array,
  onKegSelection: PropTypes.func,
};



export default KegList;