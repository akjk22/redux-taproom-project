// import React from 'react';

// const DropDown = ( props ) => {
//   return (
//    <div className="Question">
//     <p>{props.title}</p>
//    </div>
//   )
//  };
 
//  export default DropDown;

import React, {Component} from 'react';
import { FakeKegList } from '../../data/fakeKegService';

class DropDown extends Component{
    constructor(props){
        super(props);
        this.state = {
          masterKegListy: FakeKegList(),
        }
       
    }

    //On the change event for the select box pass the selected value back to the parent
    handleChange = (event) =>
    {
        let selectedKeg = event.target.value;
        this.props.onSelectChange(selectedKeg);
    }

    render(){
      let masterKegListy = this.props.masterKegListy
      // let masterKegList = this.props.masterKegList;
      let options =  masterKegListy.map((data) =>
              <option 
                  key={data.id}
                  value={data.id}
              >
                  {data.name}
              </option>
          );
  
            return (
            <select name="customSearch" className="custom-search-select" onChange={this.handleChange}>
                <option>Select Item</option>
                {options}
           </select>
        )
    }
}

export default DropDown;