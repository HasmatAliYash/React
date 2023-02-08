import React from "react";
export default class CBComponentState extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listOfUsers: [
        {
          name: "Ji Hong",
          age: 44,
          gender: "Female",
        },
        {
          name: "Struart",
          age: 33,
          gender: "Male",
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <h3>Class Base Component displaying User's Details using STATE</h3>
        <div className="container">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Gender</th>
              </tr>
            </thead>
            <tbody>
              {this.state.listOfUsers.map((user, index) => (
                <tr key={index}>
                  <td>{user.name}</td>
                  <td>{user.age}</td>
                  <td>{user.gender}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
