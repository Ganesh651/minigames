import React from 'react'
import { IoIosArrowRoundBack } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'
import './index.css'
const MatrixGameRules = (props) => {
  const { matrixGameStart } = props
  const navigate = useNavigate();

  const handdleBack = () => {
    navigate("/")
  }

  const startPlaying = () => {
    matrixGameStart()
  }

  return (
    <div className='matrix-rules-container'>
      <div style={{ color: "#fff" }} className='back-button-container' onClick={handdleBack}>
        <IoIosArrowRoundBack style={{ height: "22px", width: "22px" }} />
        <span className='back-button'>Back</span>
      </div>
      <div className='memory-matrix-image-container'>
        <div>
          <h1 className='matrix-memory-heading'>Memory Matrix</h1>
          <img src="https://res.cloudinary.com/dky69roxl/image/upload/v1706104291/memory_d2xqer.png"
            alt="matrix icon"
          />
        </div>
      </div>
      <div className='memory-matrix-rules-heading-container'>
        <h3 className='memory-rules-heaing'>Rules</h3>
        <div className='rules-list-container'>
          <ul>
            <li>In each level of the Game, Users should be able to see the Grid with (N X N) size starting from 3 and the grid will highlight N cells in Blue, the N highlighted cells will be picked randomly.</li>
            <li>The highlighted cells will remain N seconds for the user to memorize the cells. At this point, the user should not be able to perform any action.</li>
            <li>After N seconds, the grid will clear the N highlighted cells.</li>
          </ul>
          <ul>
            <li>At N seconds, the user can click on any cell. Clicking on a cell that was highlighted before it will turn blue. Clicking on the other cells that were not highlighted before then will turn to red.</li>
            <li>The user should be promoted to the next level if they guess all N cells correctly in one attempt.</li>
            <li>The user should be taken to the results page if the user clicks on the wrong cell.</li>
            <li>If the user completed all the levels, then the user should be taken to the results page.</li>
          </ul>
        </div>
        <button type='button'
          className='matrix-start-button'
          onClick={startPlaying}>
          Start Playing
        </button>
      </div>
    </div>
  )
}

export default MatrixGameRules