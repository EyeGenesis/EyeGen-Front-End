import React from 'react';
import estilos from './Comunidade.module.css';
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

// Mapeamento de imagens para os IDs (já que o JSON de tradução não importa imagens)
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
    <section className={estilos.secaoTitulo}>
        <h2>{t.home.comunidade.titulo}</h2>
        <p>{t.home.comunidade.texto}</p>
        <a href="#" className={estilos.botaoFazerParte}>
          {t.home.comunidade.botao} <FaArrowRight size={14} />
        </a>
    </section>
      <section className={estilos.secaoCarrossel}>
        <h3>{t.home.comunidade.carrosselTitulo}</h3>
        
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
      </section>
    </>
  );
};

export default Comunidade;