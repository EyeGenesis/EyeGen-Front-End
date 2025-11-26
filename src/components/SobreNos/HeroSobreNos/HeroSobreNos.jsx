import React from "react";
import estilos from "./HeroSobreNos.module.css";
import videoFundo from "../../../assets/videos/video.mp4";

const HeroSobreNos = () => {
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
        <h1>Sobre Nós</h1>
        <p>
          Acreditamos na tecnologia como uma ponte direta para a independência
          de pessoas com deficiência visual.
          <br />
          Com essa convicção, o EyeGen nasceu em ambiente acadêmico com objetivo
          de construir uma ferramenta que auxilia-se pessoas a locomoverem com
          mais segurança e confiança.
        </p>
      </div>
    </section>
  );
};

export default HeroSobreNos;
