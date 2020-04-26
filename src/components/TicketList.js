import React from "react";
import Ticket from "./Ticket.js";
import PropTypes from "prop-types";

function TicketList(props) { //we add props as a parameter
    return (
        // <React.Fragment>
        // <Ticket 
        //     location="3A"
        //     names="Thanto and Haley"
        //     issue="Firebase will not save record!"
        // />
        // <Ticket
        //     location ="4B"
        //     names="Sleater and Kinney"
        //     issue="Prop types are throwing an error."
        // />
        // </React.Fragment>
        <React.Fragment>
        <hr />
        {props.ticketList.map((ticket, index) => // Loop through the list passed down from TicketControl.
          <Ticket names={ticket.names}
            location={ticket.location}
            issue={ticket.issue}
            key={index} />
        )}
        </React.Fragment>
    );
}

// Add propTypes for ticketList.
TicketList.propTypes = {
    ticketList: PropTypes.array
  };
  
export default TicketList;