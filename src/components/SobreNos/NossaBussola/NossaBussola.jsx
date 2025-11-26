import React from "react";
import estilos from "./NossaBussola.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import {
  FaPuzzlePiece,
  FaGlobeAmericas,
  FaHandsHelping,
  FaHandHoldingHeart,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";

const valores = [
  {
    id: 1,
    icon: <FaPuzzlePiece size={60} />,
    titulo: "Criatividade",
    texto:
      "Enxergamos possibilidades além do óbvio, explorando novas ideias e abordagens para criar soluções tecnológicas verdadeiramente transformadoras.",
  },
  {
    id: 2,
    icon: <FaGlobeAmericas size={60} />,
    titulo: "Impacto Social",
    texto:
      "Criamos oportunidades para que todos ocupem seu espaço na sociedade, elevando a autoestima e impactando positivamente a vida de pessoas em situação de vulnerabilidade.",
  },
  {
    id: 3,
    icon: <FaHandsHelping size={60} />,
    titulo: "Inclusão",
    texto:
      "Nosso foco é incluir pessoas com deficiência visual, independentemente de sua etnia. Por meio do nosso produto, buscamos ampliar seu espaço, sua voz e suas oportunidades na sociedade.",
  },
  {
    id: 4,
    icon: <FaHandHoldingHeart size={60} />,
    titulo: "Respeito",
    texto:
      "Respeitamos cada indivíduo em sua essência, criando tecnologias que honram sua dignidade, fortalecem sua autonomia e atendem às suas necessidades com cuidado.",
  },
];

const NossaBussola = () => {
  return (
    <section className={estilos.secaoBussola}>
      <div className={estilos.container}>
        <h2 className={estilos.tituloPrincipal}>Nossa Bússola</h2>

        <Swiper
          modules={[Navigation]}
          className={estilos.swiperContainer}
          spaceBetween={20}
          slidesPerView={"auto"}
          navigation={{
            prevEl: `.${estilos.navPrev}`,
            nextEl: `.${estilos.navNext}`,
          }}
        >
          {valores.map((valor) => (
            <SwiperSlide key={valor.id} className={estilos.swiperSlide}>
              <article className={estilos.cartao}>
                <div className={estilos.iconeWrapper}>{valor.icon}</div>
                <h3>{valor.titulo}</h3>
                <p>{valor.texto}</p>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className={estilos.containerNavegacao}>
          <button className={estilos.navPrev} aria-label="Anterior">
            <FaArrowLeft />
          </button>
          <button className={estilos.navNext} aria-label="Próximo">
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default NossaBussola;
