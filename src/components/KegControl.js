import React from 'react';
import NewKegForm from './NewKegForm';
import KegList from "./KegList/KegList";
import KegDetail from "./KegDetail";
import EditKegForm from './EditKegForm';
import { FakeKegList } from './fakeKegService';
import './KegControl.css';
// import DropDown from './DropDown';
import hefImg from './hef.jpg';
import lagunitasImg from './lagunitas.jpg';
import rogueImg from './rogue.jpg';
import avidImg from './avid.jpeg';
import pfriemImg from './pfriem.png';
import tapGif from './tap.gif';
import pabstImg from './pabst.jpg';
import guinnessImg from './guinness.jpg';
import pacificoImg from './pacifico.jpg';
import Reveal from 'react-reveal/Reveal';
import Button from 'react-bootstrap/Button';


class KegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterKegList: FakeKegList([]),
      selectedKeg: null,
      editing: false, 
      // count: 124
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

handleDecrementPint = () => {

  const sellPint = this.state.masterKegList.map((pint) => {
    if (pint.id !== this.state.selectedKeg.id) {
      return pint;
    }
    return {
      ...pint,
      count: pint.count - 1,
    };
  });
  console.log(sellPint)
  this.setState({ masterKegList: sellPint, editing: true,   formVisibleOnPage: true });
}



// handleDecrementPint = () => {

//   this.setState(   
//     prevState => ({ count: prevState.count - 1 })
//   );

// };


// handleDecrementPint = () => {

// const masterKegList = this.props;

// const pintCount= masterKegList.map(pint => {
//   return (
//     pint.count -1 
//   ) 
//     pintCount
// })

  // this.setState(prevState => { 
  //   const masterKegListPintCount = prevState.masterKegList.map((pint) => {
  //     if(this.state.id === pint.id ){
  //       pint.count = pint.count - 1
  //     }
  //     console.log(pint)
  //     return pint.count - 1
  //   })
  //   return {masterKegListPintCount}
  // })
// }
  // const selectedKeg = this.state.masterKegList.filter(keg => keg.id === id)[0];
  // this.setState({selectedKeg: selectedKeg, 
  //   count: this.state.count - 1});



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
      currentlyVisibleState = <KegDetail keg = {this.state.selectedKeg} onClickingDelete = {this.handleDeletingKeg} onClickingEdit = {this.handleEditClick} onClickingDecrement = {this.handleDecrementPint} />
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
      <Reveal>
      <div className="container">
        <form>
          <label>Pick a Keg:</label>
          <select value={this.state.value} onChange={this.handleChange}>
            {optionTemplate}
          </select>
        </form>
        
        <Button variant="primary" type="submit">See Keg</Button>
        {currentlyVisibleState}
        <Button variant="primary" onClick={this.handleClick}>{buttonText}</Button>
      </div>
      </Reveal>
      <Reveal>
      <div className="row">
        <div className="column">
          <img alt="" src={lagunitasImg} />
          <img alt="" src={pfriemImg} />
          <img alt="" src={rogueImg} />
          <img alt="" src={tapGif} />
          <img alt="" src={hefImg} />
          <img alt="" src={avidImg} />
          <img alt="" src={tapGif} />
        </div>
        <div className="column">
          <img alt="" src={pabstImg} />
          <img alt="" src={guinnessImg} />
          <img alt="" src={lagunitasImg} />
          <img alt="" src={pacificoImg} />
          <img alt="" src={pfriemImg} />
          <img alt="" src={pabstImg} />
        </div>
        <div className="column">
          <img alt="" src={lagunitasImg} />
          <img alt="" src={pfriemImg} />
          <img alt="" src={rogueImg} />
          <img alt="" src={tapGif} />
          <img alt="" src={hefImg} />
          <img alt="" src={avidImg} />
          <img alt="" src={tapGif} />
        </div>
        <div className="column">
          <img alt="" src={pabstImg} />
          <img alt="" src={guinnessImg} />
          <img alt="" src={lagunitasImg} />
          <img alt="" src={pacificoImg} />
          <img alt="" src={pfriemImg} />
          <img alt="" src={pabstImg} />
        </div>
      </div>
      </Reveal>
      </React.Fragment>
    );
  }

}

export default KegControl;