import  {con}  from "../models/book.js";

 function get_data(isbn){
    var query = con.find({isbn:isbn}).exec();
    return query;
 }

 export const obtenerLibro = ("/:isbn",(req,res)=>{
    let resp = get_data(req.params.isbn);
    resp.then(function(isbn){
        res.json(isbn);
    })
 });
    
    export const todosLibros = async(req,ress)=>{
        try {
            const libros = await con.find();
            ress.send(libros)
        } catch (error) {
            ress.status(500).json({mensaje: error.mensaje})
        }
    }

    export const crear_libro =  (req, res) =>{
        const {id,isbn, title, price, image, category, cantidad,descripcion} = req.body;
        const nvo_libro = new con({id:id, isbn:isbn, title:title, price:price, image:image, category:category, cantidad:cantidad, descripcion:descripcion})
        console.log(nvo_libro);
        nvo_libro.save();
        res.send("libro creado")
    }

    export const borrar_libro = async (req, res) => {
        try {
            const deleted_book = await con.findByIdAndDelete(req.params.id);
            console.log('Libro borrado');
            if (!deleted_book) {
                return res.sendStatus(404);
            } else {
                return res.sendStatus(204);
            }
    
        } catch (error) {
            return res.status(500).json({ message: error.message });
    
        }
    
    }

    export const updateProducts = async (req, res) => {
        try {
          const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
              new: true,
            }
          );
          return res.send(updatedProduct);
        } catch (error) {
          return res.status(500).json({ message: error.message });
        }
      };
    

    