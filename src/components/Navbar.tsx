import React from "react";
import { NavLink } from "react-router-dom";
import github_logo from "../github-mark-white.svg";
import linkedin_logo from "../linkedin_white.svg";

function Navbar() {
  return (
    <nav className="Navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="https://www.linkedin.com/in/hannes-lantz-2974411a1/">
        <img src={linkedin_logo} alt="Linked In" />
      </NavLink>
      <NavLink to="https://github.com/hannes-lantz">
        <img src={github_logo} alt="GitHub" />
      </NavLink>
    </nav>
  );
}

export default Navbar;
