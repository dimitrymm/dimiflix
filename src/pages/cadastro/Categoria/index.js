import React from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import Button from '../../../components/Button';

const CadastroCategoria = () => {
    return (
        <PageDefault>
            <h1>Cadastro de Categoria</h1>            
            <Button as={Link} className='ButtonLink' to='/'>
                Home
            </Button>

        </PageDefault>
    );
}

export default CadastroCategoria;