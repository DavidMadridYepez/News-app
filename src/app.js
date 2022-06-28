import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './footer'
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
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App