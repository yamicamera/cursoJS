function mostrar()
{
//tomo la edad  
var edad;
edad = document.getElementById('edad').value;
edad = parseInt(edad);

console.log(typeof edad);
if (edad == 15) {
    alert("Niña bonita");
}

}//FIN DE LA FUNCIÓN