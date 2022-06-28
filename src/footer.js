import React from 'react'
import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <div>
      <div>
        <NavLink to='/'>World</NavLink>
        <NavLink to='/economy'>Economy</NavLink>
        <NavLink to='/politics'>Politics</NavLink>
        <NavLink to='/fashion'>Fashion</NavLink>
        <NavLink to='/sports'>Sports</NavLink>
      </div>
      <div>
        <i>Github</i>
        <i>Portfolio</i>
        <i>Linkedin</i>
      </div>
    </div>
  )
}

export default Footer