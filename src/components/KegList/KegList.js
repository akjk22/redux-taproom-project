import React from 'react';
import Keg from '../Keg/Keg';
import PropTypes from "prop-types";

function KegList(props) {  
  
  return (
    <React.Fragment>
      {Object.values(props.kegList).map((keg) => {
          // Make sure to explicitly return the Keg object this time! We will explain why below.
        return <Keg
          whenKegClicked={props.onKegSelection}
          name={keg.name}
          brand={keg.brand}
          price={keg.price}
          alcohol={keg.alcohol}
          description={keg.description}
          count={keg.count}
          id={keg.id}
          key={keg.id} />
        })}
    </React.Fragment>
  );
}

KegList.propTypes = {
  kegList: PropTypes.object,
  onKegSelection: PropTypes.func,
};



export default KegList;