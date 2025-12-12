import React from "react";
import estilos from "./NossoProduto.module.css"; 
import { motion } from "framer-motion"; 
import {
  FaArrowRight,
  FaPlus,
  FaCamera,
  FaBatteryHalf,
  FaShieldAlt,
} from "react-icons/fa"; 
import designProduto from "../../../assets/img/design-produto.mp4"; 
import cameraProduto from "../../../assets/img/camera-produto.mp4"; 
import bateriaProduto from "../../../assets/img/bateria-produto.mp4"; 
import materialProduto from "../../../assets/img/material-produto.png"; 
import { Link } from "react-router-dom"; 
import { useLanguage } from "../../../contexto/ContextoLingua"; 

const NossoProduto = () => {
  const { t } = useLanguage();

 
  const gridContainerVariants = {
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
    <section className={estilos.secaoProduto}>

      <motion.div 
        className={estilos.containerTitulo}
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2>{t.home.produto.titulo}</h2>
        <p>{t.home.produto.subtitulo}</p>
        <Link to="/comprar" className={estilos.botaoComprar}>
          {t.home.produto.botao} <FaArrowRight size={14} />
        </Link>
      </motion.div>


      <motion.div 
        className={estilos.gradeCards}
        variants={gridContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }} 
      >

        <motion.article 
          className={`${estilos.cartao} ${estilos.cartaoGrande}`}
          variants={cardVariants}
        >
          <div className={estilos.espacoVideo}>
            <video
              src={designProduto}
              className={estilos.videoElemento}
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
          <div className={estilos.conteudoCartao}>
            <FaShieldAlt className={estilos.icone} size={24} />
            <h3>{t.home.produto.cards.design.titulo}</h3>
            <p>{t.home.produto.cards.design.texto}</p>
            <footer>
              <Link to="/comprar" className={estilos.linkSaberMais}>
                {t.home.produto.cards.design.link}
              </Link>
              <button
                aria-label="Expandir"
                className={estilos.botaoCirculo}
              ></button>
            </footer>
          </div>
        </motion.article>


        <motion.article 
          className={estilos.cartao}
          variants={cardVariants}
        >
          <div className={estilos.espacoVideo}>
            <video
              src={cameraProduto}
              className={estilos.videoElemento}
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
          <div className={estilos.conteudoCartao}>
            <FaCamera className={estilos.icone} size={24} />
            <h3>{t.home.produto.cards.camera.titulo}</h3>
            <p>{t.home.produto.cards.camera.texto}</p>
            <footer>
              <Link to="/comprar" className={estilos.linkSaberMais}>
                {t.home.produto.cards.camera.link}
              </Link>
              <button
                aria-label="Expandir"
                className={estilos.botaoCirculo}
              ></button>
            </footer>
          </div>
        </motion.article>


        <motion.article 
          className={estilos.cartao}
          variants={cardVariants}
        >
          <div className={estilos.espacoVideo}>
            <video
              src={bateriaProduto}
              className={estilos.videoElemento}
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
          <div className={estilos.conteudoCartao}>
            <FaBatteryHalf className={estilos.icone} size={24} />
            <h3>{t.home.produto.cards.bateria.titulo}</h3>
            <p>{t.home.produto.cards.bateria.texto}</p>
            <footer>
              <Link to="/comprar" className={estilos.linkSaberMais}>
                {t.home.produto.cards.bateria.link}
              </Link>
              <button
                aria-label="Expandir"
                className={estilos.botaoCirculo}
              ></button>
            </footer>
          </div>
        </motion.article>


        <motion.article 
          className={estilos.cartao}
          variants={cardVariants}
        >
          <div className={estilos.espacoVideo}>
            <img
              src={materialProduto}
              alt=""
              className={estilos.imagemElemento}
            />
          </div>
          <div className={estilos.conteudoCartao}>
            <FaShieldAlt className={estilos.icone} size={24} />
            <h3>{t.home.produto.cards.material.titulo}</h3>
            <p>{t.home.produto.cards.material.texto}</p>
            <footer>
              <Link to="/comprar" className={estilos.linkSaberMais}>
                {t.home.produto.cards.material.link}
              </Link>
              <button aria-label="Adicionar" className={estilos.botaoCirculo}>
                <FaPlus size={16} />
              </button>
            </footer>
          </div>
        </motion.article>
      </motion.div>
    </section>
  );
};

export default NossoProduto;