import React from 'react'
import { Link } from "react-router-dom";
import Portada from "images/libro2.jpg";
import leyendo from "images/leyendo.jpg";
import img2 from "images/img2.png";
import img4 from "images/img4.png";
import img5 from "images/img5.png";
import img6 from "images/img6.png";
import img7 from "images/img7.jpg";
import img8 from "images/img8.png";
import icono from "images/icono.png";

export default function Inicio() {
    return (
    <> 
        <div className="inicio"> 
            <div className='titu'>
            <section class="textos-header">
            <h1>Sistema de compra de libros</h1>
            <h2>Con una página web que encuentra los libros a los mejores precios</h2>
        </section>
            </div>
        </div>
        
        <section class="contenedor sobre-nosotros">
            <div className='titulo'> 
            <h2>Nuestro producto</h2>
            </div>
            
            <div class="contenedor-sobre-nosotros">
                <img src={Portada} alt="" class="imagen-about-us" />
                <div class="contenido-textos">
                    <h3><span>1</span>Los mejores productos</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt veniam eius aspernatur ad
                        consequuntur aperiam minima sed dicta odit numquam sapiente quam eum, architecto animi pariatur,
                        velit doloribus laboriosam ut.</p>
                    <h3><span>2</span>Los mejores productos</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt veniam eius aspernatur ad
                        consequuntur aperiam minima sed dicta odit numquam sapiente quam eum, architecto animi pariatur,
                        velit doloribus laboriosam ut.</p>
                </div>
            </div>
        </section>

        <section class="portafolio">
            <div class="contenedor">
                <h2 class="titulo">Portafolio</h2>
                <div class="galeria-port">
                    <div class="imagen-port">
                    <img src={leyendo} alt="" />
                        <div class="hover-galeria">
                        <img src={icono} alt="" />
                            <p>Nuestras ventas</p>
                        </div>
                    </div>
                    <div class="imagen-port">
                    <img src={img2} alt="" />
                        <div class="hover-galeria">
                        <img src={icono} alt="" />
                            <p>Nuestras ventas</p>
                        </div>
                    </div>
                    <div class="imagen-port">
                    <img src={img4} alt="" />
                        <div class="hover-galeria">
                        <img src={icono} alt="" />
                            <p>Nuestras ventas</p>
                        </div>
                    </div>
                    <div class="imagen-port">
                        <img src={img5} alt="" />
                        <div class="hover-galeria">
                            <img src={icono} alt="" />
                            <p>Nuestras ventas</p>
                        </div>
                    </div>
                    <div class="imagen-port">
                         <img src={img6} alt="" />
                        <div class="hover-galeria">
                            <img src={icono} alt="" />
                            <p>Nuestras ventas</p>
                        </div>
                    </div>
                    <div class="imagen-port">
                    <img src={img7} alt="" />
                        <div class="hover-galeria">
                            <img src={icono} alt="" />
                            <p>Nuestras ventas</p>
                        </div>
                    </div>
                    <div class="imagen-port">
                        <img src={img8} alt="" />
                        <div class="hover-galeria">
                        <img src={icono} alt="" />
                            <p>Nuestras ventas</p>
                        </div>
                    </div>
                    <div class="imagen-port">
                        <img src={img5} alt="" />
                        <div class="hover-galeria">
                        <img src={icono} alt="" />
                            <p>Nuestras ventas</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="clientes contenedor">
            <h2 class="titulo">Contamos con servivio al cliente</h2>
            <div class="cards">
                <div class="card">
                    <img src={img6} alt="" />
                    <div class="contenido-texto-card">
                        <h4>Name</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, sapiente!</p>
                    </div>
                </div>
                <div class="card">
                <img src={leyendo} alt="" />
                    <div class="contenido-texto-card">
                        <h4>Name</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, sapiente!</p>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
