import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addName } from '../actions'
import { Link } from 'react-router-dom'

function Name() {
  const [newNameOne, setNewNameOne] = useState('')
  const [newNameTwo, setNewNameTwo] = useState('')

  const dispatch = useDispatch()
  // const navigate = useNavigate()

  const [isLoading, setIsLoading] = useState(true)
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
  function handleSubmit(event) {
    dispatch(
      addName({
        NameOne: newNameOne,
        NameTwo: newNameTwo,
      })
    )
    console.log(newNameOne)
    event.preventDefault()
  }

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
            <br></br>
            <Link to="/poem">
              <button onClick={handleSubmit} className="submit"></button>
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
