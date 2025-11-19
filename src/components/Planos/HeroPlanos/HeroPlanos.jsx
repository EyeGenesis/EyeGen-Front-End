import React from 'react';
import estilos from './HeroPlanos.module.css';

const HeroPlanos = () => {
  return (
    <section className={estilos.heroPlanos}>
      <div className={estilos.container}>
        <h1>
          O melhor do EyeGen
          <br />
          junto com você
        </h1>
        <a href="#" className={estilos.botaoPlanos}>
          Conheça Nossos Planos
        </a>
      </div>
    </section>
  );
};

export default HeroPlanos;
