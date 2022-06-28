import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './components/footer'
import Main from './components/main'
import Navbar from './components/navbar'

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