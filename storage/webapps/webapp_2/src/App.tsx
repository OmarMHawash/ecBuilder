import React, { useRef } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Sections/Header/Header'
import Footer from './components/Sections/Footer/Footer'

function App(): JSX.Element {
  const appRef = useRef<HTMLDivElement>(null)

  return (
    <div className="app" ref={appRef}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
