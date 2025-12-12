import React from 'react';
import estilos from './TabelaPrecos.module.css'; 
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa'; 
import { IoCheckmarkCircleOutline, IoSparkles } from 'react-icons/io5'; 
import { FiArrowUpRight } from 'react-icons/fi'; 
import { useLanguage } from "../../../contexto/ContextoLingua"; 

const TabelaPrecos = () => {
  const { t } = useLanguage();
  const { tabela } = t.planos;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    },
  };

  return (
    <section className={estilos.secaoPrecos} id='secaoPrecos'>

      <motion.div 
        className={estilos.containerCabecalho}
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2>{tabela.titulo}</h2>
        <p>{tabela.subtitulo}</p>
      
        <div className={estilos.togglePlanos}>
          <span>{tabela.toggle}</span>
        </div>
      </motion.div>

      <motion.div 
        className={estilos.containerCards}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        
        <motion.article 
          className={estilos.cartao}
          variants={cardVariants}
        >
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
        </motion.article>

        <motion.article 
          className={estilos.cartaoDestacado} 
          variants={cardVariants}
        >
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
        </motion.article>

        <motion.article 
          className={estilos.cartao}
          variants={cardVariants}
        >
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
        </motion.article>

      </motion.div>
    </section>
  );
};

export default TabelaPrecos;