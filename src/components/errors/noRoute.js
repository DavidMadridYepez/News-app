import React from 'react'

function NoRouteMatched() {
  return (
    <div className='flex h-96 justify-center items-center mx-40'>
      <img className='w-40' src="../images/error.png" alt="" />
      <p className='text-2xl'>Sorry! We could'nt find anything here...</p>
    </div>
  )
}

export default NoRouteMatched