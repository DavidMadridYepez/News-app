import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <div className='font-serif pt-20 p-10 space-y-20 bg-neutral-900 text-white'>
      <div className='flex justify-center space-x-7 md:space-x-10'>
        <NavLink className='hover:scale-110 duration-100' to='/'>World</NavLink>
        <NavLink className='hover:scale-110 duration-100' to='/economy'>Economy</NavLink>
        <NavLink className='hover:scale-110 duration-100' to='/politics'>Politics</NavLink>
        <NavLink className='hover:scale-110 duration-100' to='/fashion'>Fashion</NavLink>
        <NavLink className='hover:scale-110 duration-100' to='/sports'>Sports</NavLink>
      </div>
      <div className='flex-col flex md:flex-row space-y-5 justify-between items-center'>
        <div>
          <p>© 2022 David Madrid. All rights reserved.</p>
        </div>
        <div className='flex justify-center space-x-5'>
          <a className='hover:-translate-y-3 duration-100 p-2' rel='noreferrer' target='_blank' href="https://github.com/DavidMadridYepez"><img src="./images/github (1).png" alt="" /></a>
          <a className='hover:-translate-y-3 duration-100 p-2' rel='noreferrer' target='_blank' href="https://porfolio-v1-pearl.vercel.app/"><img src="./images/briefcase.png" alt="" /></a>
          <a className='hover:-translate-y-3 duration-100 p-2' rel='noreferrer' target='_blank' href="https://www.linkedin.com/in/david-madrid-0809211a1/"><img src="./images/linkedin (1).png" alt="" /></a>
        </div>
      </div>
    </div>
  )
}

export default Footer