import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ThemeContext } from './context'

function Navbar({ onThemeChange }) {
  const theme = useContext(ThemeContext)

  return (
    <>
      <div className={`p-3 space-y-10 ${theme ? 'bg-black text-white' : 'bg-white text-black'}`}>
        <div className='p-5 text-center pt-10 border-b-4 border-black'>
          TOP NEWS
        </div>
        <button onClick={onThemeChange}>
          {theme ? (<h1>Switch to light mode</h1>) : (<h1>Switch to dark mode</h1>)}
        </button>
        <div className='flex justify-center space-x-5'>
          <NavLink className={({ isActive }) => isActive ? 'border-b-2 border-b-black' : 'border-b-2'} to='/'>World</NavLink>
          <NavLink className={({ isActive }) => isActive ? 'border-b-2 border-b-black' : 'border-b-2'} to='/economy'>Economy</NavLink>
          <NavLink className={({ isActive }) => isActive ? 'border-b-2 border-b-black' : 'border-b-2'} to='/politics'>Politics</NavLink>
          <NavLink className={({ isActive }) => isActive ? 'border-b-2 border-b-black' : 'border-b-2'} to='/fashion'>Fashion</NavLink>
          <NavLink className={({ isActive }) => isActive ? 'border-b-2 border-b-black' : 'border-b-2'} to='/sports'>Sports</NavLink>
        </div>
        <div className='border-2 border-gray-600'></div>
      </div>
    </>
  )
}

export default Navbar

