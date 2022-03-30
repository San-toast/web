import React from "react";
import { Link } from "react-router-dom";
export default function Nav() {
  return (
    <div className="nav">
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/portfolio">Portfolio</Link>
    </div>
  );
}
