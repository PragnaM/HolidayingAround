// import logo from "./logo.svg";
import "./App.css";
import Homepage from "./components/Homepage.js";
import { Routes, Route } from "react-router-dom";
import MainSection from "./components/MainSection.js";
import Destinations from "./components/Destinations.js";
import Feedbacks from "./components/Feedbacks.js";
import About from "./components/About.js";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />}>
        <Route path="/" element={<MainSection />} />
        <Route path="destinations" element={<Destinations />} />
        <Route path="feedbacks" element={<Feedbacks />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
    // <div className="App">
    //   <Homepage />
    // </div>
  );
}

export default App;
