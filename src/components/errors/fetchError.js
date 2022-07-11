import React from 'react'

function FetchError({ error }) {
  return (
    <div>
      <img src="./images/desconectado.png" alt="" />
      <p>Oops! An error has ocurred... {error.message}</p>
    </div>
  )
}

export default FetchError