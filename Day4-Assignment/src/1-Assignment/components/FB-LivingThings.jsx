import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default function LivingThings() {
  return (
    <div>
      <ul style={{ listStyle: "none", fontSize: "24px" }}>
        <li>
          <Button style={{ background: "#fff" }}>
            <Link to="fbusers">Users</Link>
          </Button>
        </li>
        <li>
          <Button style={{ background: "#fff" }}>
            <Link to="fbbirds">Birds</Link>
          </Button>
        </li>
        <li>
          <Button style={{ background: "#fff" }}>
            <Link to="fbemployees">Employees</Link>
          </Button>
        </li>
        <li>
          <Button style={{ background: "#fff" }}>
            <Link to="fbanimals">Animals</Link>
          </Button>
        </li>
      </ul>
    </div>
  );
}
