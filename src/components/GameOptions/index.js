import React from 'react'

const GameOptions = (props) => {
  const { eachItem, handdleGameRules } = props
  const { id, text, imageUrl, gameType } = eachItem

  const viewGameRules = () => {
    handdleGameRules(gameType, id)
  }

  return (
    <div className='game-theme-container' onClick={viewGameRules}>
      <img className='card-image' src={imageUrl}
        alt={text} />
      <h3 className='emoji-game'>{text}</h3>
    </div>
  )
}

export default GameOptions