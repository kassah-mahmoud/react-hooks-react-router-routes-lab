import React from "react";
import { NavLink } from "react-router-dom";

const styling = {
  backgroundColor: 'white',
  color: 'black',
  padding: '2px 5px',
}

const activeStyling = {
  backgroundColor: 'gray'
}

function NavBar() {
  return (
    <div className="navbar">
      <NavLink exact to="/"  style={styling}  activeStyle={activeStyling}>
        Home
      </NavLink>
      <NavLink to="/movies" style={styling}  activeStyle={activeStyling}>
        Movies
      </NavLink>
      <NavLink to="/directors" style={styling}  activeStyle={activeStyling}>
        Directors
      </NavLink>
      <NavLink to="/actors" style={styling}  activeStyle={activeStyling} >
        Actors
      </NavLink>
    </div>
  );
}

export default NavBar;
