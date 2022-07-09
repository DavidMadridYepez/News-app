import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ThemeContext } from '../utils/context'

function Navbar({ onThemeChange }) {

  const theme = useContext(ThemeContext)

  return (
    <>
      <div className={`p-3 space-y-10 ${theme ? 'bg-black text-white' : 'bg-white text-black'}`}>
        <div className={`flex justify-center space-x-10 p-5 py-10 border-b-8 ${theme ? 'border-white' : 'border-black'}`}>
          <h1 className='text-5xl'>TOP NEWS</h1>
          <button onClick={onThemeChange}>
            {theme ? <img src='./images/sun (1).png' alt='' /> : <img src='./images/moon.png' alt='' />}
          </button>
        </div>
        <div className='flex justify-center space-x-7 md:space-x-10'>
          <NavLink className={({ isActive }) => isActive ? 'scale-125 duration-100' : 'hover:scale-125 duration-100'} to='/'>World</NavLink>
          <NavLink className={({ isActive }) => isActive ? 'scale-125 duration-100' : 'hover:scale-125 duration-100'} to='/economy'>Economy</NavLink>
          <NavLink className={({ isActive }) => isActive ? 'scale-125 duration-100' : 'hover:scale-125 duration-100'} to='/politics'>Politics</NavLink>
          <NavLink className={({ isActive }) => isActive ? 'scale-125 duration-100' : 'hover:scale-125 duration-100'} to='/fashion'>Fashion</NavLink>
          <NavLink className={({ isActive }) => isActive ? 'scale-125 duration-100' : 'hover:scale-125 duration-100'} to='/sports'>Sports</NavLink>
        </div>
        <div className='border border-gray-600'></div>
      </div>
    </>
  )
}

export default Navbar

