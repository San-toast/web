import React from "react";
export default function Sidebar(props) {
  return (
    <div>
      <h1>Sidebar</h1>
      <button onClick={() => props.StatusBody("sidebar")}>Click Me</button>
    </div>
  );
}
