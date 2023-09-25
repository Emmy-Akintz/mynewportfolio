import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ParentPage from './pages/ParentPage'
import Sidebar from './components/Sidebar'

function App() {

  return (
    <>
<div className='flex justify-between'>
    <Sidebar className='fixed' />
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ParentPage />} />
      </Routes>
    </BrowserRouter>
</div>
    </>
  )
}

export default App
