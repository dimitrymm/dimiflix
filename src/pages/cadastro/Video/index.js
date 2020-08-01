import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import Button from '../../../components/Button';
import BannerMain from '../../../components/BannerMain';
import dadosIniciais from '../../../data/dados_iniciais.json';

const CadastroVideo = () => (
  <PageDefault>
    <h1 style={{textAlign:"center"}}>Pagina de Cadastro</h1>
    <Button as={Link} className="ButtonLink" to="/">
      Home
    </Button>
    <Button as={Link} className="ButtonLink" to="/cadastro/categoria">
      Cadastro Categoria
    </Button>
    <BannerMain
      videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
      url={dadosIniciais.categorias[0].videos[0].url}
      videoDescription=""
    />

  </PageDefault>
);

export default CadastroVideo;
