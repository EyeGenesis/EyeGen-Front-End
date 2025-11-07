import style from './Home.module.css';
import Hero from './Hero/Hero'
import Seguranca from './Seguranca/Seguranca'

export default function Home() {

    return (
        <main>
            <section className={style.home}>
                <Hero />
                <div className={style.eyegen_ajuda}>
                    <h1>Como EYEGEN <br /> me ajuda?</h1>
                </div>
                <Seguranca />
            </section>
        </main>
    )


}