import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ThemeContext } from './context'

function Footer() {
  const theme = useContext(ThemeContext)
  return (
    <div className={theme ? 'bg-black text-white' : 'bg-white text-black'}>
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