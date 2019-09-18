function mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero;

	for(var i=0; i < 5; i++) {
		numero = parseInt( prompt("Ingrese un número"));
	
		//acumulador = acumuador + numero;
		acumulador += numero;

	}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN

// var x = 10;
//foo();
//function foo() {
//	var = 20;
//	console.log(x);
//}
//console.log(x);
// me graba primero el 20 y despues el 10
