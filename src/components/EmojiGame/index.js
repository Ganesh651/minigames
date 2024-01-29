import React, { useState } from 'react'
import EmojiGameRules from '../EmojiGameRules'

const EmojiG = () => {
  const [startGame, setStartGame] = useState(false)

  const renderGameView = () => <>Game View</>

  const emojiGameStart = () => {
    setStartGame(true)
  }


  return (
    <>
      {startGame ? <>{renderGameView()}</> : <EmojiGameRules emojiGameStart={emojiGameStart} />}
    </>
  )
}

export default EmojiG