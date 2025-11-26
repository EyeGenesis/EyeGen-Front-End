import style from './Chatbot.module.css'
import perfilGeny from '../../assets/img/nav/perfil_geny.png';
import { FaArrowCircleDown } from "react-icons/fa";
import ChatInput from './ChatInput';
import { useState, useRef, useEffect } from 'react';
import ChatbotIcon from './ChatbotIcon';
import ChatMensagem from './ChatMensagem';
import { eyegenInfo } from '../eyegenInfo';



const Chatbot = () => {

    const [chatHistorico, setChatHistorico] = useState([{
        hideInChat: true,
        role: "model",
        text: eyegenInfo
    }]);
    const [mostrarChatbot, setMostrarChatbot] = useState(false);
    const chatBodyRef = useRef();

    const falarTexto = (texto) => {
        if (!('speechSynthesis' in window)) return;


        window.speechSynthesis.cancel();


        const textoLimpo = texto.replace(/[*#_]/g, '');

        const utterance = new SpeechSynthesisUtterance(textoLimpo);
        utterance.lang = 'pt-BR';
        

        const voices = window.speechSynthesis.getVoices();
        const vozPreferida = voices.find(v => v.lang === 'pt-BR' && (v.name.includes('Google') || v.name.includes('Female'))) || voices[0];
        if(vozPreferida) utterance.voice = vozPreferida;

        utterance.rate = 1.1; 
        utterance.pitch = 1.1; 

        window.speechSynthesis.speak(utterance);
    };


    useEffect(() => {
        window.speechSynthesis.getVoices();
    }, []);

    const gerarRespostaBot = async (historico, responderPorVoz = false) => {

        const updateHistorico = (text, isError = false) => {

            setChatHistorico(prev => [...prev.filter(msg => msg.text !== "Gerando..."), { role: "model", text, isError }]);
        }

        historico = historico.map(({ role, text }) => ({ role, parts: [{ text }] }));

        const requestOptions = {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({ contents: historico })
        }

        try {

            const response = await fetch('/api/chat', requestOptions);
            const data = await response.json();
            if (!response.ok) throw new Error(data.error.message || "Algo deu Errado!");

            const apiRespostaTexto = data.candidates[0].content.parts[0].text.replace(/\*\*(.*?)\*\*/g, "$1").trim();
            updateHistorico(apiRespostaTexto);

            if (responderPorVoz) {
                falarTexto(apiRespostaTexto);
            }

        } catch (error) {
            const msgErro = "Desculpe, tive um problema técnico.";
            updateHistorico(msgErro, true);
            if (responderPorVoz) {
                falarTexto(msgErro);
            }
        }
    }

    useEffect(() => {
        chatBodyRef.current.scrollTo({ top: chatBodyRef.current.scrollHeight, behavior: "smooth" })
    }, [chatHistorico])

    return (

        <section className={style.chat}>
            <button onClick={() => setMostrarChatbot(prev => !prev)} id="chatbot-toggler" className={style.toggle}>
                <span><ChatbotIcon />
                </span>
            </button>
            <div className={`${style.popup} ${mostrarChatbot ? style.showChatbot : ''}`}>
                <div className={style.chatHeader}>
                    <div className={style.headerInfo}>
                        <div className={style.geny}>
                            <ChatbotIcon />
                            <h2>Converse com a <span>GENY!!</span></h2>
                        </div>
                        <button><FaArrowCircleDown /></button>
                    </div>
                </div>

                <div ref={chatBodyRef} className={style.chatBody}>

                    <div className={`${style.mensagens} ${style['botMensagem']}`}>
                        <img src={perfilGeny} alt="foto de perfil de uma cão guia da raça golden retriver usando um oculos" />
                        <p className={style.mensagemTexto}>Oi, tudo bem? sou a Geny sua aumiga que vai te guiar em nossa plataforma, como posso te ajudar?</p>
                    </div>

                    {chatHistorico.map((chat, index) => (
                        <ChatMensagem key={index} chat={chat} />
                    ))}
                </div>

                <div className={style.chatInput}>
                    <ChatInput chatHistorico={chatHistorico} setChatHistorico={setChatHistorico} gerarRespostaBot={gerarRespostaBot} />
                </div>

            </div>
        </section>
    );
};

export default Chatbot;