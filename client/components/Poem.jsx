import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Route, useNavigate } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import { Navbar, Container } from 'react-bootstrap'
import LoveLetter from './Loveletters.jsx'
import { getUniverseImage, getPoem } from '../apis/universe'

function Poem() {
  // const names = useSelector((state) => state.name)

  // console.log(names)
  const [UniImage, setImage] = useState('')

  // const names = useSelector((state) => state.name)
  // const name = names[0]
  // console.log(name)
  // const [isLoading, setIsLoading] = useState(true)

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

  return (
    <>
      <div
        className="Poem"
        style={{ backgroundImage: `url(${UniImage?.url})` }}
      >
        <div className="poem_container">
          <div className="letter">
            <DropdownButton id="dropdown-basic-button" title="Dropdown button">
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </DropdownButton>
            <div className="fas fa-quote-right fa-quote">“</div>
            <div className="fas fa-quote-left fa-quote">”</div>
            {/* {names.map((names) => {
              return (
                <> */}
            <p className="Letter">{/* database */}</p>

            <LoveLetter
            // name1={names.NameOne}
            // name2={names.NameTwo}
            />

            {/* </>
              )
            })} */}
            <div className="buttons">
              <button className="button-30">Print</button>
              <button className="button-30">Share</button>

              <Link to="/Add">
                <button className="button-30">Add Your Letter</button>
              </Link>

              <Link to="/">
                <button className="button-30">Home</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Poem
