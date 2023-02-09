import "./App.css";
import React from "react";
import ClassComponent from "./Assignment/Components/ClassComponent";
import FunctionalComponent from "./Assignment/Components/FunctionalComponent";
import CBCounterComponent from "./Assignment/Components/CBCounterComponent";

function App() {
  return (
    <div>
      <CBCounterComponent />
      <br></br>
      <br></br>
      <ClassComponent />
      <br></br>
      <br></br>
      <FunctionalComponent />F
    </div>
  );
}

export default App;
