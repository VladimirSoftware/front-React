import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Header } from './components/ui/Header';
import { InventarioView } from './components/inventario/InventarioView';
import { UsuarioView } from './components/usuario/UsuarioView';
import { MarcaView } from './components/marca/MarcaView';
import { EstadoView } from './components/estado/EstadoView';
import { TipoView } from './components/tipo/TipoView';
import { InventarioUpdate } from './components/inventario/InventarioUpdate';
import { MarcaUpdate } from './components/marca/MarcaUpdate';
import { TipoUpdate } from './components/tipo/TipoUpdate';
import { EstadoUpdate } from './components/estado/EstadoUpdate';
import { UsuarioUpdate } from './components/usuario/UsuarioUpdate';


const InventarioApp = () => {
    return <Router>
       <Header />
       <Switch>
          <Route exact path="/" component={ InventarioView } />
          <Route exact path="/usuarios" component={ UsuarioView } />
          <Route exact path="/marcas" component={ MarcaView } />
          <Route exact path="/estados" component={ EstadoView } />
          <Route exact path="/tipos" component={ TipoView } />
          <Route exact path="/marcas/edit/:marcaId" component={ MarcaUpdate } />
          <Route exact path="/tipos/edit/:tipoId" component={ TipoUpdate } />
          <Route exact path="/estados/edit/:estadoId" component={ EstadoUpdate } />
          <Route exact path="/usuarios/edit/:usuarioId" component={ UsuarioUpdate } />
          <Route exact path="/inventarios/edit/:inventarioId" component={ InventarioUpdate } />
          
          <Redirect to="/" />
        </Switch>
    </Router>   
}

export {
    InventarioApp,
}