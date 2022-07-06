import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './components/footer'
import Main from './components/main'
import Navbar from './components/navbar'
import { ThemeContext } from './components/context'
import { QueryClient, QueryClientProvider } from 'react-query'


function App() {
  const [theme, setTheme] = useState(false)
  const handleThemeChange = () => {
    setTheme(!theme);
  }
  const queryClient = new QueryClient()

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ThemeContext.Provider value={theme}>
          <BrowserRouter>
            <Navbar onThemeChange={handleThemeChange} />
            <Routes>
              <Route path='/' element={<Main />} />
              <Route path='/:idcategory' element={<Main />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </ThemeContext.Provider>
      </QueryClientProvider>
    </>
  )
}

export default App

//I need to implement useParamas, Context and React Query!