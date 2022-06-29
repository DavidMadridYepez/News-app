import { NavLink } from 'react-router-dom'

function Navbar({ onThemeChange, theme }) {
  return (
    <>
      <div className={theme ? 'bg-black text-white' : 'bg-white text-black'}>
        <div>
          Logo
        </div>
        <button onClick={onThemeChange}>
          {theme ? (<h1>Switch to light mode</h1>) : (<h1>Switch to dark mode</h1>)}
        </button>
        <div>
          <NavLink to='/'>World</NavLink>
          <NavLink to='/economy'>Economy</NavLink>
          <NavLink to='/politics'>Politics</NavLink>
          <NavLink to='/fashion'>Fashion</NavLink>
          <NavLink to='/sports'>Sports</NavLink>
        </div>
      </div>
    </>
  )
}

export default Navbar

