import React from "react";
import "./Picture.css";
export default function Picture(props) {
  return (
    <div className="picture">
      <img src={props.picture.url}></img>
    </div>
  );
}
