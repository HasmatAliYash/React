import React from "react";

export default class Birds extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Pikok",
      description:
        "The Indian peafowl, also known as the common peafowl, and blue peafowl, is a peafowl species native to the Indian subcontinent. It has been introduced to many other countries.",
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
