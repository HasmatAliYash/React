import React from "react";

export default function Users(props) {
  const user = props.userName;
  const description = props.aboutUser;
  return (
    <div>
      <h2>{user}</h2>
      <p>{description}</p>
    </div>
  );
}
