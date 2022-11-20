import React, { useEffect } from 'react'
import request from 'superagent'

function LoveLetter(props) {
  //  using props to pass to Poem components
  console.log(props)
  return (
    <div>
      <p>Dear {props?.name1}</p>
      <p>{props?.letter}</p>
      <p>Love always, {props?.name2}</p>
    </div>
  )
}

export default LoveLetter
