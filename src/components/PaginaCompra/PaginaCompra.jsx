import styles from './PaginaCompra.module.css';
import BotaoVoltar from './BotaoVoltar/BotaoVoltar';
import ImagemProduto from './ImagemProduto/ImagemProduto';
import DetalhesProduto from './DetalhesProduto/DetalhesProduto';
import SeletorCor from './SeletorCor/SeletorCor';
import ControleQuantidade from './ControleQuantidade/ControleQuantidade';
import MetodosPagamento from './MetodosPagamento/MetodosPagamento';
/* import BotoesAcao from './BotoesAcao/BotoesAcao'; */

import ImagemOculosUm from '../../assets/img/ImagemOculosUm.png';
import ImagemOculosDois from '../../assets/img/ImagemOculosDois.png';
import ImagemOculosTres from '../../assets/img/ImagemOculosTres.png';
import ImagemOculosQuatro from '../../assets/img/ImagemOculosQuatro.png';

export default function PaginaCompra() {
  // Dados do produto
  const produto = {
    nome: 'EYEGlass',
    descricao: 'Óculos inteligente de assistência visual, focado em aumentar a segurança e a autonomia do usuário',
    preco: 2000.00,
    avaliacoes: 193,
    estrelas: 4.5,
    imagens: [
        ImagemOculosUm,
        ImagemOculosDois,
        ImagemOculosTres,
        ImagemOculosQuatro
    ],
    cores: [
      { id: 1, nome: 'Azul', valor: '#00BCD4' },
      { id: 2, nome: 'Rosa', valor: '#E91E63' },
      { id: 3, nome: 'Branco', valor: '#FFFFFF' },
      { id: 4, nome: 'Roxo', valor: '#9C27B0' },
      { id: 5, nome: 'Verde Limão', valor: '#CDDC39' }
    ]
  };

  const voltar = () => {
    console.log('Voltar');
    // window.history.back() ou useNavigate do react-router
  };

  return (
    <main>
      <section className={styles.paginaCompra}>
        
        <BotaoVoltar onVoltar={voltar} />

        <div className={styles.container}>
          
          <div className={styles.ladoEsquerdo}>
            <ImagemProduto imagens={produto.imagens} />
          </div>

          <div className={styles.ladoDireito}>
            { <DetalhesProduto 
              nome={produto.nome}
              descricao={produto.descricao}
              preco={produto.preco}
              avaliacoes={produto.avaliacoes}
              estrelas={produto.estrelas}
            /> }
            
            { <SeletorCor 
              cores={produto.cores}
            /> }
            
            { <ControleQuantidade /> }
            { <MetodosPagamento /> }
            
          </div>

        </div>

      </section>
    </main>
  );
}