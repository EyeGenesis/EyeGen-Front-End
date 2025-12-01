import React from "react";
import estilos from "./QuemSomos.module.css";
import fotoEquipe from "../../../assets/equipe-eg.jpg";
import { useLanguage } from "../../../contexto/ContextoLingua";

const QuemNosSomos = () => {
  const { t } = useLanguage();

  return (
    <>
      <section className={estilos.secaoQuemSomos}>
        <div className={estilos.container}>
          <h2 className={estilos.titulo}>{t.sobreNos.quemSomos.titulo}</h2>

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