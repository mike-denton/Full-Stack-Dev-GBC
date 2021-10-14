import React from "react";
import axios from "axios";
import AddStudent from "./AddStudent";
import DeleteAction from "./DeleteAction";

export default class UserList extends React.Component {
  state = {
    users: []
  };

  componentDidMount() {
    this.getUsers();
  }

  refreshUsersListHandler() {
    alert("click refresh users!");
    getUsers();
  }

  getUsers() {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then(res => {
      const users = res.data;
      this.setState({ users });
    });
  }

  render() {
    return (
      <div>
        <AddStudent onAddUser={this.refreshUsersListHandler.bind(this)} />
        <ul>
          {this.state.users.map(user => (
            <li>
              {user.name}
              <DeleteAction id={user.id} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
