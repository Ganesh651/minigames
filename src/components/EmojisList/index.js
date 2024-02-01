import React from 'react'
import './index.css'

const EmojisList = (props) => {
  const { emoji, generateRandomEmojiAndCheck } = props;
  const { emojiUrl, emojiName, id } = emoji;

  const handdleEmoji = () => {
    generateRandomEmojiAndCheck()
  }

  return (
    <div className='emoji-item-container' onClick={handdleEmoji}>
      <img src={emojiUrl} alt={emojiName} />
    </div>
  )
}

export default EmojisList