import { Routes, Route } from "react-router-dom";
// SCSS
import Home from "./pages/Home/Home";
import Staff from "./pages/Staff/Staff";
import Ministries from "./pages/Ministries/Ministries";
import PastorCorner from "./pages/PastorCorner/PastorCorner";
import Prayer from "./pages/Prayer/Prayer";
import LiveStream from "./pages/LiveStream/LiveStream";
import "./styles/index.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/staff" element={<Staff />} />
      <Route path="/ministries" element={<Ministries />} />
      <Route path="/pastor-corner" element={<PastorCorner />} />
      <Route path="/prayer" element={<Prayer />} />
      <Route path="/live-stream" element={<LiveStream />} />
    </Routes>
  );
}

export default App;
