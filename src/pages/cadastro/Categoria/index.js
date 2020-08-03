/* eslint-disable linebreak-style */
/* eslint-disable react/no-array-index-key */

/* eslint-disable linebreak-style */

import React, { useState, useEffect } from 'react';
/* import { Link } from 'react-router-dom'; */
import styled from 'styled-components';
import PageDefault from '../../../components/PageDefault';
import Button from '../../../components/Button';
import FormField from '../../../components/FormField';

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
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  const setValue = (chave, valor) => {
    setValues({
      ...values,
      [chave]: valor, // nome: 'valor'
    });
  };

  function funcHandler(infoEvent) {
    setValue(
      infoEvent.target.getAttribute('name'),
      infoEvent.target.value,
    );
  }

  useEffect(() => {
    console.log('Teste USe Effect');

    const URL = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://dimiflix.herokuapp.com/categorias';

    fetch(URL).then(async (respostaDoServidor) => {
      const resposta = await respostaDoServidor.json();
      setCategorias([
        ...resposta,
      ]);
    });

    /* setTimeout(() => {
      setCategorias([
        ...categorias,
        {
          id: 1,
          nome: 'Front End',
          descricao: 'Uma Categoria',
          cor: 'cbd1ff',
        },
        {
          id: 2,
          nome: 'Back End',
          descricao: 'Uma Categoria',
          cor: 'cbd3ff',
        },
      ]);
    }, 4 * 1000); */
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
        setValues(valoresIniciais);
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

          <React.Fragment key={`${categoria.nome}${indice}`}>
            <tr>
              <Td>{categoria.nome}</Td>
              <Td>{categoria.descricao}</Td>
            </tr>
          </React.Fragment>

        ))}

      </Table>

    </PageDefault>
  );
};

export default CadastroCategoria;
