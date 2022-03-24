import React from "react";
export default function Header(props) {
  return (
    <div>
      <h1>Header</h1>
      <button onClick={() => props.StatusBody("header")}>Click Me</button>
    </div>
  );
}
