import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Header } from './components/ui/Header';
import { InventarioView } from './components/inventario/InventarioView';
import { UsuarioView } from './components/usuario/UsuarioView';
import { MarcaView } from './components/marca/MarcaView';
import { EstadoView } from './components/estado/EstadoView';
import { TipoView } from './components/tipo/TipoView';
import { InventarioUpdate } from './components/inventario/InventarioUpdate';


const InventarioApp = () => {
    return <Router>
       <Header />
       <Switch>
          <Route exact path="/" component={ InventarioView } />
          <Route exact path="/usuarios" component={ UsuarioView } />
          <Route exact path="/marcas" component={ MarcaView } />
          <Route exact path="/estados" component={ EstadoView } />
          <Route exact path="/tipos" component={ TipoView } />
          <Route exact path="/inventarios/edit/:inventarioId" component={ InventarioUpdate } />
          
          <Redirect to="/" />
        </Switch>
    </Router>   
}

export {
    InventarioApp,
}