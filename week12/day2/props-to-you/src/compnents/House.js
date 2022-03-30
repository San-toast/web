import React from "react";
import "./House.css";
import Room from "./Room";
export default function House(props) {
  //   const { rooms } = props;
  return (
    <>
      <h2>House</h2>
      <div className="house">
        {props.rooms.map((room) => {
          return <Room room={room} />;
        })}
      </div>
    </>
  );
}
