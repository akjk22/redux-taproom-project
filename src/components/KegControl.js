import React from 'react';
import NewKegForm from './NewKegForm';
import KegList from "./KegList/KegList";
import KegDetail from "./KegDetail";
import EditKegForm from './EditKegForm';
import { FakeKegList } from './fakeKegService';

class KegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterKegList: FakeKegList([]),
      selectedKeg: null,
      editing: false
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
      currentlyVisibleState = <KegDetail keg = {this.state.selectedKeg} onClickingDelete = {this.handleDeletingKeg} onClickingEdit = {this.handleEditClick} />
      buttonText = "Return to Keg List";
    } else if (this.state.formVisibleOnPage) { 
      currentlyVisibleState = <NewKegForm onNewKegCreation={this.handleAddingNewKegToList} />;
      // buttonText = "Return to Keg List";
    } else {
      currentlyVisibleState = <KegList kegList={this.state.masterKegList} onKegSelection={this.handleChangingSelectedKeg}/>;
      // currentlyVisibleState = <select>
      //   <KegList value={this.state.masterKegList} onKegSelection={this.handleChangingSelectedKeg}/>
      //   {optionTemplate}
      //   </select> ;
      buttonText = "Add Keg";
    }
    
    return (
      <React.Fragment>
        <label>
          Pick a Keg:
          <select value={this.state.value} onChange={this.handleChange}>
            {optionTemplate}
          </select>
        </label>
        {currentlyVisibleState}
      
      
        <button onClick={this.handleClick}>{buttonText}</button>

      </React.Fragment>
    );
  }

}

export default KegControl;