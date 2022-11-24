import React, {useContext,useEffect,useState} from 'react'
import { DataContext } from "context/DataProvider";
import { ProductoItem } from "./ProductoItem";
import { getProductos } from "./../../../api/apiProductos.js";
export const ProductosList = () => {
	//const value = useContext(DataContext)
	//const [productos] = value.productos;
	const [productos,setProductos] = useState([]);
	useEffect(()=>{

        try{

            const getdata = async ()=>{

                const data = await getProductos();
				console.log("esta es la data ",data)
                setProductos(data)    

            }

            getdata()

        }catch(error){

            console.log("ups a ocurrido uun error",error)

        }

    },[])


	return (
		
			<>
			<h1 className="produ">PRODUCTOS</h1>
        <div className="productos">
            {
							productos.map(producto =>(
								<ProductoItem 
									key={producto.id}
									title={producto.title}
									image={producto.image}
									category={producto.category}
									price={producto.price}
									id={producto.id}
								/>
							))
						}					
        </div>
				</>
    )
}
