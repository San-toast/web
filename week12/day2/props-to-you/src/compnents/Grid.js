import React from "react";
import Picture from "./Picture";
import "./Grid.css";
export default function Grid(props) {
  return (
    <>
      <h2>Grid</h2>
      <div className="grid">
        {props.pictures.map((picture) => {
          return <Picture picture={picture} />;
        })}
      </div>
    </>
  );
}
