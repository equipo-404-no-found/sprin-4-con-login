import mongoose from "mongoose";

const url = "mongodb://localhost:27017/libreria"
//const url = "mongodb+srv://jordi:1234@cluster0.sa3x9gw.mongodb.net/libreria?retryWrites=true&w=majority"

export async function dbConection(){
    try {
    const x = await mongoose.connect(url);
        console.log("usted esta conectado: " +x.connection.name)

} catch (error) {
    console.log(error)
}

}




