import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import Birds from "./FB-Birds";
import Users from "./FB-Users";
import Animals from "./FB-Animals";
import Employees from "./FB-Employees";

export default function LivingThings() {
  const [item, setItem] = useState("birds");
  return (
    <div>
      <div>{item === "birds" && <Birds></Birds>}</div>
      <div>{item === "animals" && <Animals></Animals>}</div>
      <div>{item === "users" && <Users></Users>}</div>
      <div>{item === "employees" && <Employees></Employees>}</div>

      <Stack gap={4} className="col-md-2 mx-auto" direction="horizontal">
        <div id="contentArea"></div>
        <Button onClick={() => setItem("animals")}>Animals</Button>
        <Button onClick={() => setItem("users")}>Users</Button>
        <Button onClick={() => setItem("employees")}>Employees</Button>
        <Button onClick={() => setItem("birds")}>Birds</Button>
      </Stack>
    </div>
  );
}
