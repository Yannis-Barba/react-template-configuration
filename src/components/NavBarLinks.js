import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBarLinks({ isOpen }) {
  return (
    <div
      className={` ${
        isOpen ? 'flex flex-col gap-5 -right-16 -bottom-2 ' : 'hidden'
      } `}
    >
      <NavLink activeClassName="active" to="/">
        Home
      </NavLink>
      <NavLink activeClassName="active" to="/my-projects">
        My Projects
      </NavLink>
      <NavLink activeClassName="active" to="/about-me">
        About Me
      </NavLink>
    </div>
  );
}

export default NavBarLinks;
