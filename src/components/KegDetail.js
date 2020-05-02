import React from "react";
import PropTypes from "prop-types";

function KegDetail(props){
  const { keg } = props;

  return (
    <React.Fragment>
      <h1>Keg Detail</h1>
      <h3>{props.brand}</h3> 
      <p>{props.name}</p>
      <p>{props.price}</p>
      <p>{props.alcoholContent}</p>
      <div>
        <img src={props.img} alt={props.name} />
      </div>
      <hr/>
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object
};

export default KegDetail;