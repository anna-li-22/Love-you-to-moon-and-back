import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchImage } from '../actions'

function App() {
  return (
    <>
      <div className="navbar">
        <a href="#">Home</a>

        <a href="#">News</a>

        <a href="#">Contact</a>

        <a href="#">About</a>
      </div>
    </>
  )
}

export default App
