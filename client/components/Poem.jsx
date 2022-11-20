import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchImage } from '../actions'
import { Navbar, Container } from 'react-bootstrap'
import LoveLetter from './Loveletters.jsx'
import { getPoem } from '../apis/universe'

function Poem() {
  let names = useSelector((state) => state)

  console.log(names)
  // const { id } = useParams()
  // const dispatch = useDispatch()
  // useEffect(() => {
  //   dispatch(fetchImage())
  // }, [])

  return (
    <>
      <div className="Poem">
        <div className="poem_container">
          <div className="Poem">
            <div className="fas fa-quote-right fa-quote"></div>
            <div className="fas fa-quote-left fa-quote"></div>
            {/* {names.map((names) => {
              return (
                <> */}
            <p className="Letter">{/* database */}</p>
            <LoveLetter
              name1={names.NameOne}
              name2={names.NameTwo}
              letter="testing"
            />
            {/* </>
              )
            })} */}
            <div className="buttons">
              <button>Print</button>
              <button>Share</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Poem
