import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import './App.scss'

function App(): JSX.Element {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
