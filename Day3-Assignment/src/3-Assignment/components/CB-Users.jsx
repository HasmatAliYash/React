import React from "react";

export default class Users extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Krishna",
      description: "Krishna is an Full stack developer having 5 years of experience with Java and React"
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
