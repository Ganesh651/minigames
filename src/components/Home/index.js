import { v4 as uuidv4 } from 'uuid'
import { useNavigate } from 'react-router-dom';
import GameOptions from '../GameOptions';
import EmojiGameRules from '../EmojiGameRules';
import MatrixGameRules from '../MatrixGameRules';
import RockPaperGameRules from '../RockPaperGameRules';
import FlipGameRules from '../FlipGameRules';
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


  const handdleGameRules = (gameType) => {
    switch (gameType) {
      case "EMOJIGAME":
        return <EmojiGameRules />
      case "MEMORY_MATRIX":
        return <MatrixGameRules />
      case "ROCK_PAPER_SCISSOR":
        return <RockPaperGameRules />
      case "FLIP_GAME":
        return <FlipGameRules />

      default: break;
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