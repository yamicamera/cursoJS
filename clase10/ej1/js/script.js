window.addEventListener('load', function(){

    let form = this.document.forms[0];
    form.addEventListener('submit', function(e){
        e.preventDefault(); //evitamos que pase los datos por get y armamos nuestra propia funcion

        enviarDatos();
    });

});

function enviarDatos(){
    let info = document.getElementById('info');
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if( xhr.readyState == 4){

            if (xhr.status == 200){
                info.innerText = xhr.responseText;
            } 
            else {
                info.innerText = xhr.status + ' : ' + xhr.statusText;
            }

        }
        else {

            info.appendChild(crearSpinner());

        }
    }

    xhr.open('GET', 'pagina1.php' + traerDatos());
    xhr.send();
  

}


function traerDatos (){
    let nombre = document.getElementById('txtNombre').value;
    let edad = document.getElementById('txtEdad').value;

    return '?nombre=' + nombre + '&edad=' + edad;
}

function crearSpinner(){
    let spinner = document.createElement('img');
    spinner.setAttribute('src', './imagenes/spinner.gif');
    return spinner;
}