import React, { useState } from 'react'
import RockPaperGameRules from '../RockPaperGameRules'

const RockPaperGame = () => {
  const [startGame, setStartGame] = useState(false)

  const renderGameView = () => <>Game View</>

  return (
    <>
      {startGame ? <>{renderGameView()} </ > : <RockPaperGameRules />}
    </>
  )
}

export default RockPaperGame