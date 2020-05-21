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
import * as a from './../../actions';

class KegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterKegList: FakeKegList([]),
      selectedKeg: null,
      editing: false,
    };
 
  }

  handleClick = () => {
   if (this.state.selectedKeg != null) {
      this.setState({
        selectedKeg: null,
        editing: false
      });
    } else {
      const { dispatch } = this.props;
      const action = a.toggleForm();
    dispatch(action);
  }
}

  handleAddingNewKegToList = (newKeg) => {
    const { dispatch } = this.props;
    const action = a.addKeg(newKeg);
    dispatch(action);
    const action2 = a.toggleForm();
    dispatch(action2);
  }

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.props.masterKegList[id];
    this.setState({selectedKeg: selectedKeg});
  }

  handleDeletingKeg = (id) => {
    const { dispatch } = this.props;
    const action = a.deleteKeg(id)
    dispatch(action);
    this.setState({
      selectedKeg: null
    });
  }

handleEditClick = () => {
  this.setState({editing: true});
}

handleEditingKegInList = (kegToEdit) => {
  const { dispatch } = this.props;
  const action = a.addKeg(kegToEdit);
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
      count: Math.max(pint.count - 1, 0),
    };
  });
  const select = { ...this.state.selectedKeg, count: Math.max(this.state.selectedKeg.count - 1, 0) };
  this.setState({ masterKegList: sellPint,  selectedKeg: select });
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
    } else if (this.props.formVisibleOnPage) { 
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
    masterKegList: state.masterKegList,
    formVisibleOnPage: state.formVisibleOnPage
  }
}

KegControl = connect(mapStateToProps)(KegControl);

export default KegControl;