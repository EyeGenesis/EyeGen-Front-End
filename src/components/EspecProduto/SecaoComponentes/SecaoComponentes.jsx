import React from "react";
import estilos from "./SecaoComponentes.module.css";

const SecaoComponentes = () => {
  return (
    <section className={estilos.secaoComponentes}>
      <div className={estilos.container}>
        <div className={estilos.colunaTitulo}>
          <h2>Componentes</h2>
        </div>

        <div className={estilos.colunaLista}>
          <ul>
            <li>Raspberry pi 4 4gb</li>
            <li>Raspberry Pi Câmera Module (RespCam) Rev 1.3</li>
            <li>Bateria de Polímero de Lítio (LiPo) 3.7V 10.000 mAh</li>
            <li>85,6 mm x 56,5 mm x 21 mm (comprimento x largura x altura)</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SecaoComponentes;
