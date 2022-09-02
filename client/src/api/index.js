const url = "http://localhost:5000/api/";

function getTipos(){
    return new Promise((resolve,reject)=>{
        fetch(url + "tipos").then((response) => response.json()).then((json)=>resolve(json));
    });
}

function getProductos(){
    return new Promise((resolve,reject)=>{
        fetch(url + "productos").then((response) => response.json()).then((json)=>resolve(json));
    })
}





export {getTipos, getProductos};