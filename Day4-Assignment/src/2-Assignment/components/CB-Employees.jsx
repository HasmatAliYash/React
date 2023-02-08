import React from "react";

export default class Employees extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Stephen",
      description: "Project Manager",
    };
  }

  render() {
    return (
      <div>
        <h2>{this.state.name}</h2>
        <p>{this.state.description}</p>
      </div>
    );
  }
}
