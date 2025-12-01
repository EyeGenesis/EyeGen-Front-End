import React from 'react';
import estilos from './TabelaPrecos.module.css';
import { FaCheckCircle, FaArrowRight } from 'react-icons/fa';
import { IoCheckmarkCircleOutline, IoSparkles } from 'react-icons/io5';
import { FiArrowUpRight } from 'react-icons/fi';

const TabelaPrecos = () => {
  return (
    <section className={estilos.secaoPrecos} id='secaoPrecos'>

      <div className={estilos.containerCabecalho}>
        <h2>Inicie uma jornada de novas possibilidades</h2>
        <p>
          Nossos planos foram desenhados para proporcionar a você
          funcionalidades completas de locomoção e tarefas diárias.
        </p>
      
        <div className={estilos.togglePlanos}>
          <span>Planos Mensais</span>
        </div>
      </div>

      {/* GRADE DE CARDS */}
      <div className={estilos.containerCards}>
        
        <article className={estilos.cartao}>
          <div className={estilos.cartaoInterno}>
            <span className={estilos.tipoPlano}>Infinity</span>
            <p className={estilos.descricaoPlano}>
              Recursos avançados com suporte 24/7, gravações e nuvem.
            </p>
            <div className={estilos.preco}>R$30,00</div>
            <ul className={estilos.listaFuncionalidades}>
              <li><FaCheckCircle className={estilos.checkRosa} /> Inclui todas funcionalidades do Origin</li>
              <li><FaCheckCircle className={estilos.checkRosa} /> Reconhecimento de placas e cédulas</li>
              <li><FaCheckCircle className={estilos.checkRosa} /> Leitura de texto</li>
              <li><FaCheckCircle className={estilos.checkRosa} /> Primeira manutenção grátis</li>
            </ul>
            <a href="#" className={`${estilos.botaoPlano} ${estilos.botaoInfinity}`}>
              Atualize para Infinity
            </a>
          </div>
        </article>

        <article className={estilos.cartaoDestacado} >
          
          <div className={estilos.headerDestacado}>
            Recomendado <IoSparkles size={16} />
          </div>

          <div className={estilos.corpoDestacado}>
            <span className={estilos.tipoPlano}>Guardian</span>
            <p className={estilos.descricaoPlano}>
              Segurança com histórico da localização e rede de apoio familiar.
            </p>
            <div className={estilos.preco}>R$60,00</div>
            
            <ul className={estilos.listaFuncionalidades}>
              <li><FaCheckCircle className={estilos.checkRoxo} /> Inclui todas funcionalidades do Origin + Infinity</li>
              <li><FaCheckCircle className={estilos.checkRoxo} /> Garantia Estendida</li>
              <li><FaCheckCircle className={estilos.checkRoxo} /> Suporte Prioritário</li>
              <li><FaCheckCircle className={estilos.checkRoxo} /> Inclusão do sistema Navis para rotas mais seguras</li>
            </ul>
            
            <a href="#" className={`${estilos.botaoPlano} ${estilos.botaoGuardian}`}>
              Assine Agora 
              <FiArrowUpRight size={18} />
            </a>
          </div>
        </article>
        <article className={estilos.cartao}>
          <div className={estilos.cartaoInterno}>
            <span className={estilos.tipoPlano}>Origin</span>
            <span className={estilos.badgeGratuito}>Gratuito</span>
            <p className={estilos.descricaoPlano}>
              Acesso gratuito com funções de acessibilidade, localização e alertas de perigo.
            </p>
            <div className={estilos.preco}>Gratuito</div>
            <ul className={estilos.listaFuncionalidades}>
              <li><IoCheckmarkCircleOutline className={estilos.checkVerdeAgua} /> Acesso a ferramentas de IA essenciais.</li>
              <li><IoCheckmarkCircleOutline className={estilos.checkVerdeAgua} /> Identificação de objetos/obstáculos</li>
              <li><IoCheckmarkCircleOutline className={estilos.checkVerdeAgua} /> Localização em tempo real</li>
              <li><IoCheckmarkCircleOutline className={estilos.checkVerdeAgua} /> Alertas e Sensores de Perigo</li>
            </ul>
            <a href="#" className={`${estilos.botaoPlano} ${estilos.botaoOrigin}`}>
              Inicie sua jornada
            </a>
          </div>
        </article>

      </div>
    </section>
  );
};

export default TabelaPrecos;