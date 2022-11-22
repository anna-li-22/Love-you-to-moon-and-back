import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import request from 'superagent'
import { fetchLetter } from '../actions/letter'

function LoveLetter() {
  const names = useSelector((state) => state.name)
  const letters = useSelector((state) => state.letter)
  const dispatch = useDispatch()
  console.log(names)
  useEffect(() => {
    //   // setIsLoading(true)
    dispatch(fetchLetter())
  }, [])

  function handleSwitch(event) {
    event.preventDefault()
    dispatch(
      fetchLetter((id) => {
        if (id === names.length - 1) {
          return 0
        } else {
          return id + 1
        }
      })
    )
  }

  //  using props to pass to Poem components

  return (
    <div>
      <p>Dear {names[0]?.NameTwo}</p>
      <p className="letter">
        I read about this letter by {letters[0]?.poem_from} called '
        {letters[0]?.poem_title}' and think about you.
        <br></br>"{letters[0]?.poem_text}"
      </p>
      <p>
        Love always,<br></br>
        {names[0]?.NameOne}
      </p>
      <button className="button-30" onClick={handleSwitch}>
        Next One
      </button>
    </div>
  )
}

export default LoveLetter
