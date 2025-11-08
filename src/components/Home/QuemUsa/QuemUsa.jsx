import React from "react";
import estilos from "./QuemUsa.module.css";
import videoMulher from "../../../assets/img/mulher-andando.mp4";

const QuemUsa = () => {
  return (
    <section className={estilos.secaoQuemUsa}>
      <div className={estilos.container}>
        <h2 className={estilos.tituloPrincipal}>Quem usa o EYEGLASS?</h2>
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
          <h3>Pessoas com Baixa Visão e Deficientes Visuais</h3>
          <p>
            Nossos óculos assistivos trazem mais nitidez e clareza para pessoas
            com baixa visão. A tecnologia amplia textos, aumenta o contraste e
            destaca obstáculos, devolvendo a confiança e a independência para o
            seu dia a dia.
          </p>
          <p>
            Além disso contamos com reconhecimentos de objetos com retorno por
            voz para pessoas cegas
          </p>
        </div>
      </div>
    </section>
  );
};

export default QuemUsa;
