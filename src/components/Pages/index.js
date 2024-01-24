import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Home";
import EmojiGame from "../EmojiGame";
import FlipGame from "../FlipGame";
import MatrixGame from "../MatrixGame";
import RockPaperGame from "../RockPaperGame";





const Pages = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/emoji-game" element={<EmojiGame />} />
      <Route path="/memory-matrix" element={<MatrixGame />} />
      <Route path="/rock-paper-scissor" element={<RockPaperGame />} />
      <Route path="/card-flip-memory-game" element={<FlipGame />} />
    </Routes>
  </BrowserRouter>
)


export default Pages