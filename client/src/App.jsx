import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ParentPage from './pages/ParentPage'
import ThemeContextProvider from './contexts/ThemeContext'

function App() {

  return (
    <>
      <ThemeContextProvider>
        <BrowserRouter>
            <Routes>
              <Route path='/' element={<ParentPage />} />
            </Routes>
        </BrowserRouter>
      </ThemeContextProvider>
    </>
  )
}

export default App
