import { useState } from 'react'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Dashboard from './components/Dashboard'
import AddNewProject from './components/AddNewProject'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/projects/new" element={<AddNewProject/>}/>
        </Routes>
      </BrowserRouter>
        
    </>
  )
}

export default App
