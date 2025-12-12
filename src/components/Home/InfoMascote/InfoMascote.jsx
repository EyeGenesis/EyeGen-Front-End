import React from "react";
import estilos from "./InfoMascote.module.css"; 
import { motion } from "framer-motion"; 
import { FaUsers, FaDollarSign, FaCogs } from "react-icons/fa"; 
import iconeBotaoGeny from "../../../assets/img/icone-geny-botao.png"; 
import mascoteGeny from "../../../assets/img/mascote-geny.png"; 
import retanguloTransicao from "../../../assets/img/rectangle-transition.png"; 
import { Link } from "react-router-dom"; 
import { useLanguage } from "../../../contexto/ContextoLingua"; 

const InfoMascote = () => {
  const { t } = useLanguage();


  const cardListVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, 
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: "easeOut" } 
    },
  };

  return (
    <>
      <section className={estilos.secaoInformacao}>
        <div className={estilos.containerInfo}>

          <motion.div 
            className={estilos.gradeCards}
            variants={cardListVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >

            <motion.article 
              className={estilos.cartao}
              variants={cardVariants}
            >
              <FaUsers size={40} className={estilos.icone} />
              <h3>{t.home.infoMascote.cards.sobre.titulo}</h3>
              <p>{t.home.infoMascote.cards.sobre.texto}</p>
              <Link to="/sobre-nos">{t.home.infoMascote.cards.sobre.link}</Link>
            </motion.article>


            <motion.article 
              className={estilos.cartao}
              variants={cardVariants}
            >
              <FaDollarSign size={40} className={estilos.icone} />
              <h3>{t.home.infoMascote.cards.planos.titulo}</h3>
              <p>{t.home.infoMascote.cards.planos.texto}</p>
              <Link to="/planos">{t.home.infoMascote.cards.planos.link}</Link>
            </motion.article>


            <motion.article 
              className={estilos.cartao}
              variants={cardVariants}
            >
              <FaCogs size={40} className={estilos.icone} />
              <h3>{t.home.infoMascote.cards.suporte.titulo}</h3>
              <p>{t.home.infoMascote.cards.suporte.texto}</p>
              <Link to="/suporte">{t.home.infoMascote.cards.suporte.link}</Link>
            </motion.article>
          </motion.div>
        </div>
      </section>

      <img src={retanguloTransicao} alt="" style={{ display: 'block', width: '100%' }} />

      <section className={estilos.secaoMascote}>
        <div className={estilos.containerMascote}>

          <motion.div 
            className={estilos.colunaTexto}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2>
              {t.home.infoMascote.mascote.titulo} 
            </h2>
            <p>{t.home.infoMascote.mascote.p1}</p>
            <p>{t.home.infoMascote.mascote.p2}</p>
            

            <motion.a 
              href="#" 
              className={estilos.botaoMascote}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <span>{t.home.infoMascote.mascote.botao}</span>
              <img
                src={iconeBotaoGeny}
                alt="Ícone da GENY"
                width={40}
                height={40}
              />
            </motion.a>
          </motion.div>


          <motion.div 
            className={estilos.colunaImagem}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className={estilos.circuloFundo}></div>
            <img
              src={mascoteGeny}
              alt="Mascote GENY"
              className={estilos.imagemMascote}
            />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default InfoMascote;