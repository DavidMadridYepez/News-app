import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ThemeContext } from '../utils/context'

function Navbar({ onThemeChange }) {

  const theme = useContext(ThemeContext)

  return (
    <div className={`font-serif p-3 ${theme ? 'bg-neutral-900 text-white' : 'bg-white text-black'}`}>
      <div className={`flex justify-center space-x-10 py-10 border-b-8 ${theme ? 'border-white' : 'border-black'}`}>
        <h1 className='text-5xl'>MR NEWS</h1>
        <button onClick={onThemeChange}>
          {theme ? <img className='w-7' src='./images/sun (1).png' alt='' /> : <img className='w-7' src='./images/moon.png' alt='' />}
        </button>
      </div>
      <div className='text-lg flex py-10 justify-center space-x-7 md:space-x-10 h-full'>
        <NavLink className={({ isActive }) => isActive ? 'scale-110 duration-100' : 'hover:scale-110 duration-100'} to='/'>World</NavLink>
        <NavLink className={({ isActive }) => isActive ? 'scale-110 duration-100' : 'hover:scale-110 duration-100'} to='/economy'>Economy</NavLink>
        <NavLink className={({ isActive }) => isActive ? 'scale-110 duration-100' : 'hover:scale-110 duration-100'} to='/politics'>Politics</NavLink>
        <NavLink className={({ isActive }) => isActive ? 'scale-110 duration-100' : 'hover:scale-110 duration-100'} to='/fashion'>Fashion</NavLink>
        <NavLink className={({ isActive }) => isActive ? 'scale-110 duration-100' : 'hover:scale-110 duration-100'} to='/sports'>Sports</NavLink>
      </div>
      <div className='border-b-8 border-gray-300'></div>
    </div>
  )
}

export default Navbar

