import React from "react";
import Zebra from "../Kingdom/Animals/CB-Zebra";
import Dog from "../Kingdom/Animals/CB-Dog";
import Elephant from "../Kingdom/Animals/CB-Elephant";
import Lion from "../Kingdom/Animals/CB-Lion";
import Nyctibius from "../Kingdom/Birds/FB-Nyctibius";
import Owl from "../Kingdom/Birds/FB-Owl";
import Parrot from "../Kingdom/Birds/FB-Parrot";
import Dove from "../Kingdom/Birds/FB-Dove";

class Kingdom extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>Kingdom</h1>
        <div className="row">
          <div className="col-6 border">
            <h1>Animals</h1>
            <Zebra />
            <Dog />
            <Elephant />
            <Lion />
          </div>
          <div className="col-6 border">
            <h1>Birds</h1>
            <Nyctibius />
            <Owl />
            <Parrot />
            <Dove />
          </div>
        </div>
      </div>


    );
  }
}

export default Kingdom;
