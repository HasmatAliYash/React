import React from "react";

export default class Animals extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Lion",
      description:
        "The lion is a large cat of the genus Panthera native to Africa and India. It has a muscular.",
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
