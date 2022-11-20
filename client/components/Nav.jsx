import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { fetchImage } from '../actions'

function App() {
  return (
    <>
      <div className="navbar">
        <Link to="/">
          <p>Home</p>
        </Link>
        <Link to="/">
          <p>About</p>
        </Link>
      </div>
    </>
  )
}

export default App
