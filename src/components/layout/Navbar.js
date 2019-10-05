import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar bg-primary">
      <img
        className="pl-logo"
        src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Premier_League_Logo.svg/1200px-Premier_League_Logo.svg.png"
        alt="Premier League logo"
      />
      <ul>
        <li style={{fontSize: "18px", textTransform: "uppercase"}}><Link to="/">Home</Link></li>
        <li style={{fontSize: "18px", textTransform: "uppercase"}}><Link to="/about">About</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
