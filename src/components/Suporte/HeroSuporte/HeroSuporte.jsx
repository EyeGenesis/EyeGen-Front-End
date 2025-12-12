import React from "react";
import estilos from "./HeroSuporte.module.css";
import { Link } from "react-router-dom";
import { useLanguage } from "../../../contexto/ContextoLingua";

const HeroSuporte = () => {
  const { t } = useLanguage();

  return (
    <section className={estilos.heroSuporte}>
      <div className={estilos.container}>
        <span className={estilos.preTitulo}>{t.suporte.hero.preTitulo}</span>

        <h1>{t.suporte.hero.titulo}</h1>

        <div className={estilos.divider}></div>

        <p>
          {t.suporte.hero.texto}
        </p>

        <div className={estilos.buttonGroup}>
          <Link
            to="/suporte"
            className={`${estilos.botao} ${estilos.botaoSecundario}`}
          >
            {t.suporte.hero.botao}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSuporte;