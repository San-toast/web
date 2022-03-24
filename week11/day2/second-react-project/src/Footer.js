import React from "react";
export default function Footer(props) {
  return (
    <div>
      <h1>Footer</h1>
      <button onClick={() => props.StatusBody("footer")}>Click Me</button>
    </div>
  );
}
