import React from "react";

export default function Employees(props) {
  const name = props.EmpName;
  const empDesignation = props.empDesignation;
  return (
    <div>
      <h2>{name}</h2>
      <p>{empDesignation}</p>
    </div>
  );
}
