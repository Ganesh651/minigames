import React, { useState } from 'react'
import FlipGameRules from '../FlipGameRules'

const FlipGame = () => {
  const [startGame, setStartGame] = useState(false)


  const renderGameView = () => <>Game View</>

  return (
    <>
      {startGame ? <>{renderGameView()} </ > : <FlipGameRules />}
    </>
  )
}

export default FlipGame