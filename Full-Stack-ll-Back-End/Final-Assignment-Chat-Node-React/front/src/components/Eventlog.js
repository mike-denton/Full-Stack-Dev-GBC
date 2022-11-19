import React from 'react';
import axios from "axios";

import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";

class EventLog extends React.Component {
    state = {
        events: []
    };

    componentDidMount() {
        this.getEvents();
    }

    getEvents() {
        axios.get(`http://localhost:3001/socketevents`)
        .then(res => {
            const events = res.data;
            this.setState({events});
        });
    }

    render() {
          const columns = [
            {
              dataField: "eventDateTime",
              text: "Date Time",
              sort: true
            },
            {
                dataField: "eventName",
                text: "Event Name",
                sort: true
            },
            {
                dataField: "eventOwner",
                text: "Owner",
                sort: true
            },
            {
              dataField: "eventDescription",
              text: "Description",
              sort: true
            },
            {
              dataField: "socketId",
              text: "Socket Id",
              sort: true
            }
            
          ];
          let noMessages = <div className="alert alert-danger" role="alert">There are no event logs available!</div>
          let data = <BootstrapTable
                bootstrap4
                keyField="_id"
                data={this.state.events}
                columns={columns}
                pagination={paginationFactory({ sizePerPage: 10 })}
            />

        return (
            <div className="container mt-2">
                <h2>Event logs</h2>
                {
                  this.state.events.length > 0 ? data : noMessages
              }
            </div>
        );
    }
}

export default EventLog;