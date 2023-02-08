import React, { useState } from "react";

export default function Animals(props) {
  const description = props.aboutLion;
  const animal = props.animalName
  
  return (
    <div>
      <h2>{animal}</h2>
      <p>{description}</p>
    </div>
  );
}
