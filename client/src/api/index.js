const url = "http://localhost:5000/api/";

function getTipos(){
    return new Promise((resolve,reject)=>{
        fetch(url + "tipos").then((response) => response.json()).then((json)=>resolve(json));
    });
}

function getCondiones(){
    return new Promise((resolve,reject)=>{
        fetch(url + "condiciones").then((response) => response.json()).then((json)=>resolve(json));
    });
}

function getProductos(){
    return new Promise((resolve,reject)=>{
        fetch(url + "productos").then((response) => response.json()).then((json)=>resolve(json));
    });
}

function registrarDescuento(nuevoDescuento){
    return new Promise((resolve,reject)=>{
        fetch(url + "descuento", {
            method: 'POST',
            body: JSON.stringify({nuevoDescuento}),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
      },
      })
      .then((response) => response.json())
      .then((json) => resolve(json));
      });
}




export {getTipos,getCondiones,getProductos, registrarDescuento};