import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import HomeGrid from "./HomeGrid";
export default function Home() {
  const icons = [
    { url: "https://cdn-icons-png.flaticon.com/512/1384/1384033.png" },
    {
      url: "https://cdn3.iconfinder.com/data/icons/free-social-icons/67/linkedin_circle_black-512.png",
    },
  ];
  return (
    <div>
      <div className="nav">
        <Link to="/about">About</Link>
        <Link to="/portfolio">Portfolio</Link>
      </div>
      <div className="center">
        <h1>Santos Gutierrez</h1>
        <h2>Full Stack Dev | So Enthusiastic | Adjective | Another One</h2>
        <HomeGrid icons={icons} />
      </div>
      <div></div>
    </div>
  );
}
