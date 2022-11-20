import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchImage } from '../actions'
import { Link } from 'react-router-dom'

function Name() {
  // const dispatch = useDispatch()
  // useEffect(() => {
  //   dispatch(fetchImage())
  // }, [])

  return (
    <>
      <div className="name_section">
        <div className="content_container">
          <p className="head_title">LOVE YOU TO THE MOON AND BACK</p>
          <form>
            <div className="input">
              <label type="submit" htmlFor="name1">
                From
              </label>
              <input className="name1"></input>
            </div>
            <div className="input">
              <label htmlFor="name2">To</label>
              <input type="textbox" className="name2" size="10"></input>
            </div>
            <br></br>
            <Link to="/poem">
              <button className="submit"></button>
            </Link>
          </form>
        </div>
        <div className="img_container">
          <img src="/images/moonHD.png" alt="Moon" />
        </div>
      </div>
    </>
  )
}

export default Name
