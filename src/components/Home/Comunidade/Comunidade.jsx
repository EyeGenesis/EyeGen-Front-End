import React from 'react';
import estilos from './Comunidade.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import { FaArrowRight, FaStar } from 'react-icons/fa';
import avatar1 from '../../../assets/avatar1.png';
import avatar2 from '../../../assets/avatar2.png';
import avatar3 from '../../../assets/avatar3.png';
import avatar4 from '../../../assets/avatar4.png';
import avatar5 from '../../../assets/avatar5.png';

const depoimentos = [
  {
    id: 1,
    avatar: avatar1,
    citacao: "O Eye Glass é minha nova liberdade. Reconhecimento de objetos e GPS proporcionam total confiança e autonomia para sair na rua.",
    nome: "Lucas P.",
    local: "Belo Horizonte",
    nota: "10/10"
  },
  {
    id: 2,
    avatar: avatar2,
    citacao: "Tecnologia que funciona! Preciso de alerta e do GPS. Um divisor de águas para fazer o trajeto do trabalho e explorar novos caminhos.",
    nome: "Ricardo A.",
    local: "São Paulo",
    nota: "10/10"
  },
  {
    id: 3,
    avatar: avatar3,
    citacao: "A melhor invenção para a baixa visão. Sistema intuitivo, fácil de usar e que devolve a segurança e a independência que eu não sentia há anos.",
    nome: "Pedro B.",
    local: "Curitiba",
    nota: "10/10"
  },
  {
    id: 4,
    avatar: avatar4,
    citacao: "Me deu asas! Resolvo minha vida com total independência, para aprender e me divertir. A tecnologia é leve, discreta e valoriza nossa dignidade.",
    nome: "Marina R.",
    local: "Brasília",
    nota: "10/10"
  },
  {
    id: 5,
    avatar: avatar5,
    citacao: "Essencial para quem tem pouca visão. O óculos é robusto, e a tecnologia vê o que está à frente, permitindo desviar de obstáculos com rapidez.",
    nome: "Gabriel S.",
    local: "Rio de Janeiro",
    nota: "10/10"
  },
];

const Comunidade = () => {
  return (
    <>
    <section className={estilos.secaoTitulo}>
        <h2>Nossa Comunidade</h2>
        <p>Experimente o Eyegen e compartilhe da mesma emoção</p>
        <a href="#" className={estilos.botaoFazerParte}>
          Desejo Fazer Parte <FaArrowRight size={14} />
        </a>
    </section>
      <section className={estilos.secaoCarrossel}>
        <h3>Experiências reais com o Eyegen</h3>
        
        <Swiper
          modules={[FreeMode]}
          className={estilos.swiperContainer}
          spaceBetween={20}
          slidesPerView={'auto'}
          freeMode={true}
        >
          {depoimentos.map((depoimento) => (
            <SwiperSlide key={depoimento.id} className={estilos.swiperSlide}>
              
              <article className={estilos.cartao}>
                <div className={estilos.topoCartao}>
                  <img src={depoimento.avatar} alt={`Avatar de ${depoimento.nome}`} className={estilos.avatar} />
                  <blockquote className={estilos.citacao}>
                    "{depoimento.citacao}"
                  </blockquote>
                </div>
                <footer className={estilos.infoAutor}>
                  <span className={estilos.nome}>{depoimento.nome}</span>
                  <span className={estilos.local}>{depoimento.local}</span>
                  <span className={estilos.nota}>
                    {depoimento.nota} <FaStar color="#ffc107" />
                  </span>
                </footer>
              </article>

            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
};

export default Comunidade;