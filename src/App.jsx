import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Home from "./components/Home/Home.jsx";
import Login from "./components/Login/Login.jsx";
import Planos from "./components/Planos/Planos.jsx";
import Suporte from "./components/Suporte/Suporte.jsx";
import EspecProduto from "./components/EspecProduto/EspecProduto.jsx";
import "./App.css";
import Cadastro from "./components/Cadastro/Cadastro.jsx";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/planos" element={<Planos />} />
        <Route path="/suporte" element={<Suporte />} />
        <Route path="/comprar" element={<EspecProduto />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastre-se" element={<Cadastro />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
