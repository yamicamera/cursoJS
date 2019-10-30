window.addEventListener('load', ()=> {

let selPaises = document.getElementById('selPaises');
let selCiudades= document.getElementById('selCiudades');

selPaises.addEventListener('change', ()=>{
    cargarSelect(selCiudades, obtenerCiudades(datos, selPaises.value));
})

cargarSelect(selPaises, obtenerPaises(datos));
cargarSelect(selCiudades, obtenerCiudades(datos, selPaises.value));


});


function cargarSelect (select, arr){

        let opcion;
        limpiarSelect(select);
        
        arr.forEach(element =>{

            opcion = document.createElement('option');
            let texto = document.createTextNode(element);
            opcion.appendChild(texto);
            opcion.setAttribute('value', element);

            select.appendChild(opcion);

        });
       
}

function obtenerPaises (arr){
    
    let paises = arr.map(elemento=> elemento.pais)
    .unique()
    .sort();

    return paises;

}

function obtenerCiudades( arr, pais){
    let ciudades = arr.filter(function(elemento){
        return elemento.pais === pais;
    })
   .map (function(elemento){

    return elemento.ciudad;

   })
   .unique()
   .sort();

   // forma resumida
   //let obtenerCiudades = (arr,pais) =>
   // return arr.filter(elemento=> elemento.pais === pais)
   // .map(elemento=> elemento.ciudad)
   //.unique()
   //.sort();
   

return ciudades;

}


Array.prototype.unique = function (){
return [... new Set(this)]; 

}

function limpiarSelect (select){

    while(select.hasChildNodes()){
        select.removeChild(select.firstElementChild);
    }
}