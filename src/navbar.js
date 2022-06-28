import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <>
      <div>
        Logo
      </div>
      <div>
        <NavLink to='/'>World</NavLink>
        <NavLink to='/economy'>Economy</NavLink>
        <NavLink to='/politics'>Politics</NavLink>
        <NavLink to='/science'>Science</NavLink>
        <NavLink to='/fashion'>Fashion</NavLink>
        <NavLink to='/sports'>Sports</NavLink>
      </div>
    </>
  )
}

export default Navbar