/* eslint-disable linebreak-style */
/* eslint-disable react/no-array-index-key */

/* eslint-disable linebreak-style */

import React, { useState } from 'react';
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

  return (
    <PageDefault>
      <h1>
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
        <div>

          <FormField
            label="Nome da Categoria: "
            type="text"
            name="nome"
            value={values.nome}
            onChange={funcHandler}
          />

          <div>

            <FormField
              label="Descrição:"
              type="textArea"
              value={values.descricao}
              onChange={funcHandler}
            />

          </div>
          <FormField
            label="Cor: "
            type="color"
            value={values.cor}
            onChange={funcHandler}
          />
        </div>

        <Button>
          Cadastrar
        </Button>

      </form>
      <ul>
        {categorias.map((categoria, indice) => (
          <li key={`${categoria}${indice}`}>
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
