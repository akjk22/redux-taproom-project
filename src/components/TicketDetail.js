import React from "react";
import PropTypes from "prop-types";

function TicketDetail(props){
  // object destructuring  is used below to derive the ticket object from our props. Otherwise, for a ticket attribute like location, we'd need to say props.ticket.location instead of just ticket.location.
  const { ticket } = props;

  return (
    <React.Fragment>
      <h1>Ticket Detail</h1>
      {/* Below we are passing in a prop called ticket that we will set to the value of selectedTicket from our TicketControl . */}
      <h3>{ticket.location} - {ticket.names}</h3>
      <p><em>{ticket.issue}</em></p>
      <hr/>
    </React.Fragment>
  );
}

TicketDetail.propTypes = {
  // PropType of object due to object destructuring.
  ticket: PropTypes.object
};

export default TicketDetail;