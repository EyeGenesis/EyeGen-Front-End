import React from "react";
import estilos from "./NossaBussola.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useLanguage } from "../../../contexto/ContextoLingua";

import Criatividade from "../../../assets/criatividade.png";
import ImpactoSocial from "../../../assets/impacto-social.png";
import Inclusao from "../../../assets/inclusao.png";
import Respeito from "../../../assets/respeito.png";
import Colaboracao from "../../../assets/colaboracao.png";

const NossaBussola = () => {
  const { t } = useLanguage();


  const valores = [
    {
      id: 1,
      icon: <img src={Criatividade} alt="Criatividade" width={65}/>,
      titulo: t.sobreNos.bussola.cards[0].titulo,
      texto: t.sobreNos.bussola.cards[0].texto,
    },
    {
      id: 2,
      icon: <img src={ImpactoSocial} alt="Impacto Social" width={65}/>,
      titulo: t.sobreNos.bussola.cards[1].titulo,
      texto: t.sobreNos.bussola.cards[1].texto,
    },
    {
      id: 3,
      icon: <img src={Inclusao} alt="Inclusão" width={65}/>,
      titulo: t.sobreNos.bussola.cards[2].titulo,
      texto: t.sobreNos.bussola.cards[2].texto,
    },
    {
      id: 4,
      icon: <img src={Respeito} alt="Respeito" width={65}/>,
      titulo: t.sobreNos.bussola.cards[3].titulo,
      texto: t.sobreNos.bussola.cards[3].texto,
    },
    {
      id: 5,
      icon: <img src={Colaboracao} alt="Colaboração" width={65}/>,
      titulo: t.sobreNos.bussola.cards[4].titulo,
      texto: t.sobreNos.bussola.cards[4].texto,
    },
  ];

  return (
    <section className={estilos.secaoBussola}>
      <div className={estilos.container}>
        <h2 className={estilos.tituloPrincipal}>{t.sobreNos.bussola.titulo}</h2>

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