import "./Header.css";
import logo from "../img/logo.svg";
import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthCheck } from "reactfire";

function Header () {
  return (
    <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg background mb-3">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          {/* Logo y nombre de app */}
          <div className="flex">
            <Link to={"/"}>
              <img className="logo" src={logo} alt="Logo" />
            </Link>
          </div>
        </div>
        {/* Parte derecha de Nav */}
        <div>
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto items-center">
            <li className="nav-item">
              {/* GENERATE */}
              <a
                className="px-3 py-2 flex items-center text-sm font-bold leading-snug text-white hover:opacity-75"
                href="#generate"
              >
                <Link to={"/generate"} activeClassName={"active"}><span className="ml-2">Generate</span></Link>
              </a>
            </li>
            <li className="nav-item">
              {/* SHOP */}
              <a
                className="px-3 py-2 flex items-center text-sm font-bold leading-snug text-white hover:opacity-75"
                href="#shop"
              >
                <Link to={"/shop"} activeClassName={"active"}><span className="ml-2">Shop</span></Link>
              </a>
            </li>
            <li className="nav-item">
              {/* ABOUT US */}
              <a
                className="px-3 py-2 flex items-center text-sm font-bold leading-snug text-white hover:opacity-75"
                href="#aboutus"
              >
                <span className="ml-2">About Us</span>
              </a>
            </li>
            <li className="nav-item">
              <AuthCheck fallback={<SignIn/>}>
                <button className="px-5 py-1 boton hover:bg-indigo-700 text-white font-bold  ml-3">
                  <Link to={"/logout"}>Logout</Link>
                </button>
              </AuthCheck>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

/* BOTON SIGN UP */
function SignIn(){
  return(
    <button className="px-5 py-1 boton hover:bg-indigo-700 text-white font-bold  ml-3">
      <Link to={"/register"}>Sign Up</Link>
    </button>
  );
}

export default Header;