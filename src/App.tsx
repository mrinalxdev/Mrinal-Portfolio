import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './components/HomePage'
import Login from './components/Login'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <Router>
      <Routes>
        <Route path="/" element={
          <HomePage/>
        } />
        <Route path="login" element={
          <Login/>
        } />
      </Routes>
    </Router>

    </>
  )
}

export default App
