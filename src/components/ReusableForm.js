import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
      <input
          type='text'
          name='brand'
          placeholder='Brand' />
        <input
          type='text'
          name='name'
          placeholder='Beer Name' />
           <input
          type='text'
          name='price'
          placeholder='Price' />
           <input
          type='text'
          name='alcohol'
          placeholder='Alcohol Content' />
            <input
          type='text'
          name='count'
          placeholder='Pint Count' />
        <textarea
          name='description'
          placeholder='Add any other details' />
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;