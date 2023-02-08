import React, { useState } from "react";

export default function Animals() {
  const aboutLion =
    "The lion is a large cat of the genus Panthera native to Africa and India. It has a muscular.";
  const [name] = useState("Lion");
  const [description] = useState(aboutLion);
  return (
    <div>
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );
}
