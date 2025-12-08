import React from "react";
import estilos from "./Design.module.css"; 
import { motion } from "framer-motion";
import imgGrid1 from "../../../assets/img/frame-oculos-carrossel.png"; 
import videoGrid2 from "../../../assets/img/360-produto.mp4"; 
import videoGrid3 from "../../../assets/img/design-produto.mp4"; 
import imgPrincipal from "../../../assets/img/principal-design.png"; 
import { useLanguage } from "../../../contexto/ContextoLingua"; 

const SecaoDesign = () => {
  const { t } = useLanguage();


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className={estilos.secaoDesign}>
      <div className={estilos.container}>

        <motion.div 
          className={estilos.containerTexto}
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>{t.comprar.design.titulo}</h2>
          <p>{t.comprar.design.texto}</p>
        </motion.div>


        <motion.div 
          className={estilos.gradeImagens}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div className={estilos.cardMidia} variants={itemVariants}>
            <img src={imgGrid1} alt={t.comprar.design.altImagens.grid1} />
          </motion.div>

          <motion.div className={estilos.cardMidia} variants={itemVariants}>
            <video
              src={videoGrid2}
              loop
              muted
              autoPlay
              playsInline
              alt={t.comprar.design.altImagens.video2}
            />
          </motion.div>

          <motion.div className={estilos.cardMidia} variants={itemVariants}>
            <video
              src={videoGrid3}
              loop
              muted
              autoPlay
              playsInline
              alt={t.comprar.design.altImagens.video3}
            />
          </motion.div>
        </motion.div>


        <div className={estilos.containerProduto}>
          <motion.img
            src={imgPrincipal}
            alt={t.comprar.design.altImagens.principal}
            className={estilos.imagemProdutoPrincipal}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className={estilos.nomeProduto}>
              {t.comprar.design.produtoNome} <span>{t.comprar.design.produtoSpan}</span>
            </h3>
            <p className={estilos.precoProduto}>{t.comprar.design.preco}</p>
            <motion.a 
              href="#" 
              className={estilos.botaoComprar}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t.comprar.design.botao}
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SecaoDesign;