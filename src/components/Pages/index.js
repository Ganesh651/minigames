import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Home";




const Pages = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </BrowserRouter>
)


export default Pages