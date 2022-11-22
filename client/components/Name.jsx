import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addName } from '../actions'
import { Link, useNavigate } from 'react-router-dom'
function Name() {
  const [newNameOne, setNewNameOne] = useState('')
  const [newNameTwo, setNewNameTwo] = useState('')
  const [newDate, setNewDate] = useState('')
  const navigate = useNavigate()
  const dispatch = useDispatch()
  // const navigate = useNavigate()

  // const [isLoading, setIsLoading] = useState(true)
  // const dispatch = useDispatch()
  // useEffect(() => {
  //   dispatch(fetchImage())
  // }, [])
  function handleChange(event) {
    event.preventDefault()
    // console.log(event.target.value)
    setNewNameOne(event.target.value)
  }
  function handleChangeTwo(event) {
    event.preventDefault()
    // console.log(event.target.value)
    setNewNameTwo(event.target.value)
  }
  function handleChangeDate(event) {
    event.preventDefault()
    // console.log(event.target.value)
    setNewDate(event.target.value)
  }
  // writeText()
  // function writeText() {
  //   textEl.innerText = text.slice(0, idx)

  //   idx++
  // }
  function handleSubmit(event) {
    dispatch(
      addName({
        NameOne: newNameOne,
        NameTwo: newNameTwo,
        Date: newDate,
      })
    )
    navigate('/poem')
    console.log(event)
    event.preventDefault()
  }

  return (
    <>
      <div className="name_section">
        <div className="content_container">
          <p className="head_title">LOVE YOU TO THE MOON AND BACK</p>
          <div className="form_container">
            <form>
              <div className="input">
                <label type="submit" htmlFor="name1">
                  From
                </label>
                <input
                  type="text"
                  aria-label="NewFoxName"
                  value={newNameOne}
                  onChange={handleChange}
                  className="name1"
                ></input>
              </div>
              <div className="input">
                <label htmlFor="name2">To</label>
                <input
                  type="text"
                  aria-label="NewFoxName"
                  value={newNameTwo}
                  onChange={handleChangeTwo}
                  className="name2"
                  size="10"
                ></input>
              </div>

              <Link to="/poem">
                <button onClick={handleSubmit} className="submit"></button>
              </Link>
              <div className="Date">
                <label htmlFor="name2">Date</label>
                <input
                  type="text"
                  aria-label="date"
                  value={newDate}
                  onChange={handleChangeDate}
                  className="name2"
                  size="10"
                ></input>
              </div>
            </form>
          </div>
        </div>
        <div className="img_container">
          <img src="/images/moonHD.png" alt="Moon" />
        </div>
      </div>
    </>
  )
}

export default Name
