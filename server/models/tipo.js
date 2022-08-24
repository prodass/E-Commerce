import mongoose from "mongoose";

const tipoSchema = new mongoose.Schema({
    id:{
        type: String,
        required: [true,"Please chech your data entry, no id especified!"]
    },
    descripcion:{
        type: String,
        required: [true,"Please chech your data entry, no name especified!"]
    },
    subTipos:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "subTipos"
    }]
});

const Tipo = mongoose.model("tipo",tipoSchema);

//Prueba
const nuevoTipo = new Tipo({id:"1",descripcion:"prueba"});
nuevoTipo.save();

export default Tipo;