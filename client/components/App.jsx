import React, { useEffect } from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import Nav from './Nav'
import Name from './Name'
import Poem from './Poem'
import AddYouLetters from './AddYouLetters'

function App() {
  return (
    <>
      <div className="app">
        <Routes>
          <Route path="/" element={<Name />} />
          <Route path="/Poem" element={<Poem />} />
          <Route path="/Add" element={<AddYouLetters />} />
        </Routes>
      </div>
    </>
  )
}

export default App
