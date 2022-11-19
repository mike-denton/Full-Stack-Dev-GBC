import React from 'react';
import axios from "axios";

import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";


class ChatMessages extends React.Component {
    state = {
        messages: []
    };

    componentDidMount() {
        this.getMessages();
    }

    getMessages() {
        axios.get(`http://localhost:3001/chathistory`)
        .then(res => {
            const messages = res.data;
            this.setState({messages});
            console.log(messages.length);
        });
    }

    render() {
        const columns = [
          {
            dataField: "chatDateTime",
            text: "Date Time",
            sort: true
          },
          {
              dataField: "chatRoom",
              text: "Room",
              sort: true
          },
          {
              dataField: "chatUsername",
              text: "User Name",
              sort: true
          },
          {
              dataField: "chatMessage",
              text: "Message",
              sort: true
          },
          {
            dataField: "socketId",
            text: "Socket Id",
            sort: true
          }
        ];

        let noMessages = <div className="alert alert-danger" role="alert">There are no messages available!</div>
        let data = <BootstrapTable
                bootstrap4
                keyField="_id"
                data={this.state.messages}
                columns={columns}
                pagination={paginationFactory({ sizePerPage: 10 })}
            />
        return (
          <div className="container mt-2">
              <h2>Chat Messages</h2>
              {
                  this.state.messages.length > 0 ? data : noMessages
              }
          </div>
      );
    }
  }

export default ChatMessages;