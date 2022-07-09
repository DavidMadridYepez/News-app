import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <div className='pt-20 p-10 space-y-20 bg-black text-white'>
      <div className='flex justify-center space-x-7 md:space-x-10'>
        <NavLink className='hover:scale-125 duration-100' to='/'>World</NavLink>
        <NavLink className='hover:scale-125 duration-100' to='/economy'>Economy</NavLink>
        <NavLink className='hover:scale-125 duration-100' to='/politics'>Politics</NavLink>
        <NavLink className='hover:scale-125 duration-100' to='/fashion'>Fashion</NavLink>
        <NavLink className='hover:scale-125 duration-100' to='/sports'>Sports</NavLink>
      </div>
      <div className='flex justify-center md:justify-end space-x-5'>
        <a rel='noreferrer' target='_blank' href="https://github.com/DavidMadridYepez"><img src="./images/github (1).png" alt="" /></a>
        <a rel='noreferrer' target='_blank' href="https://porfolio-v1-pearl.vercel.app/"><img src="./images/briefcase.png" alt="" /></a>
        <a rel='noreferrer' target='_blank' href="https://www.linkedin.com/in/david-madrid-0809211a1/"><img src="./images/linkedin (1).png" alt="" /></a>
      </div>
    </div>
  )
}

export default Footer