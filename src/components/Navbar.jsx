import React, { useEffect, useState } from "react"

import "./Navbar.css" 

import Logo from "../assets/images/logo.png"
import { Link } from "react-router-dom"

const Navbar = ({ active }) => {
  const [scrollHeight, setScrollHeight] = useState(0)
  const [open, setOpen] = useState(true);

  const handleBarsClick = () => {
    setOpen(!open)
  }

  const handleScroll = () => {
    const position = window.pageYOffset
    setScrollHeight(position)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
  }, [scrollHeight])


  return (
    <div className={`navbar ${scrollHeight > 20 ? "scrolling" : ""}`.trimEnd()}>
        {/*<div className="navbar-left">*/}
        <div className="navbar-logo">
            <img src={Logo} className={`navbar-logo-img ${scrollHeight > 20 ? "scrolling" : ""}`.trimEnd()}></img>
            <div className="navbar-logo-name">
                <p>GYM</p>
                <span>EXERCISES</span>
            </div>
        </div>
        {/*</div>*/}
        <ul className={`nav-menu ${ !open ? " active" : ""}`.trimEnd()}>
            <Link to="/" className={`nav-menu-item ${ active === "home" ? "active" : "" }`.trimEnd()}> Home </Link>
            <li>
                <button 
                  onClick={() => {
                    window.scrollTo({ top: 1680, behavior: 'smooth' })
                    handleBarsClick()
                  }}
                  className={`nav-menu-item ${ active === "exercises" ? "active" : "" }`.trimEnd()}> Exercises 
                </button>
            </li>
        </ul>
        <div className="navbar-icon">
          <i className={`fa-solid fa-bars ${ open ? " active" : ""}`} onClick={handleBarsClick}></i>
          <i className={`fa-solid fa-xmark ${ !open ? " active" : ""}`} onClick={handleBarsClick}></i>
        </div>
        {/*
        <div className="navbar-search">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input className="navbar-search-input" type="text" name="navbar-search-input" placeholder="Search..." />
        </div>
        */}
    </div>
  ) 
}

export default Navbar