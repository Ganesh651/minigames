import React from 'react'
import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import './index.css'

const EmojiGameRules = (props) => {
  const { emojiGameStart } = props
  const navigate = useNavigate();

  const handdleBack = () => {
    navigate("/")
  }

  return (
    <div className='emoji-rules-container'>
      <div className='rules-game'>
        <div className='back-button-container' onClick={handdleBack}>
          <IoIosArrowRoundBack style={{ height: "22px", width: "22px" }} />
          <span className='back-button'>Back</span>
        </div>
        <div className='rules-list'>
          <div className='container'>
            <img src="https://res.cloudinary.com/dky69roxl/image/upload/v1706104261/Asset_1_4x_1_lcfh5t.png"
              alt="Emoji" />
            <h3 className='emoji-game'>Emoji Game</h3>
          </div>
          <div>
            <h3 style={{ textAlign: "center" }} className='emoji-game'>Rules</h3>
            <ul>
              <li>User should be able to see the list of Emojis</li>
              <li>When the user clicks any one of the Emoji for the first time, then the count of the score should be incremented by 1 and the List of emoji cards should be shuffled.</li>
              <li>This process should be repeated every time the user clicks on an emoji card</li>
              <li>When the user clicks on all Emoji cards without clicking any of it twice, then the user will win the game</li>
              <li>When the user clicks on the same Emoji for the second time, then the user will lose the game.</li>
              <li>Once the game is over, the user will be redirected to the results page.</li>
            </ul>
            <div style={{ textAlign: "center" }}>
              <button type='button'
                className='start-playing-btn'
                onClick={() => emojiGameStart()}
              >Start Playing
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmojiGameRules