import React, { useState } from 'react'
import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import EmojiGameRules from '../EmojiGameRules'
import EmojisList from '../EmojisList';
import RulesPopUp from '../RulesPopUp';
import './index.css'

const emojisList = [
  {
    id: 0,
    emojiName: 'Face with stuck out tongue',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-img.png',
  },
  {
    id: 1,
    emojiName: 'Face with head bandage',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-head-bandage-img.png',
  },
  {
    id: 2,
    emojiName: 'Face with hugs',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/face-with-hugs-img.png',
  },
  {
    id: 3,
    emojiName: 'Face with laughing',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-laughing-img.png',
  },
  {
    id: 4,
    emojiName: 'Laughing face with hand in front of mouth',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-laughing-with-hand-infront-mouth-img.png',
  },
  {
    id: 5,
    emojiName: 'Face with mask',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/face-with-mask-img.png',
  },
  {
    id: 6,
    emojiName: 'Face with silence',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-silence-img.png',
  },
  {
    id: 7,
    emojiName: 'Face with stuck out tongue and winked eye',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-and-winking-eye-img.png',
  },
  {
    id: 8,
    emojiName: 'Grinning face with sweat',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/grinning-face-with-sweat-img.png',
  },
  {
    id: 9,
    emojiName: 'Smiling face with heart eyes',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/smiling-face-with-heart-eyes-img.png',
  },
  {
    id: 10,
    emojiName: 'Grinning face',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/grinning-face-img.png',
  },
  {
    id: 11,
    emojiName: 'Smiling face with star eyes',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/smiling-face-with-star-eyes-img.png',
  },
]

const EmojiGame = () => {
  const [startGame, setStartGame] = useState(false)
  const navigate = useNavigate()

  const handdleBack = () => {
    navigate("/")
  }

  const generateRandomEmojiAndCheck = () => {
    return emojisList.sort(() => Math.random() - 0.5)
  }

  const randomImages = generateRandomEmojiAndCheck()
  console.log(randomImages)

  const renderGameView = () => (
    <div className='emoji-game-container'>
      <nav className='header'>
        <div className='navbar'>
          <span className='emoji-game-logo'>
            Emoji Game
          </span>
          <div style={{ display: "flex", alignItems: "center" }}>
            <p className='score-text'>Score: <span className='score-span'>{0}</span></p>
          </div>
        </div>
      </nav>
      <div className='emoji-game-body-container'>
        <div className='rules-and-back-button-container'>
          <div className='back-button-container' onClick={handdleBack}>
            <IoIosArrowRoundBack style={{ height: "22px", width: "22px" }} />
            <span className='back-button'>Back</span>
          </div>
          <div>
            <RulesPopUp />
          </div>
        </div>
        <div className='emoji-list-container'>
          {randomImages.map(emoji => (
            <EmojisList
              key={emoji.id}
              emoji={emoji}
              generateRandomEmojiAndCheck={generateRandomEmojiAndCheck}
            />
          ))}
        </div>
      </div>
    </div>
  )

  const emojiGameStart = () => {
    setStartGame(true)
  }


  return (
    <>
      {
        startGame
          ?
          <>{renderGameView()}</>
          :
          <EmojiGameRules emojiGameStart={emojiGameStart} />
      }
    </>
  )
}

export default EmojiGame