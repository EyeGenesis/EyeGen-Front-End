import React from 'react';
import estilos from './ContatoSuporte.module.css';
import { IoMailOutline, IoMicOutline } from 'react-icons/io5';
import imagemContato from '../../../assets/pai-filho-contato.png'; 
import { useLanguage } from "../../../contexto/ContextoLingua";

const ContatoSuporte = () => {
  const { t } = useLanguage();

  return (
    <section className={estilos.secaoContato}>
      <div className={estilos.container}>
        
        <div className={estilos.colunaImagem}>
          <img 
            src={imagemContato} 
            alt={t.suporte.contato.altImagem} 
          />
        </div>

        <div className={estilos.colunaFormulario}>
          <h3>{t.suporte.contato.titulo}</h3>
          <p>
            {t.suporte.contato.texto}
          </p>

          <form className={estilos.formulario}>

            <div className={estilos.campoInput}>
              <IoMailOutline className={estilos.iconeInput} />
              <input type="email" placeholder={t.suporte.contato.placeholders.email} />
            </div>
            
            <div className={estilos.campoInput}>
              <IoMicOutline className={estilos.iconeInput} />
              <textarea placeholder={t.suporte.contato.placeholders.duvida} rows="4"></textarea>
            </div>

            <button type="submit" className={estilos.botaoEnviar}>
              {t.suporte.contato.botao}
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default ContatoSuporte;