import React, { useState } from 'react';
import estilos from './CentralAjuda.module.css';
import { FaChevronDown } from 'react-icons/fa';
import retanguloTransicao from "../../../assets/suporte-transition2.png";

const faqItems = [
  {
    id: 1,
    title: 'Inteligência Artificial',
    subItems: [
      {
        id: 101,
        question: 'O que o EyeGlass pode fazer?',
        answer: 'Resposta: Ele é o seu guia, garante que a sua locomoção seja segura e eficiente, identifica pessoas e descreve o ambiente. Além disso ele é seu companheiro podendo te ajudar em tarefas diárias como leitura de textos, facilitação da utilização de transporte público, entre outros.'
      },
      {
        id: 102,
        question: 'O EyeGlass precisa de internet para funcionar?',
        answer: 'Resposta: Sim, pois ele exige do processamento em nuvem, gps entre outras funcionalidades essenciais.'
      },
      {
        id: 103,
        question: 'E se o EyeGlass me der uma instrução errada?',
        answer: 'Resposta: O nosso assistente foi desenvolvido para te levar com segurança aonde você quiser, porém se ele der alguma instrução te guiando para outro caminho, o próprio EyeGlass vai corrigir seu próprio erro e logo retornará para a rota desejada.'
      },
      {
        id: 104,
        question: 'A IA é personalizável?',
        answer: 'Resposta: Sim você pode escolher entre respostas curtas ou detalhadas, além disso estamos trabalhando para que o contato com o EyeGlass seja o mais humanizado possível, para garantir conforto e confiabilidade para você.'
      },
    ]
  },
  {
    id: 2,
    title: 'Bateria e Carregamento',
    subItems: [
      {
        id: 201,
        question: 'Qual a duração da bateria?',
        answer: 'Resposta: A duração é de 6 a 12 horas.'
      },
      {
        id: 202,
        question: 'Como sei que o EyeGlass está carregando?',
        answer: 'Resposta: Ao conectar o carregador, você ouvirá o som "Carregando" e o LED lateral ficará vermelho. Quando totalmente carregado, o LED muda para verde.'
      },
      {
        id: 203,
        question: 'O que fazer se o dispositivo não ligar?',
        answer: 'Resposta: Verifique se o cabo está conectado corretamente. Se ainda não ligar, mantenha o botão pressionado por 10 segundos para forçar a reinicialização.'
      },
    ]
  },
  {
    id: 3,
    title: 'Conectividade',
    subItems: [
      {
        id: 301,
        question: 'Como conectar o EyeGlass ao WI-FI?',
        answer: 'Resposta: Primeiro você deve abrir o aplicativo EyeGen e ir até a opção "Conectar na mesma rede WI-FI". Após isso, você deve seguir as instruções, quando o EyeGlass for conectado, o óculos emitirá uma mensagem de sucesso e uma leve vibração.'
      },
      {
        id: 302,
        question: 'Como emparelhar o EyeGlass com o aplicativo EyeGen?',
        answer: 'Resposta: Ative o bluetooth no EyeGlass e EyeGen. No aplicativo, navegue até a opção "Conectar um novo óculos", e siga o passo a passo no app.'
      },
      {
        id: 303,
        question: 'O EyeGlass funciona sem internet?',
        answer: 'Resposta: Para todas as funcionalidades, sim, porém funciona em atividades báscias, como saber nível de bateria ou leitura de textos. Além da internet, é crucial garantir a conexão com o aplicativo.'
      },
    ]
  },
  {
    id: 4,
    title: 'Suporte e Garantia',
    subItems: [
      {
        id: 401,
        question: 'Como acionar a garantia?',
        answer: 'Resposta: Envie um e-mail para suporte_eyegen@gmail.com informando o código do produto. Nossa equipe responderá com as instruções de envio e reparo.'
      },
      {
        id: 402,
        question: 'Qual o prazo de garantia do EyeGlass?',
        answer: 'Resposta: A garantia é de 12 meses a partir da data de compra, cobrindo defeitos de fabricação.'
      },
      {
        id: 403,
        question: 'Onde encontro assistência técnica?',
        answer: 'Resposta: Converse com a nossa equipe de suporte técnico, eles te encaminharão a lista de centros autorizados da EyeGen.'
      },
    ]
  },
  {
    id: 5,
    title: 'Comandos de Voz',
    subItems: [
      {
        id: 501,
        question: 'Como posso ativar o assistente do EyeGlass?',
        answer: 'Resposta: Conecte o EyeGlass com o aplicativo EyeGen, aperte no botão localizado na lateral esquerda do óculos. Agora é só dar o comando "Olá, EG!"'
      },
      {
        id: 502,
        question: 'Quais comandos o EyeGlass reconhece?',
        answer: 'Resposta: Ele reconhece comandos sobre o ambiente como por exemplo: "Descreva o ambiente ao meu redor?" ou "Tem alguém comigo neste local?". Além disso, reconhece perguntas básicas como "O que está escrito aqui?", "Quem é essa pessoa?", "Qual o nível da bateria?", "Me leve até o mercado mais próximo", entre outros.'
      },
      {
        id: 503,
        question: 'O que fazer se o EyeGlass não reconhecer a minha voz?',
        answer: 'Resposta: Verifique se o óculos está conectado ao app ou à internet. Além do mais, certifique-se de que o microfone esteja funcionando corretamente fazendo testes de voz pelo app.'
      },
      {
        id: 504,
        question: 'E se o EyeGlass não reconhecer o meu comando?',
        answer: 'Resposta: Reformule o comando sendo mais objetivo para que a inteligência artificial processar a pergunta ou comando corretamente.'
      },
    ]
  },
];

const CentralAjuda = () => {
  const [openItem, setOpenItem] = useState(null);

  const handleToggle = (id) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <section className={estilos.secaoAjuda}>
      <div className={estilos.containerCabecalho}>
        <h2>Central de ajuda</h2>
        <p>
          Aqui você conhece as principais perguntas sobre as
          funcionalidades do EyeGen
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