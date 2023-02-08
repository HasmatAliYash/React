import React from "react";

export default function Counter(props) {
  return (
    <div className="mb-5">
      <button onClick={props.increamentCounter}>Click Here</button>
    </div>
  );
}
