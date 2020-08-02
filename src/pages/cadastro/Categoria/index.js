/* eslint-disable linebreak-style */
/* eslint-disable react/no-array-index-key */

/* eslint-disable linebreak-style */

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import Button from '../../../components/Button';
import FormField from '../../../components/FormField';

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
        <Button>
          Cadastrar
        </Button>

      </form>
      {categorias.length === 0 && (
        <div>
          Loading...
        </div>
      )}

      <ul>
        {categorias.map((categoria, indice) => (
          <li key={`${categoria.nome}${indice}`}>
            {categoria.nome}
          </li>
        ))}
      </ul>

      <Button as={Link} className="ButtonLink" to="/">
        Home
      </Button>

    </PageDefault>
  );
};

export default CadastroCategoria;
