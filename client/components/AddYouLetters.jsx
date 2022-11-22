import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import request from 'superagent'
import { getUniverseImage, getPoem } from '../apis/universe'
import { fetchLetter, saveLetter } from '../actions/letter'

// function that submit an new letter
export default function AddYouLetters() {
  const [UniImage, setImage] = useState('')
  const dispatch = useDispatch()
  // const navigate = useNavigate()
  const [newLetter, setNewLetter] = useState({
    // author_id: '',
    poem_title: '',
    poem_text: '',
    poem_from: '',
    poem_type: '',
  })

  useEffect(() => {
    // setIsLoading(true)
    getUniverseImage()
      .then((sky) => {
        setImage(sky)
        // console.log(sky)
      })
      // .then(() => {
      //   // setIsLoading(false)

      // })
      .catch((err) => {
        err.message
      })
  }, [])

  function handleChange(event) {
    const { name, value } = event.target
    console.log(name)

    setNewLetter((result) => {
      console.log(result)
      return { ...result, [name]: value }
    })
  }
  function handleSubmit(event) {
    event.preventDefault()
    dispatch(saveLetter(newLetter))

    setNewLetter('')
  }

  return (
    <div className="Poem" style={{ backgroundImage: `url(${UniImage?.url})` }}>
      <div className="poem_container">
        <h1>Add your letter today</h1>
        <form className='field-container"'>
          <p>
            <label>Title</label>
            <input
              type="text"
              name="poem_title"
              onChange={handleChange}
            ></input>
          </p>
          <p>
            <label>Letter</label>
            <textarea
              className="letter_enter"
              type="text"
              name="poem_text"
              onChange={handleChange}
            ></textarea>
          </p>
          <p>
            <label>Written By</label>
            <input type="text" name="poem_from" onChange={handleChange}></input>
          </p>
          <p>
            <label>Type</label>
            <input type="text" name="poem_type" onChange={handleChange}></input>
          </p>
        </form>
        <div className="submit_box">
          <button className="button-30" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  )
}
