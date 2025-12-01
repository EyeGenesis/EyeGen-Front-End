import React, { useState } from 'react';
import estilos from './CentralAjuda.module.css';
import { FaChevronDown } from 'react-icons/fa';
import { useLanguage } from "../../../contexto/ContextoLingua";

const CentralAjuda = () => {
  const [openItem, setOpenItem] = useState(null);
  const { t } = useLanguage();

  const handleToggle = (id) => {
    setOpenItem(openItem === id ? null : id);
  };


  const faqItems = t.suporte.centralAjuda.items;

  return (
    <section className={estilos.secaoAjuda}>
      <div className={estilos.containerCabecalho}>
        <h2>{t.suporte.centralAjuda.titulo}</h2>
        <p>
          {t.suporte.centralAjuda.subtitulo}
        </p>
      </div>
      <div className={estilos.containerAcordeao}>
        {faqItems.map((item) => {
          const isAberto = openItem === item.id;
          
          return (
            <div key={item.id} className={estilos.itemAcordeao}>
              <button 
                onClick={() => handleToggle(item.id)} 
                className={estilos.botaoAcordeao}
                aria-expanded={isAberto}
              >
                <span>{item.title}</span>
                <FaChevronDown 
                  className={`${estilos.icone} ${isAberto ? estilos.iconeRotacionado : ''}`} 
                />
              </button>
              
              <div 
                className={`${estilos.conteudoAcordeao} ${isAberto ? estilos.conteudoAberto : ''}`}
              >
                <div className={estilos.listaCardsAzuis}>
                  {item.subItems.map((subItem) => (
                    <div key={subItem.id} className={estilos.cardAzul}>
                      <h4 className={estilos.tituloCard}>{subItem.question}</h4>
                      <p className={estilos.textoCard}>{subItem.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CentralAjuda;