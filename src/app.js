import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './components/footer'
import Main from './components/main'
import Navbar from './components/navbar'

function App() {
  const [theme, setTheme] = useState(true)
  const handleThemeChange = () => {
    setTheme(!theme);
  }

  return (
    <>
      <BrowserRouter>
        <Navbar onThemeChange={handleThemeChange} theme={theme} />
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