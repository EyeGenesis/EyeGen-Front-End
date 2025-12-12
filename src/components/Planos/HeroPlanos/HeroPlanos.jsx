import React from 'react';
import estilos from './HeroPlanos.module.css';
import { useLanguage } from "../../../contexto/ContextoLingua";

const HeroPlanos = () => {
  const { t } = useLanguage();

  return (
    <section className={estilos.heroPlanos}>
      <div className={estilos.container}>
        {/* Usamos white-space: pre-line no CSS ou quebra de linha manual se preferir, 
            mas o t.planos.hero.titulo já vem com \n */}
        <h1>
          {t.planos.hero.titulo}
        </h1>
        <a href="#secaoPrecos" className={estilos.botaoPlanos}>
          {t.planos.hero.botao}
        </a>
      </div>
    </section>
  );
};

export default HeroPlanos;