import React from "react";
import estilos from "./HeroSuporte.module.css";
import { Link } from "react-router-dom";

const HeroSuporte = () => {
  return (
    <section className={estilos.heroSuporte}>
      <div className={estilos.container}>
        <span className={estilos.preTitulo}>Suporte EyeGen</span>

        <h1>Encontre Ajuda e Liberdade em Cada Passo</h1>

        <div className={estilos.divider}></div>

        <p>
          Bem-vindo à Central de Suporte Eyegen. Escolha uma das opções abaixo
          para aprender, atualizar ou pedir ajuda.
        </p>

        <div className={estilos.buttonGroup}>
          <Link to="/" className={`${estilos.botao} ${estilos.botaoPrimario}`}>
            Pedir ajuda para Geny
          </Link>
          <Link
            to="/suporte"
            className={`${estilos.botao} ${estilos.botaoSecundario}`}
          >
            Falar com a equipe Suporte
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSuporte;
