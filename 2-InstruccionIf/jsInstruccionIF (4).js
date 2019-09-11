function mostrar()
{
//tomo la edad  
var edad;
edad = document.getElementById('edad').value;
edad = parseInt(edad);

//if (edad >= 13 && edad <= 17) {
    if (!(edad < 13 || edad > 17 || isNaN(edad))) {
    
        alert("Es adolescente");
}

}//FIN DE LA FUNCIÓN