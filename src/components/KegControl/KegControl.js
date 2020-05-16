import React from 'react';
import NewKegForm from '../NewKegForm/NewKegForm';
import KegList from "../KegList/KegList";
import KegDetail from "../KegDetail/KegDetail";
import EditKegForm from '../EditKegForm/EditKegForm';
import { FakeKegList } from '../../data/fakeKegService';
import './KegControl.css';
import hefImg from './img/hef.jpg';
import lagunitasImg from './img/lagunitas.jpg';
import rogueImg from './img/rogue.jpg';
import avidImg from './img/avid.jpeg';
import pfriemImg from './img/pfriem.png';
import tapGif from './img/tap.gif';
import pabstImg from './img/pabst.jpg';
import guinnessImg from './img/guinness.jpg';
import pacificoImg from './img/pacifico.jpg';
import Reveal from 'react-reveal/Reveal';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import PropTypes from "prop-types";


class KegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      // masterKegList: FakeKegList([]),
      selectedKeg: null,
      editing: false,
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
    const { dispatch } = this.props;
    const { id, name, brand, price, alcohol, count } = newKeg;
    const action = {
      type: 'ADD_KEG',
      id: id,
      name: name,
      brand: brand,
      price: price,
      alcohol: alcohol,
      count: count
    }
    dispatch(action);
    this.setState({formVisibleOnPage: false});
  }

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.state.masterKegList.filter(keg => keg.id === id)[0];
    this.setState({selectedKeg: selectedKeg});
  }

  handleDeletingKeg = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: 'DELETE_KEG',
      id: id
    }
    dispatch(action);
    this.setState({selectedKeg: null});
  }

handleEditClick = () => {
  this.setState({editing: true});
}

handleEditingKegInList = (kegToEdit) => {
  const { dispatch } = this.props;
  const { id, name, brand, price, alcohol, count } = kegToEdit;
  const action = {
    type: 'ADD_KEG',
    id: id,
    name: name,
    brand: brand,
    price: price,
    alcohol: alcohol,
    count: count
  }
  dispatch(action);
  this.setState({
    editing: false,
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
      // count: pint.count - 1 > 0
      // doesn't work because count becomes a boolean value
    };
  });
  console.log(sellPint)
  this.setState({ masterKegList: sellPint, editing: false, formVisibleOnPage: true, selectedKeg: sellPint });
}

  render(){

    let currentlyVisibleState = null;
    let buttonText = null; 
  if (this.state.editing ) {      
      currentlyVisibleState = <EditKegForm keg = {this.state.selectedKeg} onEditKeg = {this.handleEditingKegInList} onClickingDecrement = {this.handleDecrementPint} onClick={this.handleClick} />
      buttonText = "Return to Keg List"; 
    } else if (this.state.selectedKeg != null) {
      currentlyVisibleState = <KegDetail keg = {this.state.selectedKeg} onClickingDelete = {this.handleDeletingKeg} onClickingEdit = {this.handleEditClick} onClickingDecrement = {this.handleDecrementPint} />
      buttonText = "Return to Keg List";
    } else if (this.state.formVisibleOnPage) { 
      currentlyVisibleState = <NewKegForm onNewKegCreation={this.handleAddingNewKegToList} />;
    } else {
      currentlyVisibleState =
      <KegList kegList={this.props.masterKegList} onKegSelection={this.handleChangingSelectedKeg}/>;
      buttonText = "Add Keg";
    } 
    return (
      <React.Fragment>
      <Reveal>
      <div className="container">
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

KegControl.propTypes = {
  masterKegList: PropTypes.object
};

const mapStateToProps = state => {
  return {
    masterKegList: state
  }
}

KegControl = connect(mapStateToProps)(KegControl);

export default KegControl;