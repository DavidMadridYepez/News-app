import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ThemeContext } from './context'

function Footer() {
  const theme = useContext(ThemeContext)
  return (
    <div className={`pt-20 p-10 space-y-20 ${theme ? 'bg-black text-white' : 'bg-black text-white'}`}>
      <div className='flex justify-center space-x-7 md:space-x-10'>
        <NavLink className='hover:scale-125 duration-100' to='/'>World</NavLink>
        <NavLink className='hover:scale-125 duration-100' to='/economy'>Economy</NavLink>
        <NavLink className='hover:scale-125 duration-100' to='/politics'>Politics</NavLink>
        <NavLink className='hover:scale-125 duration-100' to='/fashion'>Fashion</NavLink>
        <NavLink className='hover:scale-125 duration-100' to='/sports'>Sports</NavLink>
      </div>
      <div className='flex justify-center md:justify-end space-x-5'>
        <img src="./images/github (1).png" alt="" />
        <img src="./images/briefcase.png" alt="" />
        <img src="./images/linkedin (1).png" alt="" />
      </div>
    </div>
  )
}

export default Footer