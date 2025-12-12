import React from "react";
import estilos from "./QuemUsa.module.css";
import videoMulher from "../../../assets/img/mulher-andando.mp4";
import { useLanguage } from "../../../contexto/ContextoLingua";

const QuemUsa = () => {
  const { t } = useLanguage();

  return (
    <section className={estilos.secaoQuemUsa}>
      <div className={estilos.container}>
        <h2 className={estilos.tituloPrincipal}>{t.home.quemUsa.titulo}</h2>
        <div className={estilos.videoWrapper}>
          <video
            src={videoMulher}
            className={estilos.videoFundo}
            autoPlay
            loop
            muted
            playsInline
          >
            Seu navegador não suporta a tag de vídeo.
          </video>
        </div>
        <div className={estilos.conteudo}>
          <h3>{t.home.quemUsa.subtitulo}</h3>
          <p>
            {t.home.quemUsa.p1}
          </p>
          <p>
            {t.home.quemUsa.p2}
          </p>
        </div>
      </div>
    </section>
  );
};

export default QuemUsa;