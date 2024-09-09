import React from "react";
import { Link } from "react-router-dom";
import PageDefault from "../../../components/PageDefault";
import Button from "../../../components/Button";
import BannerMain from "../../../components/BannerMain";
import dadosIniciais from "../../../data/dados_iniciais.json";
import { MainText, SignMenu } from "./styles";

const CadastroVideo = () => (
    <PageDefault>
        <MainText>Pagina de Cadastro</MainText>
        <SignMenu>
            <Button as={Link} className="ButtonLink" to="/cadastro/categoria">
                Cadastro Categorias
            </Button>
        </SignMenu>
        <BannerMain
            videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
            url={dadosIniciais.categorias[0].videos[0].url}
            videoDescription=""
        />
    </PageDefault>
);

export default CadastroVideo;
