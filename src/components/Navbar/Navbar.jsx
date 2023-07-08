import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="">
      <div className="navbar w-11/12 mx-auto">
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
            <ul className="menu menu-sm text-lg font-semibold dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 ">
              <li className="">
                <Link to="/">Home</Link>
              </li>
              <li className="">
                <Link to="/">Skills</Link>
              </li>
              <li className="">
                <Link to="/projects">Projects</Link>
              </li>
              <li className="">
                <Link to="/">About</Link>
              </li>
              <li className="">
                <Link to="/">Contact</Link>
              </li>
            </ul>
          </div>
          <Link to="/" className="flex items-center">
            <img
              src="https://i.ibb.co/hZW8M5X/TANVIR-HASAN-02.png"
              alt="Logo"
              className="h-16 w-16"
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu text-lg font-semibold menu-horizontal px-1">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Skills</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end font-semibold">
          <Link
            to="/"
            className="text-black bg-green-400 hover:bg-green-500 focus:outline-none focus:ring-4 focus:ring-green-300 font-semibold rounded-lg text-lg px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-green-900"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
