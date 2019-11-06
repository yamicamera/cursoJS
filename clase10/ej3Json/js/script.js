window.addEventListener('load', function(){

    let form = this.document.forms[0];
    form.addEventListener('submit', function(e){
        e.preventDefault();

        enviarDatos();
    });

});

function enviarDatos(){
    let info = document.getElementById('info');
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if( xhr.readyState == 4){

            if (xhr.status == 200){
                let Personas = JSON.parse(xhr.responseText);
                
             while (info.hasChildNodes ()){
                 info.removeChild(info.firstChild);
             }

                info.appendChild(crearTabla(Personas));
            } 
            else {
                info.innerText = xhr.status + ' : ' + xhr.statusText;
            }

        }
        else {
           
                info.appendChild(crearSpinner());
            
        }
    }

    xhr.open('GET', 'pagina1.php');
   
    xhr.send();
  

}

function crearSpinner(){
    let spinner = document.createElement('img');
    spinner.setAttribute('src', './imagenes/spinner.gif');
    return spinner;
}

function crearTabla( arr ){

    let tabla = document.createElement('table');

    let encabezado = document.createElement('tr');


    for( prop in arr[0]){

        let th = document.createElement('th'); // creo un elemento th
       //th.setAttribute('style', 'background: rgb(35,205,188); padding: 0 20px;');
       // th.setAttribute('style', 'padding: 0 5px');

        //let texto = document.createTextNode(prop);
        //th.appendChild(texto);

         th.textContent = prop; // le cargo al th el valor de la propiedad
         encabezado.appendChild(th); // inyecto el th en el tr        
    }

    tabla.appendChild(encabezado); // agrego la fila encabezado a la tabla

    // Una vez resuelto el encabezado armo el cuerpo de la tabla
    
    for( let i=0; i < arr.length; i++){ // con este for recorro el array de personas
        let fila = document.createElement('tr'); // para cada persona creo una fila
        for( prop in arr[i]){ // con este for in recorro los atributos de la persona
            let celda = document.createElement('td');// para cada atributo creo una celda
            celda.textContent = arr[i][prop];// cargo en la celda el valor del atributo
            fila.appendChild(celda);// agrego a la fila la celda
        }
        tabla.appendChild(fila);// una vez que termine de recorrer la persona agrego la fila a la tabla
    }

   // tabla.setAttribute('class', 'table table-striped table-hover');
    tabla.className = "table table-striped";
    return tabla;

}