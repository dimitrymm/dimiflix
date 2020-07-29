import React from 'react'
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import Button from '../../../components/Button';

const CadastroVideo = () => {
    return (
        <PageDefault>
            <h1>Pagina de Cadastro</h1>
            <Button as={Link} className='ButtonLink' to='/'>
                Home
            </Button>
            <Button as={Link} className='ButtonLink' to='/cadastro/categoria'>
                Cadastro Categoria
            </Button>
            

        </PageDefault>
    );
}

export default CadastroVideo;