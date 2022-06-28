import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './main'
import Navbar from './navbar'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/:idcategory' element={<Main />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App