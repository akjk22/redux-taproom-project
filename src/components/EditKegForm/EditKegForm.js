import React from "react";
import ReusableForm from "../ReusableForm/ReusableForm";
import PropTypes from "prop-types";

function EditKegForm (props) {
  const { keg } = props;

  function handleEditKegFormSubmission(event) {
    props.onClickingDecrement(keg.id)
    props.onClick()
    event.preventDefault();
    props.onEditKeg({brand: event.target.brand.value, name: event.target.name.value, price: event.target.price.value, alcohol: event.target.alcohol.value, count: event.target.count.value, description: event.target.description.value, id: keg.id});
  }


  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleEditKegFormSubmission}
        buttonText="Update Keg" />
    </React.Fragment>
  );
}

EditKegForm.propTypes = {
  onEditKeg: PropTypes.func
};

export default EditKegForm;