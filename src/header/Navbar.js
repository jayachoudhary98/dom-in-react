import React from 'react';
import { NavLink } from 'react-router-dom'
import Login from '../login/Login';
import { Outlet, Link } from "react-router-dom";
// import { Footer } from '../footer/Footer';
// import { Product } from '../product/Product';
// import { Slider } from '../slider/Slider';

export const Navbar = () => {
  const handleClick = () => {
    console.log('this is:', this);
  }
  return (
    <>
    
      <div> 
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand" exact to="/Product">Home</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
           
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/Login">
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/Slider">
                Slider
              </NavLink>
            </li>
          </ul>
        </div>

      </div>
    </nav>
      </div>

    </>

  )
}
