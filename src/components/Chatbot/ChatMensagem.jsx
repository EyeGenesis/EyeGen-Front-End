import ChatbotIcon from "./ChatbotIcon";
import style from './Chatbot.module.css';

const ChatMensagem = ( { chat }) => {
    return (
        !chat.hideInChat && (
        <div className={`${style.mensagens} ${chat.role === "model" ? style.botMensagem : style.userMensagem}`}>
            {chat.role === "model" && <ChatbotIcon />}
            <p className={style.mensagemTexto}>{chat.text}</p>
        </div>
        )
    )
}

export default ChatMensagem;