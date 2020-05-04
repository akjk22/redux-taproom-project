import React from 'react';
import NewKegForm from './NewKegForm';
import KegList from "./KegList/KegList";
import KegDetail from "./KegDetail";
import EditKegForm from './EditKegForm';
import { FakeKegList } from './fakeKegService';
// import DropDown from './DropDown';

class KegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterKegList: FakeKegList([]),
      selectedKeg: null,
      editing: false, 
      count: 124
    };
 
  }

  handleClick = () => {
   if (this.state.selectedKeg != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedKeg: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleAddingNewKegToList = (newKeg) => {
    const newMasterKegList = this.state.masterKegList.concat(newKeg);
    this.setState({masterKegList: newMasterKegList,
      formVisibleOnPage: false
    });
  }

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.state.masterKegList.filter(keg => keg.id === id)[0];
    this.setState({selectedKeg: selectedKeg});
  }

  handleDeletingKeg = (id) => {
  const newMasterKegList = this.state.masterKegList.filter(keg => keg.id !== id);
  this.setState({
    masterKegList: newMasterKegList,
    selectedKeg: null
  });
}

handleEditClick = () => {
  console.log("handleEditClick reached!");
  this.setState({editing: true});
}

handleEditingKegInList = (kegToEdit) => {
  const editedMasterKegList = this.state.masterKegList
    .filter(keg => keg.id !== this.state.selectedKeg.id)
    .concat(kegToEdit);
  this.setState({
      masterKegList: editedMasterKegList,
      editing: false,
      selectedKeg: null
    });
}


handleDeletingKeg = (id) => {
  const newMasterKegList = this.state.masterKegList.filter(keg => keg.id !== id);
  this.setState({
    masterKegList: newMasterKegList,
    selectedKeg: null
  });
}


// handleIncrementPint = (pintCount) => {
//   const editedMasterKegCount = this.state.masterKegList
//   .filter(keg => keg.id !== this.state.selectedKeg.id)
//   .concat(pintCount);
//   this.setState({
//   masterKegList: editedMasterKegCount,
//   count: this.state.count + 1 
//   });
// }
handleIncrementPint = (id) => {
  const selectedKeg = this.state.masterKegList.map(keg => keg.id === id)[0];
  this.setState({selectedKeg: selectedKeg,
    count: this.state.count + 1 });
}

handleDecrementPint = () => {
  this.setState({ count: this.state.count - 1 });
};

//handle dropdown form submit

// handleChange(event) {
//   this.setState({value: event.target.value});
// }

// handleSubmit(event) {
//   alert('A name was submitted: ' + this.state.value);
//   event.preventDefault();
// }


  render(){
    let currentlyVisibleState = null;
    let buttonText = null; 
    let optionTemplate = this.state.masterKegList.map(v => (
      <option value={v.id}>{v.name}</option>
    ));
  if (this.state.editing ) {      
      currentlyVisibleState = <EditKegForm keg = {this.state.selectedKeg} onEditKeg = {this.handleEditingKegInList} />
      buttonText = "Return to Keg List"; 
    } else if (this.state.selectedKeg != null) {
      currentlyVisibleState = <KegDetail keg = {this.state.selectedKeg} onClickingDelete = {this.handleDeletingKeg} onClickingEdit = {this.handleEditClick} onClickingIncrement = {this.handleIncrementPint.bind(this)} onClickingDecrement = {this.handleDecrementPint.bind(this)} count = {this.state.count}/>
      buttonText = "Return to Keg List";
    } else if (this.state.formVisibleOnPage) { 
      currentlyVisibleState = <NewKegForm onNewKegCreation={this.handleAddingNewKegToList} />;
      // buttonText = "Return to Keg List";
    } else {
      currentlyVisibleState =
      <KegList kegList={this.state.masterKegList} onKegSelection={this.handleChangingSelectedKeg}/>;
      buttonText = "Add Keg";
    }
    
    return (
      <React.Fragment>
       <form>
        <label>
          Pick a Keg:
          <select value={this.state.value} onChange={this.handleChange}>
          {optionTemplate}
          
          </select>
        </label>
        </form>
        <button type="submit" value="Submit">See Keg</button>
     
        {currentlyVisibleState}
  
        <button onClick={this.handleClick}>{buttonText}</button>
  
      </React.Fragment>
    );
  }

}

export default KegControl;