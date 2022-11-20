import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { Navbar, Container } from 'react-bootstrap'
import LoveLetter from './Loveletters.jsx'
import { getUniverseImage, getPoem } from '../apis/universe'

function Poem() {
  const [UniImage, setImage] = useState('')
  const names = useSelector((state) => state.name)

  // const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // setIsLoading(true)
    getUniverseImage()
      .then((sky) => {
        setImage(sky)
      })
      // .then(() => {
      //   // setIsLoading(false)
      //   // console.log()
      // })
      .catch((err) => {
        err.message
      })
  }, [])

  return (
    <>
      <div
        className="Poem"
        style={{ backgroundImage: `url(${UniImage?.url})` }}
      >
        <div className="poem_container">
          <div className="letter">
            <div className="fas fa-quote-right fa-quote">“</div>
            <div className="fas fa-quote-left fa-quote">”</div>
            {/* {names.map((names) => {
              return (
                <> */}
            <p className="Letter">{/* database */}</p>

            <LoveLetter name1={names.NameOne} name2={names.NameTwo} letter="" />

            {/* </>
              )
            })} */}
            <div className="buttons">
              <button>Print</button>
              <button>Share</button>
              <Link to="/">
                <p>Home</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Poem
