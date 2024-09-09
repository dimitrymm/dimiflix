import React from "react";
import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min";
import App from "./pages/Home/App";
import CadastroVideo from "./pages/cadastro/Video";
import CadastroCategoria from "./pages/cadastro/Categoria";

export default function Routes() {
    const Pagina404 = () => <div>Pagina 404!</div>;

    return (
        <Switch>
            <Route path="/" component={App} exact />
            <Route path="/cadastro/video" component={CadastroVideo} exact />
            <Route
                path="/cadastro/categoria"
                component={CadastroCategoria}
                exact
            />
            <Route component={Pagina404} exact />
        </Switch>
    );
}
