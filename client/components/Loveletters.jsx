import React, { useEffect } from 'react'
import request from 'superagent'

function LoveLetter(props) {
  //  using props to pass to Poem components
  return (
    <div>
      <p>{props?.letter}</p>
    </div>
  )
}

export default LoveLetter
