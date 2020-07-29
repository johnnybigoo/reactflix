import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home'; 
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CadastroVideo from './pages/cadastro/Video'; 
import CadastroCategoria from './pages/cadastro/Categoria'; 

const Error404 = () => (<div>Oops error 404! Not found</div>)

ReactDOM.render(
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/cadastro/video" component={CadastroVideo} />
        <Route path="/cadastro/categoria" component={CadastroCategoria} />
        <Route component={Error404} />
      </Switch>
    </BrowserRouter>,
  document.getElementById('root')
);


