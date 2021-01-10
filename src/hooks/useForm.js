import { useState } from 'react';

const useForm = (valoresIniciais) => {
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

  const clearForm = () => {
    setValues(valoresIniciais);
  };
  return {
    values,
    funcHandler,
    clearForm,
  };
};

export default useForm;
