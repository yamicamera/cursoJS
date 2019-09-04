/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
    var sueldo;
    var nuevoSueldo;
    var aumento;

    sueldo = parseInt(document.getElementById("sueldo").value);
    aumento = sueldo * .1;
    //o se puede poner *10 / 100
    nuevoSueldo = sueldo + aumento;

    document.getElementById("resultado").value = nuevoSueldo;
	
}
