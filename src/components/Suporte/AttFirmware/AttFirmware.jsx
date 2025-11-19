import React from 'react';
import estilos from './AttFirmware.module.css';
import { FaArrowRight } from 'react-icons/fa';
import imagemMulher from '../../../assets/mulher-firmware.png'; 
import retanguloTransicao from "../../../assets/suporte-transition2.png";

const AttFirmware = () => {
  return (
    
    <section className={estilos.secaoFirmware}>
      <div className={estilos.container}>

        <div className={estilos.colunaTexto}>
          <h2>Atualizações de Firmware</h2>
          <p>
            Mantenha seu Eyeglass sempre atualizado para garantir o
            melhor desempenho e novas funções de acessibilidade.
          </p>
          <a href="#" className={estilos.botaoAtualizacao}>
            Explore nossas atualizações <FaArrowRight size={12} />
          </a>
        </div>

        <div className={estilos.colunaImagem}>
          <img 
            src={imagemMulher} 
            alt="Mulher sorrindo usando óculos EyeGen e segurando um celular" 
          />
        </div>

      </div>
    </section>
  );
};

export default AttFirmware;