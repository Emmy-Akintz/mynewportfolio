import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ParentPage from './pages/ParentPage'
import ThemeContextProvider from './contexts/ThemeContext'
// import { CircleIndicator } from './components/Reveal'

function App() {

  return (
    <>
      <ThemeContextProvider>
        <BrowserRouter>
          {/* <CircleIndicator> */}
            <Routes>
              <Route path='/' element={<ParentPage />} />
            </Routes>
          {/* </CircleIndicator> */}
        </BrowserRouter>
      </ThemeContextProvider>
    </>
  )
}

export default App
