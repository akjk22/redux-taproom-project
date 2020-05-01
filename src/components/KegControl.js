import React from 'react';
import NewKegForm from './NewKegForm';
import KegList from "./KegList/KegList";
import NewKegForm from './NewKegForm';
// import { KegList } from './fakeKegService';


class KegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
    // this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }
 
  render(){
    let  currentlyVisibleState = null;
    let buttonText = null; 
    if (this.state.formVisibleOnPage) { 
      currentlyVisibleState = <NewKegForm />;
      buttonText = "Return to Keg List";
    } else {
      currentlyVisibleState = <KegList />
      buttonText = "Add Keg";
    }
    
    return (
      <React.Fragment>
        {currentlyVisibleState}
    <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }

}

export default KegControl;