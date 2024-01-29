import React, { useState } from 'react'
import MatrixGameRules from '../MatrixGameRules'

const MatrixGame = () => {
  const [startGame, setStartGame] = useState(false)


  const renderGameView = () => <>Game View</>

  const matrixGameStart = () => {
    setStartGame(true)
  }

  return (
    <>
      {startGame ? <>{renderGameView()} </ > : <MatrixGameRules matrixGameStart={matrixGameStart} />}
    </>
  )
}

export default MatrixGame