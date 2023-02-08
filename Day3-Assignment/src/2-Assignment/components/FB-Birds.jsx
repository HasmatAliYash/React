import React from "react";

export default function Birds(props) {
  const description = props.description;
  const bird = props.birdName;

  return (
    <div>
      <h2>{bird}</h2>
      <p>{description}</p>
    </div>
  );
}
