import React from "react";
import {Routes, Route} from "react-router-dom";

import Home from "./Home/Home";
import NXM from "./Promociones/NXM/NxM";
import Descuento from "./Promociones/Descuento/Descuento";
import Codigo from "./Promociones/Codigo/Codigo";

function App(){
    return (<Routes>
        <Route path = "/" element = {<Home />}/>
        <Route path = "/nxm" element = {<NXM />} />
        <Route path = "/descuento" element = {<Descuento />} />
        <Route path = "/codigo" element = {<Codigo />} />
    </Routes>);
}

export default App;