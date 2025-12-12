import React from 'react';
import estilos from './AttApp.module.css';
import { FaArrowRight } from 'react-icons/fa';
import imagemMulher from '../../../assets/mulher-firmware.png'; 
import { useLanguage } from "../../../contexto/ContextoLingua";

const AttFirmware = () => {
  const { t } = useLanguage();

  return (
    <section className={estilos.secaoFirmware}>
      <div className={estilos.container}>

        <div className={estilos.colunaTexto}>
          <h2>{t.suporte.firmware.titulo}</h2>
          <p>
            {t.suporte.firmware.texto}
          </p>
          <a href="#" className={estilos.botaoAtualizacao}>
            {t.suporte.firmware.botao} <FaArrowRight size={12} />
          </a>
        </div>

        <div className={estilos.colunaImagem}>
          <img 
            src={imagemMulher} 
            alt={t.suporte.firmware.altImagem} 
          />
        </div>

      </div>
    </section>
  );
};

export default AttFirmware;