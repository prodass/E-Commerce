import mongoose from "mongoose";

const subTipoSchema = new mongoose.Schema({
    id:{
        type: String,
        required: [true,"Please chech your data entry, no id especified!"]
    },
    descripcion:{
        type: String,
        required: [true,"Please chech your data entry, no description especified!"]
    },
    valor:{
        type:String,
        required:[true,"Please chech your data entry, no valor especified!"]
    },
    descuento:{
        type:number,
        required:[true,"Please chech your data entry, no descuento especified!"],
        min: 0,
        max: 1
    }
});

const subTipo = mongoose.model("subTipo",subTipoSchema);


export default subTipo;