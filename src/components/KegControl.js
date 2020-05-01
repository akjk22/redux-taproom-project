import React from 'react';
import { KegList } from './fakeKegService';


class KegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      card: KegList(),
     
    };
    // this.handleClick = this.handleClick.bind(this);
  }

  // handleClick = () => {
  //   this.setState(prevState => ({
  //     answerVisibleOnPage: !prevState.answerVisibleOnPage
  //   }));
  // }

  render(){
    
    
    return (
      <React.Fragment>

        

       
      </React.Fragment>
    );
  }

}

export default KegControl;