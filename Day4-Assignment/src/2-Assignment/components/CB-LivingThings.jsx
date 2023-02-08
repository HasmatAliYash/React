import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default function LivingThings() {
  return (
    <div>
      <ul style={{ listStyle: "none", fontSize: "24px" }}>
        <li>
          <Button style={{ background: "#fff" }}>
            <Link to="cbusers">Users</Link>
          </Button>
        </li>
        <li>
          <Button style={{ background: "#fff" }}>
            <Link to="cbbirds">Birds</Link>
          </Button>
        </li>
        <li>
          <Button style={{ background: "#fff" }}>
            <Link to="cbemployees">Employees</Link>
          </Button>
        </li>
        <li>
          <Button style={{ background: "#fff" }}>
            <Link to="cbanimals">Animals</Link>
          </Button>
        </li>
      </ul>
    </div>
  );
}
