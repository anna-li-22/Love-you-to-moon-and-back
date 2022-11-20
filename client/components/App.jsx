import React, { useEffect } from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import Nav from './Nav'
import Name from './Name'
import Poem from './Poem'

function App() {
  return (
    <>
      <div className="app">
        <Nav></Nav>

        <Routes>
          <Route path="/" element={<Name />} />
          <Route path="/Poem" element={<Poem />} />
        </Routes>
      </div>
    </>
  )
}

export default App
