import React, { useRef } from 'react'
import { Routes, Route } from 'react-router-dom'
import Testing from './pages/Testing'
import StyledLayout from './components/Layout/StyledLayout'

function App(): JSX.Element {
  const appRef = useRef<HTMLDivElement>(null)

  return (
    <div className="app" ref={appRef}>
      <Routes>
        <Route element={<StyledLayout />}>
          <Route path="/" element={<Testing />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
