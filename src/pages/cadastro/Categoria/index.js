/* eslint-disable linebreak-style */
/* eslint-disable react/no-array-index-key */

/* eslint-disable linebreak-style */

import React, { useState, useEffect } from 'react';
/* import { Link } from 'react-router-dom'; */
import styled from 'styled-components';
import PageDefault from '../../../components/PageDefault';
import Button from '../../../components/Button';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';
import URL_BACKEND from '../../../config';

const Table = styled.table`
 border: 3px solid var(--white);
 border-radius:5px;
 margin:13px;
 background: #5243C7;
 padding:10px; 
 width:50%;
 height:50%;
 margin-left:auto;
 margin-right:auto;

 @media (max-width:800px){        
        width:100%;
        height:100%;
    }
 
`;
const Td = styled.td`
 border: 3px solid var(--black);
 background: #5243C7;
 color: var(--black);
 padding:10px;
 transition: opacity .3s;
  &:hover,
  &:focus {
    opacity: .3;
  }
`;
const Paragraph = styled.p`
 text-align:center;
`;
const ButtonCenter = styled(Button)`
   display:flex;
   margin-left:auto;
   margin-right:auto;
   width:50%;
   
`;

const CadastroCategoria = () => {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const { funcHandler, values, clearForm } = useForm(valoresIniciais);

  const [categorias, setCategorias] = useState([]);

  useEffect(() => {

  }, []);

  return (
    <PageDefault>
      <h1 style={{ textAlign: 'center' }}>
        Cadastro de Categoria :
        {values.nome}
      </h1>
      <form onSubmit={function handleSubmit(infoEvent) {
        infoEvent.preventDefault();

        setCategorias([
          ...categorias,
          values,
        ]);
        clearForm();
      }}
      >
        <FormField
          label="Nome da Categoria: "
          type="text"
          name="nome"
          value={values.nome}
          onChange={funcHandler}
        />
        <FormField
          label="Descrição"
          type="textArea"
          name="descricao"
          value={values.descricao}
          onChange={funcHandler}
        />
        <FormField
          label="Cor: "
          type="color"
          name="cor"
          value={values.cor}
          onChange={funcHandler}
        />
        <ButtonCenter>
          <Paragraph>Cadastrar</Paragraph>
        </ButtonCenter>

      </form>
      {categorias.length === 0 && (
        <div>
          Loading...
        </div>
      )}

      <Table>

        {categorias.map((categoria, indice) => (

          <React.Fragment key={`${categoria.titulo}${indice}`}>
            <tr>
              <Td>{categoria.titulo}</Td>
              <Td>{categoria.descricao}</Td>
            </tr>
          </React.Fragment>

        ))}

      </Table>

    </PageDefault>
  );
};

export default CadastroCategoria;
