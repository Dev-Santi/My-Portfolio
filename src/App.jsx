import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Proyects from "./components/Proyects/Proyects";

function App() {
  const path = useLocation().pathname;
  const isHome = path === "/My-Portfolio/";
  return (
    <div className={isHome ? "app gradient" : "app"}>
      <Navbar />
      <Routes>
        <Route path="/My-Portfolio/" element={<Home />} />
        <Route path="/My-Portfolio/proyects/" element={<Proyects />} />
      </Routes>
    </div>
  );
}

export default App;
