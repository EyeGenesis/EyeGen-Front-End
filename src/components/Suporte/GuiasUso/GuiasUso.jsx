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
import suporteTransicao from "../../../assets/suporte-transition.png";

const guias = [
  {
    id: 1,
    thumbnail: thumbVideo1,
    alt: 'Homem idoso com deficiência visual em uma estação de metrô',
  },
  {
    id: 2,
    thumbnail: thumbVideo2,
    alt: 'Thumbnail de outro guia de uso',
  },
  {
    id: 3,
    thumbnail: thumbVideo3,
    alt: 'Thumbnail de mais um guia de uso',
  },
];

const GuiasDeUso = () => {
  return (
    <section className={estilos.secaoGuias}>
  
      <div className={estilos.container}>
        
        <h2 className={estilos.tituloPrincipal}>Guias de Uso</h2>
        <div className={estilos.chipFiltro}>
          Guia de primeiros passos com o EyeGlass
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