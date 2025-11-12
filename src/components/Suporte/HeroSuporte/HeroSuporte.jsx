import React from 'react';
import estilos from './HeroSuporte.module.css';

const HeroSuporte = () => {
  return (
    <section className={estilos.heroSuporte}>
      <div className={estilos.container}>
        
        <span className={estilos.preTitulo}>Suporte EyeGen</span>
        
        <h1>Encontre Ajuda e Liberdade em Cada Passo</h1>
        
        <div className={estilos.divider}></div>
        
        <p>
          Bem-vindo à Central de Suporte Eyegen. Escolha uma das opções 
          abaixo para aprender, atualizar ou pedir ajuda.
        </p>
        
        <div className={estilos.buttonGroup}>
          <a href="#" className={`${estilos.botao} ${estilos.botaoPrimario}`}>
            Pedir ajuda para Geny
          </a>
          <a href="#" className={`${estilos.botao} ${estilos.botaoSecundario}`}>
            Falar com a equipe Suporte
          </a>
        </div>

      </div>
    </section>
  );
};

export default HeroSuporte;