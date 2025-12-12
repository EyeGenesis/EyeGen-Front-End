import React from 'react';
import estilos from './Contribuicao.module.css';
import { FaArrowRight } from 'react-icons/fa';
import { useLanguage } from "../../../contexto/ContextoLingua";

const Contribuicao = () => {
  const { t } = useLanguage();

  return (
    <section className={estilos.secaoContribuicao}>
      
      <div className={estilos.containerTexto}>
        <h2>{t.home.contribuicao.titulo}</h2>
        <p>{t.home.contribuicao.texto}</p>
        <a href="#" className={estilos.botaoSaibaComo}>
          {t.home.contribuicao.botao} <FaArrowRight size={14} />
        </a>
      </div>

    </section>
  );
};

export default Contribuicao;