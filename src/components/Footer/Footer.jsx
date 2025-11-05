import style from './Footer.module.css';

export default function Footer() {

    return (

        <footer className={style.footer}>
            <h1>Fique atualizado</h1>

            <div className={style.input_email}>
                <input type="email" placeholder='Email' required />

                <button type='submit'>
                    &rarr;
                </button>
            </div>
            
            <div className={style.links}>
                <ul type="none">
                    <h2>Produtos</h2>
                    <li><a href="#">EyeGlass</a></li>
                </ul>

                <ul type="none">
                    <h2>Redes Sociais</h2>
                    <li><a href="#">X</a></li>
                    <li><a href="#">Instagram</a></li>
                    <li><a href="#">Linkedin</a></li>
                    <li><a href="#">Discord</a></li>

                </ul>

                <ul type="none">
                    <h2><a href="#">Suporte</a></h2>
                    <li><a href="#">Firmware Upgrade</a></li>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Guia de usuário</a></li>
                </ul>

                <ul type="none">
                    <h2><a href="#">Sobre</a></h2>
                    <li><a href="#">Sobre nós</a></li>
                </ul>
            </div>
        </footer>
    )

}