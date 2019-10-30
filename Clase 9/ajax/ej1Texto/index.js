window.addEventListener('load', function(){
    let boton =this.document.getElementById('btn');
    boton.addEventListener('click', traerTexto);

});

function traerTexto(){

    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){

        if(xhr.readyState == 4){
            document.getElementById('loader').innerHTML = "";
            if (xhr.status == 200){
                let info = document.getElementById('info');
                info.innerHTML = xhr.responseText;

            }
            else{
                console.warn(xhr.status + " : " + xhr.statusText);
            }
        }
        else {
            let span = document.getElementById('loader');
            span.innerHTML = "<img scr='./images/spin.gif'></img>"
        }

    }

    xhr.open('GET', './documento2.txt', true);

    xhr.send();

}

