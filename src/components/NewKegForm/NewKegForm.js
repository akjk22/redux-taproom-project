import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";
import ReusableForm from "../ReusableForm/ReusableForm";

function NewKegForm(props){

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({brand: event.target.brand.value, name: event.target.name.value, price: event.target.price.value, alcohol: event.target.alcohol.value, count: parseInt(event.target.count.value), description: event.target.description.value, id: v4()});
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleNewKegFormSubmission}
        buttonText="Add Keg to List" />
    </React.Fragment>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func,
  count: PropTypes.number
};

export default NewKegForm;