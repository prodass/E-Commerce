import mongoose from "mongoose";

const productoSchema = new mongoose.Schema({
    id:{
        type: String,
        required: [true,"Please chech your data entry, no id especified!"]
    },
    nombre:{
        type: String,
        required: [true,"Please chech your data entry, no name especified!"]
    }
});

const Producto = mongoose.model("producto",productoSchema);


export default Producto;
