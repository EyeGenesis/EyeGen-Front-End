import React from 'react';
import estilos from './Comunidade.module.css';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import { FaArrowRight, FaStar } from 'react-icons/fa';
import avatar1 from '../../../assets/avatar1.png';
import avatar2 from '../../../assets/avatar2.png';
import avatar3 from '../../../assets/avatar3.png';
import avatar4 from '../../../assets/avatar4.png';
import avatar5 from '../../../assets/avatar5.png';
import { useLanguage } from "../../../contexto/ContextoLingua";

const avatarMap = {
  0: avatar1,
  1: avatar2,
  2: avatar3,
  3: avatar4,
  4: avatar5,
};

const Comunidade = () => {
  const { t } = useLanguage();

  return (
    <>
      <motion.section 
        className={estilos.secaoTitulo}
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {t.home.comunidade.titulo}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {t.home.comunidade.texto}
        </motion.p>
        <motion.a 
          href="#" 
          className={estilos.botaoFazerParte}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
        >
          {t.home.comunidade.botao} <FaArrowRight size={14} />
        </motion.a>
      </motion.section>

      <motion.section 
        className={estilos.secaoCarrossel}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.h3
          initial={{ x: -30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {t.home.comunidade.carrosselTitulo}
        </motion.h3>
        
        <Swiper
          modules={[FreeMode]}
          className={estilos.swiperContainer}
          spaceBetween={20}
          slidesPerView={'auto'}
          freeMode={true}
        >
          {t.home.comunidade.depoimentos.map((depoimento, index) => (
            <SwiperSlide key={index} className={estilos.swiperSlide}>
              <article className={estilos.cartao}>
                <div className={estilos.topoCartao}>
                  <img src={avatarMap[index]} alt={`Avatar de ${depoimento.nome}`} className={estilos.avatar} />
                  <blockquote className={estilos.citacao}>
                    "{depoimento.citacao}"
                  </blockquote>
                </div>
                <footer className={estilos.infoAutor}>
                  <span className={estilos.nome}>{depoimento.nome}</span>
                  <span className={estilos.local}>{depoimento.local}</span>
                  <span className={estilos.nota}>
                    {depoimento.nota} <FaStar color="#ffc107" />
                  </span>
                </footer>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.section>
    </>
  );
};

export default Comunidade;