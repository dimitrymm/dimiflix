

const URL_BACKEND = window.location.hostname.includes('localhost')
  ? 'http://localhost:8080/categorias'
  : 'https://dimiflix.herokuapp.com/categorias';


  export default {
      URL_BACKEND,
  };
