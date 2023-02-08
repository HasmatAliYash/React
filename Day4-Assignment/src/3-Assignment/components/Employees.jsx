import React, { Component } from "react";
import Table from "react-bootstrap/Table";
export default class Employees extends Component {
  constructor(props) {
    super(props);

    this.state = {
      type: "Employee",
      data: [],
      update: true,
    };
  }

  componentDidMount() {
    fetch("https://reqres.in/api/users")
      .then((response) => response.json())
      .then((responseData) => this.setState({ data: responseData.data }));
  }

  render() {
    return (
      <>
        <h2 className="text-center">Employees Table</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.first_name}</td>
                <td>{employee.last_name}</td>
                <td>{employee.email}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </>
    );
  }
}
