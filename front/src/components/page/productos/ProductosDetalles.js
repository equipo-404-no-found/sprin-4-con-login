import React, {useContext, useEffect, useState} from 'react'
import { DataContext } from "context/DataProvider";
import { useParams } from "react-router-dom";
import { ProductoItem } from "./ProductoItem";
import "bootstrap/dist/css/bootstrap.min.css";

export const ProductosDetalles = () => {
  const value = useContext(DataContext);
  const [productos] = value.productos;
  const addCarrito = value.addCarrito;
  const [detalle, setDetalle] = useState([])
  const [url, setUrl]= useState(0)
  const [images, setImages] = useState('')
  const params = useParams();
  let item = 0;

  useEffect(() =>{
    console.log('re render' , params.id)
    console.log("estos son los products ",productos)
    console.log("data context",value);
    item=0;
    productos.forEach(producto =>{
      if(producto.id === parseInt(params.id)){
        setDetalle(producto)
        setUrl(0)
      }
    })
  },[params.id, productos])

  console.log(url)

  useEffect(() =>{
    const values = `${detalle.img1}${url}${detalle.img2}`;
    setImages(values) 
  },[url, params.id])

  const handleInput = (e) =>{
  const number = e.target.value.toString().padStart(2,'01')
   setUrl(number)
  }

  if(detalle.length < 1) return null;

  return (
    <>
    {
        <div className="detalles">
          <h2 className='tit'>{detalle.title}</h2>
          <p className="price"> $descuentos</p>
          <div className="grid">
          <button>
            nuevo
          </button>
          </div>
          
          {
            url ? <img src={images} alt={detalle.title}/> : <img src={detalle.image} alt={detalle.title}/>
          }

          <div className="description">
          <p><b>description: </b>{detalle.descripcion}</p>
          </div>
          <table className='table'>
            <thead>
              <tr>
              <th>
                precio</th>
              <th>isbn</th>
              <th>id</th>
              <th>disponible</th>
              <th>categoria</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  ${detalle.price}
                  </td>
                  <td>
                  {detalle.isbn}
                  </td>
                  <td>
                  {detalle.id}
                  </td>
                  <td>
                    si
                  </td>
                  <td>
                    {detalle.category}
                  </td>
              </tr>
            </tbody>
          </table>
          <div>
          <button className='botons' onClick={() => addCarrito(detalle.id)}>
            Añadir al carrito
          </button>
          </div>
        </div>
   
    }
    <h2 className="relacionados">Productos relacionados</h2>
    <div className="productos">
      {
        productos.map((producto)=>{
          if((item < 6)&&(detalle.category === producto.category)){
            item++;
          return <ProductoItem 
          key={producto.id}
          title={producto.title}
          image={producto.image}
          category={producto.category}
          price={producto.price}
          id={producto.id}
          />
          }
          
        
        })
      }
     
    </div>
    </>
  )
}
