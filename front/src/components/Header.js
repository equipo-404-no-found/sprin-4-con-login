import React, { useContext} from "react";
import { DataContext } from "context/DataProvider";
import { Link } from "react-router-dom";
import LIBRO from "images/libro.jpg";
import estilos from "./backend/estilos.css";
export const Header = () => {
  const value = useContext(DataContext);
  const [carrito] = value.carrito;
  const [menu, setMenu] = value.menu;


  const toogleMenu = () =>{
    setMenu(!menu)
  }
 

  return (
    <>
    
    <header>
      <div className="menu">
      <box-icon name="menu"></box-icon>
      </div>
      <Link  to="/">
      <div className="logo">
        <img src={LIBRO} alt="Nike" width="150" />
      </div>
      </Link>
      <ul>
        <li>
          <Link className="algo" to="/">INICIO</Link>
        </li>
        <li>
          <Link className="algo2" to="/productos">PRODUCTOS</Link>
        </li>
        <li>
          <Link className="algo3" to="/backend">LISTA DE LIBROS</Link>
        </li>
      </ul>
      <div className="cart" onClick={toogleMenu}>
        <box-icon name="cart"></box-icon>
        <span className="item__total"> {carrito.length} </span>
      </div>
    </header>
    </>
  );
};
