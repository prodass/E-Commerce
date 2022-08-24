import mongoose from "mongoose";

const subTipoSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    codigo:{
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
        type:Number,
        required:[true,"Please chech your data entry, no descuento especified!"],
        min: 0,
        max: 1
    },
    tipo:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "tipos"
    }
});

const SubTipo = mongoose.model("subTipo",subTipoSchema);


export default SubTipo;