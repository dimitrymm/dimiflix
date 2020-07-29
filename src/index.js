import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/Home/App';
import CadastroVideo from './pages/cadastro/Video';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CadastroCategoria from './pages/cadastro/Categoria';

const Pagina404 = () => (<div>Pagina 404!</div>);




ReactDOM.render(
  //<React.StrictMode>
  // <App />
  //</React.StrictMode>,

  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact />
      <Route path="/cadastro/video" component={CadastroVideo} exact />
      <Route path="/cadastro/categoria" component={CadastroCategoria} exact />
      <Route component={Pagina404} exact />
    </Switch>
  </BrowserRouter>,


  document.getElementById('root')
);


