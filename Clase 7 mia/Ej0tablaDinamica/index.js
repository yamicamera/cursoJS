//console.log(personas);
window.addEventListener('load', function(){
    let divTabla = document.getElementById('divTabla'); 
    let tabla = crearTabla (personas);
    divTabla.appendChild(tabla);
}) //para que se vea la tabla en el doc

function crearTabla(arr){

    let tabla = document.createElement('table');

    let encabezado = document.createElement('tr');

    for (prop in arr[0]){       //recorre todal las claves del objeto (prop es nombre inventado) va a iterar prop en la 1er iteracion va a tomar la primer variable, despues la segunda y asi. en la variable se guarda el nombre de la prop

        let th = document.createElement('th'); //creo un elemento th
        th.setAttribute('style', 'background: rgb(35, 205, 188)');
        
       
        //let texto = document.createTextNode(prop);
        //th.appendChild(texto);

        th.textContent = prop; //es lo mismo que las dos lineas comentadas  = cargar al th el valor de la propiedad
        encabezado.appendChild(th); //meto los datos en el encabezado de la tabla (inyecto el th en el tr)
    } // va a iterar o ejecutarse tantas veces como propiedades tenga el objeto

    tabla.appendChild(encabezado); //agrego la fila encabezado a la tabla

    //una vez resuelto el encabezado armo el cuerpo de la tabla
    
    for (let i=0; i < arr.length; i++){ //en cada iteracion me voy a posicionar en un elemento del array (va a iterar 25 veces)

        let fila = document.createElement('tr'); //para cada personba creo una fila
        for (prop in arr[i]){ // con este for in rercorro los atributos d ela persona
            let celda = document.createElement ('td'); //para cada atributo creo una celda
            celda.textContent = arr[i][prop]; //de la persona en donde me estoy posicionando quiero el valor de la propiedad y lo meto en la celda
            fila.appendChild(celda); //agrego a la fila la celda
            celda.setAttribute('style', 'padding:5px')
        }
        tabla.appendChild(fila); // una vez termine de rcorrer a lapersona arreglño la fila a la tabla
    }

    tabla.setAttribute('border', '1px solid black');//recibe dos parametros que atribut oy despues el valor
    tabla.setAttribute('style', 'border-collapse:collapse');
   
    return tabla; //fabrica la tabla

}

