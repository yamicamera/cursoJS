window.addEventListener('load', inicializarManejadores) //cuando se carga la página se inician las cosas que van a poder pasar (?)

function inicializarManejadores() {
    const botton =  document.getElementById("btnCalcular");
    botton.addEventListener('click', calcularSuperficie); //cuando alguien haga click ejecutar esta función calcularSuperficie
}

// otra variable pero con funcion anonima
/* 
window.addEventListener('load', function () {
    const botton =  document.getElementById("btnCalcular");
    botton.addEventListener('click', calcularSuperficie); //cuando alguien haga click ejecutar esta función calcularSuperficie
}) 
 */


function calcularSuperficie (){
    let radio = document.getElementById('txtRadio').value;
    let superficie = Math.PI * Math.pow(radio, 2);
    document.getElementById('txtSuperficie').value = superficie.toFixed(2);

}

//ejemplo de callback --> pasarle una función a otra funcion (es lo que hace el addEventLisener)

function calcular ( operador1, operador2, callback){

    return callback( operador1, operador2);
}

function sumar (a, b) {
    return a+ b;
}

function restar (a, b) {
    return a - b;
}

function multiplicar (a, b) {
    return a * b;
}

function dividir (a, b) {
    if ( b !=0) {
        return a / b;
    }
}

let resultado = calcular (6, 7, dividir);
console.log( resultado);

