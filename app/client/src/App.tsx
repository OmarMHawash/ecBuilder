import React, { useRef } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Components from './pages/Components'
import Builder from './pages/Builder'
import QuickStart from './pages/QuickStart'
import Features from './pages/Features'
import BuilderLayout from './components/Layout/wrapper/BuilderLayout'
import HomeLayout from './components/Layout/wrapper/MainLayout'

import './App.scss'

function App(): JSX.Element {
  const appRef = useRef<HTMLDivElement>(null)

  return (
    <div className="app" ref={appRef}>
      <Routes>
        <Route element={<BuilderLayout />}>
          <Route path="/quick-start" element={<QuickStart />} />
          <Route path="/demo" element={<Components />} />
          <Route path="/project/:id" element={<Builder />} />
        </Route>

        <Route element={<HomeLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
