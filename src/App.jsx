import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Home from "./components/Home/Home.jsx";
import Planos from "./components/Planos/Planos.jsx";
import Suporte from "./components/Suporte/Suporte.jsx";
import "./App.css";

function App() {
  return (
    <>
    <Header />
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/planos" element={<Planos />} />
      <Route path="/suporte" element={<Suporte />} />
    </Routes>

    <Footer />
    </>
  );
}

export default App;
