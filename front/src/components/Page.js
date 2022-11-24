import App from "App";
import React from "react";
import { Switch, Route} from "react-router-dom";
import { List } from "reactstrap";
import Inicio from "./page/inicio";
import { ProductosList } from "./page/productos";
import { ProductosDetalles } from "./page/productos/ProductosDetalles";
import admin from "./backend/Lista";
export default function Page() {
  return (
    <section>
      <Switch>
				<Route path="/" exact component={Inicio} />
				<Route path="/productos" exact component={ProductosList} />
        <Route path="/producto/:id" exact component={ProductosDetalles} />
        <Route path="/backend" exact component={admin} />
			</Switch>
    </section>
  );
}
