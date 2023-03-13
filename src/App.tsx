import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './components/HomePage'
import Login from './components/Login'
import CreatePost from './components/CreatePost/CreatePost'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <HomePage/>
        } />
        <Route path="/login" element={
          <Login/>
        } />

        <Route path="/createpost" element={
          <CreatePost />
        } />
      </Routes>
    </Router>

    </>
  )
}

export default App
