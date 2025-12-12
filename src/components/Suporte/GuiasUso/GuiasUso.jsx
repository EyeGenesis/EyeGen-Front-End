import React from 'react';
import estilos from './GuiasUso.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { FaPlayCircle, FaPlus } from 'react-icons/fa';
import thumbVideo1 from '../../../assets/primeiro-acesso.png';
import thumbVideo2 from '../../../assets/ia.png'; 
import thumbVideo3 from '../../../assets/funcionalidades.jpg';
import { useLanguage } from "../../../contexto/ContextoLingua";

const GuiasDeUso = () => {
  const { t } = useLanguage();

  const guias = [
    {
      id: 1,
      thumbnail: thumbVideo1,
      alt: t.suporte.guias.altImagens.guia1,
    },
    {
      id: 2,
      thumbnail: thumbVideo2,
      alt: t.suporte.guias.altImagens.guia2,
    },
    {
      id: 3,
      thumbnail: thumbVideo3,
      alt: t.suporte.guias.altImagens.guia3,
    },
  ];

  return (
    <section className={estilos.secaoGuias}>
  
      <div className={estilos.container}>
        
        <h2 className={estilos.tituloPrincipal}>{t.suporte.guias.titulo}</h2>
        <div className={estilos.chipFiltro}>
          {t.suporte.guias.filtro}
        </div>

        <Swiper
          modules={[Pagination, FreeMode]}
          className={estilos.swiperContainer}
          spaceBetween={20}      
          slidesPerView={'auto'} 
          centeredSlides={true}  
          freeMode={true}       
          pagination={{
            clickable: true, 
            el: `.${estilos.swiperPagination}`
          }}
        >
          {guias.map((guia) => (
            <SwiperSlide key={guia.id} className={estilos.swiperSlide}>
              <article className={estilos.cartao}>
                <img src={guia.thumbnail} alt={guia.alt} className={estilos.thumbnail} />
                
                <FaPlayCircle className={estilos.iconePlay} size={60} />
                
                <button aria-label="Adicionar" className={estilos.botaoMais}>
                  <FaPlus size={16} />
                </button>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className={estilos.swiperPagination}></div>

      </div>
    </section>
  );
};

export default GuiasDeUso;