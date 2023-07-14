import React, { useRef } from 'react'
import { Routes, Route } from 'react-router-dom'
import Testing from './pages/Testing'
import StyledLayout from './components/Layout/StyledLayout'
import Preview from './pages/Preview'
import All from './pages/All'

function App(): JSX.Element {
  const appRef = useRef<HTMLDivElement>(null)

  return (
    <div className="app" ref={appRef}>
      <Routes>
        <Route path="/" element={<Testing />} />

        <Route element={<StyledLayout />}>
          <Route path="/all" element={<All />} />
          <Route path="/preview" element={<Preview />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
