import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchImage } from '../actions'

function Name() {
  // const dispatch = useDispatch()
  // useEffect(() => {
  //   dispatch(fetchImage())
  // }, [])

  return (
    <>
      <div className="name_section">
        <div className="content_container">
          <h1>LOVE YOU TO THE MOON AND BACK</h1>
          <p>From</p>
          <input className="name1"></input>
          <p>To</p>
          <input className="name2"></input>
          <br></br>
          <button className="submit"></button>
        </div>
        <div className="img_container">
          <img src="/images/moonHD.png" alt="Moon" />
        </div>
      </div>
    </>
  )
}

export default Name
