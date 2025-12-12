import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Chatbot from "./components/Chatbot/Chatbot.jsx";
import Loader from "./components/Loader/Loader.jsx";
import Home from "./components/Home/Home.jsx";
import PaginaEyeGlass from "./components/PaginaEyeGlass/PaginaEyeGlass.jsx";
import SobreNos from "./components/SobreNos/SobreNos.jsx";
import Login from "./components/Login/Login.jsx";
import Planos from "./components/Planos/Planos.jsx";
import Suporte from "./components/Suporte/Suporte.jsx";
import EspecProduto from "./components/EspecProduto/EspecProduto.jsx";
import Cadastro from "./components/Cadastro/Cadastro.jsx";
import NotFound from "./components/NotFound/NotFound.jsx";

import "./App.css";

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      {loading && <Loader />}

      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre-nos" element={<SobreNos />} />
        <Route path="/planos" element={<Planos />} />
        <Route path="/suporte" element={<Suporte />} />
        <Route path="/comprar" element={<EspecProduto />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastre-se" element={<Cadastro />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/fazer-pedido" element={<PaginaEyeGlass />} />
      </Routes>

      <Footer />
      <Chatbot />
    </>
  );
}

export default App;
