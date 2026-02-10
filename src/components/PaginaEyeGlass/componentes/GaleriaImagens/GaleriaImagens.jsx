import { useState } from 'react';
import styles from './GaleriaImagens.module.css';
import ImagemOculosUm from './../../../../assets/img/ImagemOculosUm.png'
import ImagemOculosSete from '../../../../assets/img/ImagemOculosSete.png'
import ImagemOculosOito from '../../../../assets/img/ImagemOculosOito.png'
import ImagemOculosCinco from '../../../../assets/img/ImagemOculosCinco.png'

export default function GaleriaImagens() {

  const imagens = [
    ImagemOculosUm,
    ImagemOculosSete,
    ImagemOculosOito,
    ImagemOculosCinco
  ];

  const [selecionada, setSelecionada] = useState(0);

  return (
    <div className={styles['area-imagem']}>

      {/* Imagem princiapl */}
      <div className={styles['imagem-destaque']}>
        <img
          src={imagens[selecionada]}
          alt="EyeGlass - imagem selecionada"
        />
      </div>

      {/* MINIATURAS */}
      <div className={styles['lista-miniaturas']}>
        {imagens.map((img, index) => (
          <div
            key={index}
            className={`${styles.miniatura} ${
              selecionada === index ? styles['miniatura-selecionada'] : ""
            }`}
            onClick={() => setSelecionada(index)}
          >
            <img src={img} alt={`Miniatura ${index + 1}`} />
          </div>
        ))}
      </div>

    </div>
  );
}
