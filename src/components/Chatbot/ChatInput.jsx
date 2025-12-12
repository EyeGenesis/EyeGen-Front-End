import iconInput from "../../assets/img/chatbot/iconInput.png"
import { useRef, useState, useEffect } from 'react'
import { FaMicrophone, FaStop } from "react-icons/fa";
import style from './Chatbot.module.css'

const ChatInput = ({ chatHistorico, setChatHistorico, gerarRespostaBot }) => {
    const inputRef = useRef();
    const [ouvindo, setOuvindo] = useState(false);
    const [suportaAudio, setSuportaAudio] = useState(false);
    const recognitionRef = useRef(null);

    useEffect(() => {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

        const isOpera = navigator.userAgent.includes("OPR") || navigator.userAgent.includes("Opera");

        if (SpeechRecognition && !isOpera) {

            setSuportaAudio(true);
            recognitionRef.current = new SpeechRecognition();
            recognitionRef.current.lang = 'pt-BR';
            recognitionRef.current.continuous = false; 
            recognitionRef.current.interimResults = false;

            recognitionRef.current.onstart = () => {
                setOuvindo(true);
            };

            recognitionRef.current.onresult = (event) => {
                const transcript = event.results[0][0].transcript;
                if (inputRef.current) {
                    inputRef.current.value = transcript;
                    handleFormSubmit(null, true);
                }
                setOuvindo(false);
            };

            recognitionRef.current.onerror = (event) => {
                console.error("Erro no reconhecimento:", event.error);
                setOuvindo(false); 
            };

            recognitionRef.current.onend = () => {
                setOuvindo(false);
            };
        } else {
            setSuportaAudio(false); 
        }

        return () => {
            if (recognitionRef.current) {
                recognitionRef.current.abort();
            }
        };
    }, []);

    const toggleGravacao = () => {
        if (!recognitionRef.current) return;

        if (ouvindo) {
            recognitionRef.current.stop();
        } else {
            inputRef.current.value = "";
            recognitionRef.current.start();
        }
    };

    const handleFormSubmit = (e, isVoiceInput = false) => {
        if (e) e.preventDefault();

        const userMensagem = inputRef.current.value.trim();
        if (!userMensagem) return;

        inputRef.current.value = "";

        setChatHistorico(historico => [...historico, { role: "user", text: userMensagem }]);

        gerarRespostaBot([...chatHistorico, { role: "user", text: userMensagem }], isVoiceInput);
    }

    return (
        <form action="#" onSubmit={handleFormSubmit}>
            <input ref={inputRef} name="input" type="text" placeholder="Qual sua dúvida?" required />

            <div className={style.botoesContainer}>
                
                
                {suportaAudio && ( 
                    <button
                    type="button"
                    className={`${style.botaoMic} ${ouvindo ? style.ouvindo : ''}`}
                    onClick={toggleGravacao}
                >
                    {ouvindo ? <FaStop /> : <FaMicrophone />}
                </button>
                )}
                <button type="submit">
                    <img src={iconInput} alt="icone de enviar mensagem" />
                </button>
            </div>
        </form>
    )
}

export default ChatInput;