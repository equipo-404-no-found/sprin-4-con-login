import { Router } from "express";
import  {obtenerLibro,todosLibros,crear_libro,borrar_libro,updateProducts}  from "../controllers/control.libros.js";
const router = Router();

router.get("/",(req,res)=>res.send("welcome"));
router.get("/books",todosLibros);
router.get("/:isbn",obtenerLibro);
router.post("/books",crear_libro);
router.delete("/books/:id",borrar_libro);
router.put("/books/:id",updateProducts);
export default router;