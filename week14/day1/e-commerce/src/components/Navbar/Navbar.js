import "./Navbar.css";

import React from "react";

export default function Navbar() {
  return (
    <div className="navbar">
      <h2 className="logo">Francisco's </h2>
      <div className="navbarLinks">
        <a className="link" href="/">
          Home
        </a>
        <a className="link" href="/products">
          Products
        </a>
        <a className="link" href="/cart">
          Cart
        </a>
      </div>
    </div>
  );
}
