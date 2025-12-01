import React from 'react';
import estilos from './TabelaPrecos.module.css';
import { FaCheckCircle } from 'react-icons/fa';
import { IoCheckmarkCircleOutline, IoSparkles } from 'react-icons/io5';
import { FiArrowUpRight } from 'react-icons/fi';
import { useLanguage } from "../../../contexto/ContextoLingua";

const TabelaPrecos = () => {
  const { t } = useLanguage();
  const { tabela } = t.planos;

  return (
    <section className={estilos.secaoPrecos} id='secaoPrecos'>

      <div className={estilos.containerCabecalho}>
        <h2>{tabela.titulo}</h2>
        <p>{tabela.subtitulo}</p>
      
        <div className={estilos.togglePlanos}>
          <span>{tabela.toggle}</span>
        </div>
      </div>


      <div className={estilos.containerCards}>
        

        <article className={estilos.cartao}>
          <div className={estilos.cartaoInterno}>
            <span className={estilos.tipoPlano}>{tabela.cards.infinity.nome}</span>
            <p className={estilos.descricaoPlano}>
              {tabela.cards.infinity.descricao}
            </p>
            <div className={estilos.preco}>{tabela.cards.infinity.preco}</div>
            <ul className={estilos.listaFuncionalidades}>
              {tabela.cards.infinity.lista.map((item, index) => (
                <li key={index}>
                  <FaCheckCircle className={estilos.checkRosa} /> {item}
                </li>
              ))}
            </ul>
            <a href="#" className={`${estilos.botaoPlano} ${estilos.botaoInfinity}`}>
              {tabela.cards.infinity.botao}
            </a>
          </div>
        </article>


        <article className={estilos.cartaoDestacado} >
          <div className={estilos.headerDestacado}>
            {tabela.cards.guardian.badge} <IoSparkles size={16} />
          </div>

          <div className={estilos.corpoDestacado}>
            <span className={estilos.tipoPlano}>{tabela.cards.guardian.nome}</span>
            <p className={estilos.descricaoPlano}>
              {tabela.cards.guardian.descricao}
            </p>
            <div className={estilos.preco}>{tabela.cards.guardian.preco}</div>
            
            <ul className={estilos.listaFuncionalidades}>
              {tabela.cards.guardian.lista.map((item, index) => (
                <li key={index}>
                  <FaCheckCircle className={estilos.checkRoxo} /> {item}
                </li>
              ))}
            </ul>
            
            <a href="#" className={`${estilos.botaoPlano} ${estilos.botaoGuardian}`}>
              {tabela.cards.guardian.botao} 
              <FiArrowUpRight size={18} />
            </a>
          </div>
        </article>


        <article className={estilos.cartao}>
          <div className={estilos.cartaoInterno}>
            <span className={estilos.tipoPlano}>{tabela.cards.origin.nome}</span>
            <span className={estilos.badgeGratuito}>{tabela.cards.origin.badge}</span>
            <p className={estilos.descricaoPlano}>
              {tabela.cards.origin.descricao}
            </p>
            <div className={estilos.preco}>{tabela.cards.origin.preco}</div>
            <ul className={estilos.listaFuncionalidades}>
              {tabela.cards.origin.lista.map((item, index) => (
                <li key={index}>
                  <IoCheckmarkCircleOutline className={estilos.checkVerdeAgua} /> {item}
                </li>
              ))}
            </ul>
            <a href="#" className={`${estilos.botaoPlano} ${estilos.botaoOrigin}`}>
              {tabela.cards.origin.botao}
            </a>
          </div>
        </article>

      </div>
    </section>
  );
};

export default TabelaPrecos;