import React from "react";
import HomeIcon from "./HomeIcon";
import "./HomeGrid.css";
export default function HomeGrid(props) {
  return (
    <div className="homeGrid">
      {props.icons.map((icon) => {
        return <HomeIcon icon={icon} />;
      })}
    </div>
  );
}
