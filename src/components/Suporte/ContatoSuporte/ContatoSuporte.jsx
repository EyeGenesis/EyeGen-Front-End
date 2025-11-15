import React from 'react';
import estilos from './ContatoSuporte.module.css';
import { IoMailOutline, IoMicOutline } from 'react-icons/io5';
import imagemContato from '../../../assets/pai-filho-contato.png'; 

const ContatoSuporte = () => {
  return (
    <section className={estilos.secaoContato}>
      <div className={estilos.container}>
        
        <div className={estilos.colunaImagem}>
          <img 
            src={imagemContato} 
            alt="Pai segurando a mão de seu filho com deficiência visual" 
          />
        </div>

        <div className={estilos.colunaFormulario}>
          <h3>Entre em contato com nosso Suporte Técnico</h3>
          <p>
            Ainda está com Dúvidas? Envie sua mensagem 
            para a equipe de suporte EyeGen.
          </p>

          <form className={estilos.formulario}>

            <div className={estilos.campoInput}>
              <IoMailOutline className={estilos.iconeInput} />
              <input type="email" placeholder="Insira seu e-mail" />
            </div>
            
            <div className={estilos.campoInput}>
              <IoMicOutline className={estilos.iconeInput} />
              <textarea placeholder="Insira sua dúvida" rows="4"></textarea>
            </div>

            <button type="submit" className={estilos.botaoEnviar}>
              Enviar mensagem
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default ContatoSuporte;