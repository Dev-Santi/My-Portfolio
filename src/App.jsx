import { Routes, Route, useLocation } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Proyects from "./components/Proyects/Proyects";

function App() {
  const path = useLocation().pathname;
  const isHome = path === "/My-Portfolio/";
  return (
    <div className={isHome ? "app gradient" : "app"}>
      <div className=""></div>
      <Navbar />
      <Routes>
        <Route path="/My-Portfolio/" element={<Home />} />
        <Route path="/My-Portfolio/proyects/" element={<Proyects />} />
      </Routes>
      <div className="space-between">
        <Footer />
      </div>
    </div>
  );
}

export default App;
