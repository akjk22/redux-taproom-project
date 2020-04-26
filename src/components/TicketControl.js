import React from "react";
import NewTicketForm from './NewTicketForm';
import TicketList from './TicketList';

class TicketControl extends React.Component {
  

  constructor(props) {
    super(props)
    this.state = {
      formVisibleOnPage: false,
      // Move masterTicketList into State
      masterTicketList: [],
      selectedTicket: null 
      // When we click on a ticket the selectedTicket state slice will update, showing our placeholder TicketDetail component. 
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    // this.setState(prevState => ({
    //   formVisibleOnPage: !prevState.formVisibleOnPage
    // }));
    if (this.state.selectedTicket != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedTicket: null
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }
// this is new code
  handleAddingNewTicketToList = (newTicket) => {
    const newMasterTicketList = this.state.masterTicketList.concat(newTicket);
    this.setState({masterTicketList: newMasterTicketList,
                  formVisibleOnPage: false });
  }
// When a user clicks on the ticket, it will activate this method below, which will change the value of selectedTicket to an actual ticket object.

  handleChangingSelectedTicket = (id) => {
    const selectedTicket = this.state.masterTicketList.filter(ticket => ticket.id === id)[0];
    this.setState({selectedTicket: selectedTicket});
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.selectedTicket != null) {
      // the value of this.state.selectedTicket below should be passed as a prop called ticket down to our TicketDetail component.
      currentlyVisibleState = <TicketDetail ticket = {this.state.selectedTicket} />
      buttonText = "Return to Ticket List";
      // While our TicketDetail component only takes placeholder data, we will eventually be passing the value of selectedTicket as a prop.
    }
   else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewTicketForm onNewTicketCreation={this.handleAddingNewTicketToList} />  // new code in this line 
    } else {
      // passing master ticket list down as a prop to TicketList 
      currentlyVisibleState = <TicketList ticketList={this.state.masterTicketList} onTicketSelection={this.handleChangingSelectedTicket}  />;
      buttonText  = "Add Ticket";
        // Because a user will actually be clicking on the ticket in the Ticket component, we will need to pass our new handleChangingSelectedTicket method as a prop.
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }

}

export default TicketControl;