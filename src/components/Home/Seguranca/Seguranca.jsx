import React from "react";
import { motion } from "framer-motion"; //
import estilos from "./Seguranca.module.css"; //
import imagemHomem from "../../../assets/img/idoso-section.png"; //
import imagemCrianca from "../../../assets/img/crianca-section.png"; //
import { Link } from "react-router-dom"; //
import { useLanguage } from "../../../contexto/ContextoLingua"; //

export default function Seguranca() {
  const { t } = useLanguage();


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, 
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
    <section className={estilos.secaoSeguranca}>
      <div className={estilos.conteudo}>

        <motion.h2 
          className={estilos.tituloPrincipal}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} 
          transition={{ duration: 0.5 }}
        >
          {t.home.seguranca.titulo}
        </motion.h2>

  
        <motion.div 
          className={estilos.gradeCards}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }} 
        >

          <motion.article 
            className={estilos.cartao} 
            variants={cardVariants}
          >
            <div className={estilos.imagemContainer}>
              <img
                src={imagemHomem}
                alt="Homem com deficiência visual usando bengala e óculos eyegen em uma cidade"
              />
            </div>
            <h3>{t.home.seguranca.card1.titulo}</h3>
            <p>
              {t.home.seguranca.card1.texto}
            </p>
            <footer className={estilos.linksRodape}>
              <Link to="/">{t.home.seguranca.card1.link1}</Link>
              <Link to="/">{t.home.seguranca.card1.link2}</Link>
              <Link to="/">{t.home.seguranca.card1.link3}</Link>
            </footer>
          </motion.article>


          <motion.article 
            className={estilos.cartao} 
            variants={cardVariants}
          >
            <div className={estilos.imagemContainer}>
              <img
                src={imagemCrianca}
                alt="Criança sorrindo usando óculos eyegen em uma rua ensolarada"
              />
            </div>
            <h3>{t.home.seguranca.card2.titulo}</h3>
            <p>
              {t.home.seguranca.card2.texto}
            </p>
          </motion.article>
        </motion.div>
      </div>
    </section>
  );
}