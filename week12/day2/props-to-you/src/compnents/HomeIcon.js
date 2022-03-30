import React from "react";
import "./HomeIcon.css";
export default function HomeIcon(props) {
  return (
    <div className="homeIcon">
      <img src={props.icon.url}></img>
    </div>
  );
}
