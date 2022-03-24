import React from "react";
export default function Body(props) {
  return (
    <div className="body">
      <h1>Body</h1>
      <button onClick={() => props.StatusBody("body")}>Click Me</button>
    </div>
  );
}
