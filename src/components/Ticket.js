import React from "react";

function Ticket(props) {
  return (
    <React.Fragment>
      <div onClick = {() => props.whenTicketClicked(props.id)}>
      {/* passed down from TicketControl to TicketList as a prop called onTicketSelection. Then TicketList passed it down to Ticket as a prop called whenTicketClicked. */}
        <h3>{props.location} - {props.names}</h3>
        <p><em>{props.issue}</em></p>
        <hr/>
      </div>
    </React.Fragment>
  );
}

Ticket.propTypes = {
  names: PropTypes.string,
  location: PropTypes.string,
  issue: PropTypes.string,
  id: PropTypes.string, // new PropType
  whenTicketClicked: PropTypes.func // new PropType
};

export default Ticket;
