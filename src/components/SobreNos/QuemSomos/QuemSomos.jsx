import React from "react";
import estilos from "./QuemSomos.module.css";
import fotoEquipe from "../../../assets/equipe-eg.jpg";

const QuemNosSomos = () => {
  return (
    <>
      <section className={estilos.secaoQuemSomos}>
        <div className={estilos.container}>
          <h2 className={estilos.titulo}>Quem Nós Somos</h2>

          <div className={estilos.imagemWrapper}>
            <img
              src={fotoEquipe}
              alt="Foto da equipe EyeGen reunida"
              className={estilos.imagemEquipe}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default QuemNosSomos;
