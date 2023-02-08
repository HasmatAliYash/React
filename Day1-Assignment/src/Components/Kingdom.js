import React from "react";
import Zebra from "./Animals/CB-Zebra";
import Dog from "./Animals/CB-Dog";
import Elephant from "./Animals/CB-Elephant";
import Lion from "./Animals/CB-Lion";
import Wolf from "./Animals/CB-Wolf";
import Horse from "./Animals/CB-Horse";
import Nyctibius from "./Birds/FB-Nyctibius";
import Owl from "./Birds/FB-Owl";
import Parrot from "./Birds/FB-Parrot";
import Dove from "./Birds/FB-Dove";
import Hummingbirds from "./Birds/FB-Hummingbirds";
import Budgerigar from "./Birds/FB-Budgerigar";

class Kingdom extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>Kingdom</h1>
        <div className="row">
          <div className="col-6 border">
            <h1>Animals</h1>
            <hr></hr>
            <Zebra />
            <Dog />
            <Elephant />
            <Lion />
            <Wolf/>
            <Horse />
          </div>
          <div className="col-6 border">
            <h1>Birds</h1>
            <hr></hr>
            <Nyctibius />
            <Owl />
            <Parrot />
            <Dove />
            <Hummingbirds />
            <Budgerigar />
          </div>
        </div>
      </div>
    );
  }
}

export default Kingdom;
