import { v4 as uuidv4 } from 'uuid'
import { useNavigate } from 'react-router-dom';
import GameOptions from '../GameOptions';
import './index.css'


const gameTypeList = [
  {
    id: uuidv4(),
    imageUrl: "https://res.cloudinary.com/dky69roxl/image/upload/v1706104261/Asset_1_4x_1_lcfh5t.png",
    text: "Emoji Game",
    gameType: "EMOJIGAME"
  },
  {
    id: uuidv4(),
    imageUrl: "https://res.cloudinary.com/dky69roxl/image/upload/v1706104291/memory_d2xqer.png",
    text: "Memory Matrix",
    gameType: "MEMORY_MATRIX"
  },
  {
    id: uuidv4(),
    imageUrl: "https://res.cloudinary.com/dky69roxl/image/upload/v1706104341/Group_6943_lx8ti7.png",
    text: "ROCK  PAPER  SCISSOR",
    gameType: "ROCK_PAPER_SCISSOR"
  },
  {
    id: uuidv4(),
    imageUrl: "https://res.cloudinary.com/dky69roxl/image/upload/v1706104353/animals_eyda58.png",
    text: "",
    gameType: "FLIP_GAME"
  }
]

const Home = () => {
  const navigate = useNavigate()

  const renderEmojiGameView = () => {
    navigate("/emoji-game")
  }

  const renderMemoryGameView = () => {
    navigate("/memory-matrix")
  }

  const renderRockPaperView = () => {
    navigate("/rock-paper-scissor")
  }


  const renderFlipGameView = () => {
    navigate("/card-flip-memory-game")
  }


  const handdleGameRules = (gameType) => {

    switch (gameType) {
      case "EMOJIGAME":
        return renderEmojiGameView()
      case "MEMORY_MATRIX":
        return renderMemoryGameView()
      case "ROCK_PAPER_SCISSOR":
        return renderRockPaperView()
      case "FLIP_GAME":
        return renderFlipGameView()
      default:
        return null
    }
  }

  return (
    <div className='app-home-container'>
      <span className='games-heading'>Games</span>
      <div className='game-type-container'>
        {gameTypeList.map(eachItem => (
          <GameOptions
            key={eachItem.id}
            eachItem={eachItem}
            handdleGameRules={handdleGameRules}
          />
        ))}
      </div>
    </div>
  )
}

export default Home