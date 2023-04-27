import React from "react";
import { NavLink } from "react-router-dom";
import logoWhite from '../../../images/logo white.png';
import '../Navbar/Navbar.css'

const Navbar = () => {
  const menuItems=(
    <ul className="menu menu-vertical relative z-11 lg:static md:bg-none lg:p-2 bg-base-200 p-3 rounded-lg lg:items-center lg:menu-horizontal px-1 gap-x-1">
          <li>
            <NavLink className="btn-sm" to="/">Home</NavLink>
          </li>
          <li>
            <NavLink className="btn-sm" to="/skills">Skills</NavLink>
          </li>
          <li>
            <NavLink className="btn-sm" to="/projects">Projects</NavLink>
          </li>
          <li>
            <NavLink className="btn-sm" to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink className="btn-sm" to="/resume">Resume</NavLink>
          </li>
          <li>
            <NavLink className="btn-sm" to="/blogs">Blogs</NavLink>
          </li>
          <li>
            <NavLink className="btn-sm" to="/aboutme">About Me</NavLink>
          </li>
        </ul>
  )

  return (
    <div className="navbar lg:justify-between absolute h-10 items-center opacity-90 text-white top-0 z-30 bg-base-100 rounded-b-2xl">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <NavLink to="/" className="btn btn-ghost  text-white text-3xl"><img className="w-20" src={logoWhite} alt=""></img></NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        {menuItems}
      </div>
    </div>
  );
};

export default Navbar;
