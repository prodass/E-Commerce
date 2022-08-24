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
    tipo:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "tipos"
    },
    subTipo:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "subTipos"
    }
});

const Promocion = mongoose.model("promocion",promocionSchema);


export default Promocion;