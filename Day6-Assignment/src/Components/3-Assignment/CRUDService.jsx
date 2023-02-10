import React, { Component } from "react";
export default class CRUDService extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usersList: [],
      empDetails: {},
    };
  }

  getUsers() {
    const URL = "https://jsonplaceholder.typicode.com/users";
    fetch(URL)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        this.setState({ usersList: response });
      });
  }

  addUser() {
    const user = { user: "Hasmat" };
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify({ body: user }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        alert(`add user with ID:${response.id}`);
      });
  }

  deleteUser(userID) {
    fetch(`https://jsonplaceholder.typicode.com/users/${userID}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        alert("User deleted successfully");
      });
  }

  componentDidMount() {
    this.getUsers();
  }
  render() {
    return (
      <div>
        <h3>List of users using GET API call</h3>
        <ul>
          {this.state.usersList.map((user, index) => (
            <li key={index}>{user.username}</li>
          ))}
        </ul>
        <h3>Add a user using POST API call</h3>
        <button
          onClick={() => {
            this.addUser();
          }}
        >
          Add User
        </button>
        <h3>Delete a user using DELETE API call</h3>
        <button
          onClick={() => {
            this.deleteUser(1);
          }}
        >
          Delete User
        </button>
      </div>
    );
  }
}
