import React from "react";
import { v4 } from 'uuid';
// toggle between KegList and KegForm - Local State

function NewKegForm(props){

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    console.log(event.target.brand.value);
    console.log(event.target.name.value);
    console.log(event.target.price.value);
    console.log(event.target.price.value);
    console.log(event.target.alcohol.value);
  }

  return (
    <React.Fragment>
    <form onSubmit={handleNewKegFormSubmission}>
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
        <textarea
          name='description'
          placeholder='Add any other details' />
        <button type='submit'>Add Keg to List!</button>
      </form>
    </React.Fragment>
  );
}

export default NewKegForm;