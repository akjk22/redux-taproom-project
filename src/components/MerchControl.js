import React from 'react';
import { merchList } from './fakeMerchService';


class MerchControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      card: merchList(),
     
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

export default MerchControl;