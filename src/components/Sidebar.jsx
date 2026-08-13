import React from 'react'
import { NavLink } from 'react-router-dom'

function Sidebar() {
  const handleClassName = (navProps) => navProps.isActive ? "active-link" : "inactive-link";

  return (
    <nav id="sidebar">
      <ul>
        <li><NavLink className={handleClassName} to="/">Home</NavLink></li>
        <li><NavLink className={handleClassName} to="/about">About</NavLink></li>
      </ul>
    </nav>
  )
}

export default Sidebar