import iconInput from "../../assets/img/chatbot/iconInput.png"
import { useRef } from 'react'

const ChatInput = ({ chatHistorico, setChatHistorico, gerarRespostaBot }) => {
    const inputRef = useRef();

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const userMensagem = inputRef.current.value.trim();
        if (!userMensagem) return;
        inputRef.current.value = "";

        setChatHistorico(historico => [...historico, { role: "user", text: userMensagem }]);

        setTimeout(() => {
            setChatHistorico(historico => [...historico, { role: "model", text: "Gerando..." }]);

            gerarRespostaBot([...chatHistorico, { role: "user", text: `usando detalhes das ultimas mensagem, por favor responda essa mensagem:  ${userMensagem}` }]);
        }, 600);
    }

    return (
        <form action="#" onSubmit={handleFormSubmit}>
            <input ref={inputRef} type="text" placeholder="Qual sua dúvida?" required />
            <button><img src={iconInput} alt="icone de enviar mensagem" /></button>
        </form>
    )
}

export default ChatInput;