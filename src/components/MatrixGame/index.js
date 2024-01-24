import React, { useState } from 'react'
import MatrixGameRules from '../EmojiGameRules'

const MatrixGame = () => {
  const [startGame, setStartGame] = useState(false)


  const renderGameView = () => <>Game View</>

  return (
    <>
      {startGame ? <>{renderGameView()} </ > : <MatrixGameRules />}
    </>
  )
}

export default MatrixGame