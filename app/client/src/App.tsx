import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Builder from './pages/dashboard/Builder'
import QuickStart from './pages/dashboard/QuickStart'
import BuilderLayout from './components/Layout/wrapper/BuilderLayout'
import HomeLayout from './components/Layout/wrapper/MainLayout'
import Palettes from './pages/dashboard/Palettes'
import Website from './pages/dashboard/Website'
import './App.scss'
import All from './pages/All'
import Components from './pages/dashboard/Components'

function App(): JSX.Element {
  return (
    <div className="app">
      <Routes>
        <Route element={<BuilderLayout />}>
          <Route path="/quick-start" element={<QuickStart />} />
          <Route path="/demo" element={<All />} />
          <Route path="/project/:id" element={<Builder />} />
          <Route path="/palettes" element={<Palettes />} />
          <Route path="/components" element={<Components />} />
          <Route path="/website" element={<Website />} />
        </Route>
        <Route element={<HomeLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
