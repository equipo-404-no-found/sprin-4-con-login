import mongoose from "mongoose";

export const con = mongoose.model("libros",{
    id: {type: Number},
    isbn: {type: String},
    title: {type: String},
    price: {type: Number},
    image: {type: String},
    category: {type: String},
    cantidad: {type: Number},
    descripcion: {type: String}
});