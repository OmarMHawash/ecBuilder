import React, { useRef } from 'react'
import { Routes, Route } from 'react-router-dom'
import StyledLayout from './components/Layout/StyledLayout'
import Home from './pages/Home'
import Components from './pages/Components'
import { Builder } from './pages/Builder'
import QuickStart from './pages/QuickStart'
import Layout from './components/Layout/Layout'
function App(): JSX.Element {
  const appRef = useRef<HTMLDivElement>(null)

  return (
    <div className="app" ref={appRef}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/quick-start" element={<QuickStart />} />
        </Route>
        <Route element={<StyledLayout />}>
          <Route path="/demo" element={<Components />} />
          <Route path="/builder" element={<Builder />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
