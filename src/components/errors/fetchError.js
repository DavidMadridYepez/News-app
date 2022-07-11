import React from 'react'

function FetchError({ error }) {
  return (
    <div className='h-96 flex justify-center items-center space-x-20 mx-40'>
      <img src="../images/desconectado.png" alt="" />
      <p className='text-xl'>Oops! An error has ocurred... {error.message}</p>
    </div>
  )
}

export default FetchError