/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function conDescuento()
{
    var importe;
    var resultado;

    importe = parseInt(document.getElementById("importe").value);
    resultado = importe * .75

    document.getElementById("resultado").value = resultado;
}
