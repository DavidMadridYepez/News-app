import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './layout/footer'
import Main from './components/main'
import Navbar from './layout/navbar'
import { ThemeContext } from './utils/context'
import { QueryClientProvider, QueryClient } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

function App() {
  const [theme, setTheme] = useState(false)
  const handleThemeChange = () => {
    setTheme(!theme);
  }

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
      },
    },
  })

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
        <ReactQueryDevtools initialIsOpen={true} />
      </QueryClientProvider>

    </>
  )
}

export default App

