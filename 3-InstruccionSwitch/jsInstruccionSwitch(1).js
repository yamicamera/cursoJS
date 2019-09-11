function mostrar()
{
//tomo la edad  
var mes = document.getElementById('mes').value;

switch (mes){
    case "Enero": 
    case "Febrero":
        alert("Verano");
         breack;
    case "Marzo": 
        alert("A clases");
        breack;
    case "Julio": 
        alert("Vacas");
        breack;
    case "Diciembre": 
        alert("Fiesta");
        breack;
    default:
        alert("Default");
}


}//FIN DE LA FUNCIÓN