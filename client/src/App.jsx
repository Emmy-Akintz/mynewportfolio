import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import ParentPage from './pages/ParentPage'
import ThemeContextProvider from './contexts/ThemeContext'
import AHGITWT from './blogs/AHGITWT.jsx'

function App() {
  const location = useLocation
  console.log(location.pathname);

  return (
    <>
      <ThemeContextProvider>
        <BrowserRouter>
            <Routes>
              <Route path='/' element={<ParentPage />} />
              <Route path='/AHGITWT' element={<AHGITWT />} />
            </Routes>
        </BrowserRouter>
      </ThemeContextProvider>
    </>
  )
}

export default App
