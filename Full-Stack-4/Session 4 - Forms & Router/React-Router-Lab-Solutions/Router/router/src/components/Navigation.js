import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <ul>
      <li>
        <NavLink to="/" activeStyle={{ color: "red" }} exact>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact" activeStyle={{ color: "red" }}>
          Contact
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" activeStyle={{ color: "red" }}>
          About
        </NavLink>
      </li>
      <li>
        <NavLink to="/student/jim smith" activeStyle={{ color: "red" }}>
          Student: Jim Smith
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/student/jane smith/50001"
          activeStyle={{ color: "red" }}
        >
          Student: Jane Smith, Student No: 50001
        </NavLink>
      </li>
      <li>
        <NavLink to="/redirect" activeStyle={{ color: "red" }}>
          Redirect
        </NavLink>
      </li>
    </ul>
  );
};

export default Navigation;
