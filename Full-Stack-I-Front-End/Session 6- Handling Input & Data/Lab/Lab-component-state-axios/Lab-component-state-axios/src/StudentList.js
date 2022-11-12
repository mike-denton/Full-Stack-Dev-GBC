import React from "react";
import axios from "axios";
import AddStudent from "./AddStudent";
import DeleteAction from "./DeleteAction";

export default class UserList extends React.Component {
  state = {
    users: [],
  };
 // life cycle method...
  componentDidMount() {
    this.getUsers();
  }

  addNewStudent = (studentData) => {
    console.log(`addStudent: ${studentData}`);
    console.log(studentData.user);
    // mock data, since api doesnt save post data
    let data = {
      name: studentData.user.name,
      id: studentData.user.id,
    };
    this.setState({
      users: [...this.state.users, data],
    });
  };

  deleteStudent = (id) => {
    console.log(`deleteStudent id: ${id}`);
    // remove the deleted user from user list and set state
    const filterUsers = this.state.users.filter((x) => x.id !== id);
    this.setState({
      users: filterUsers,
    });
  };

  getUsers() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
    .then((res) => {
      const users = res.data;
      this.setState({ users });
    });
  }

  render() {
    return (
      <div>
        <AddStudent addNewStudent={this.addNewStudent} />
        <ul>
          {this.state.users.map((user) => (
            <li key={user.id}>
              {user.name}
              <DeleteAction id={user.id} deleteStudent={this.deleteStudent} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
