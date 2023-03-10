import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Proyects from "./components/Proyects/Proyects";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/My-Portfolio/" element={<Home />} />
        <Route path="/My-Portfolio/proyects/" element={<Proyects />} />
      </Routes>
    </div>
  );
}

export default App;
