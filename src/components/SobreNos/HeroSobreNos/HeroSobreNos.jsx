import React from "react";
import estilos from "./HeroSobreNos.module.css";
import videoFundo from "../../../assets/videos/video.mp4";
import { useLanguage } from "../../../contexto/ContextoLingua";

const HeroSobreNos = () => {
  const { t } = useLanguage();

  return (
    <section className={estilos.heroSobreNos}>
      <video
        className={estilos.videoBackground}
        src={videoFundo}
        autoPlay
        loop
        muted
        playsInline
      >
        Seu navegador não suporta vídeos HTML5.
      </video>

      <div className={estilos.overlay}></div>

      <div className={estilos.container}>
        <h1>{t.sobreNos.hero.titulo}</h1>
        <p>
          {t.sobreNos.hero.texto}
        </p>
      </div>
    </section>
  );
};

export default HeroSobreNos;