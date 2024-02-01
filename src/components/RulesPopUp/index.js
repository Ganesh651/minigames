import React from 'react'
import Popup from 'reactjs-popup'
import './index.css'

const RulesPopUp = () => {
  return (
    <Popup
      trigger={
        <button className="rules-button">
          Rules
        </button>
      }
      modal="true"
    >
      <div className="popup-container">
        <h3 style={{ textAlign: "center" }} className='emoji-game'>Rules</h3>
        <ul>
          <li>User should be able to see the list of Emojis</li>
          <li>When the user clicks any one of the Emoji for the first time, then the count of the score should be incremented by 1 and the List of emoji cards should be shuffled.</li>
          <li>This process should be repeated every time the user clicks on an emoji card</li>
          <li>When the user clicks on all Emoji cards without clicking any of it twice, then the user will win the game</li>
          <li>When the user clicks on the same Emoji for the second time, then the user will lose the game.</li>
          <li>Once the game is over, the user will be redirected to the results page.</li>
        </ul>
      </div>
    </Popup>
  )
}

export default RulesPopUp