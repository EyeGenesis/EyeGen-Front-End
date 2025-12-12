import React from "react";
import estilos from "./SecaoComponentes.module.css";
import { useLanguage } from "../../../contexto/ContextoLingua";

const SecaoComponentes = () => {
  const { t } = useLanguage();

  return (
    <section className={estilos.secaoComponentes}>
      <div className={estilos.container}>
        <div className={estilos.colunaTitulo}>
          <h2>{t.comprar.componentes.titulo}</h2>
        </div>

        <div className={estilos.colunaLista}>
          <ul>
            {t.comprar.componentes.lista.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SecaoComponentes;