import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <header className="">
    <nav className="navbar navbar-dark navbar-expand-lg bg-primary">
      <div className="navbar-brand">NoteApp</div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink exact to="/" className="nav-link">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
