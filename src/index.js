/* eslint-disable linebreak-style */
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Routes from "./routes";

ReactDOM.render(
    <BrowserRouter>
        <Routes />
    </BrowserRouter>,

    document.getElementById("root")
);
