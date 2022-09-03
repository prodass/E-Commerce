import mongoose from "mongoose";

const promocionSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    codigo:{
        type: String,
        required: [true,"Please chech your data entry, no id especified!"]
    },
    descripcion:{
        type: String,
        required: [true,"Please chech your data entry, no descripcion especified!"]
    },
    fechaInicio:{
        type: mongoose.Schema.Types.Date
    },
    fechaFin:{
        type: mongoose.Schema.Types.Date
    },
    productos:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "productos"
    }],
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
    },
    condicion:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "condicion"
    }
});

const Promocion = mongoose.model("promocion",promocionSchema);


export default Promocion;