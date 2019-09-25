/* let x = 'Escritorio';

console.log( x.length);
console.log ("   silla  ".trim());

let cadena = "Ferrocarril";
console.log( "algo".toUpperCase());

console.log(cadena.indexOf("r", 4)); //empieza a contar a partir del indice 4
console.log(cadena.includes("r")); //chequea si incluye o no esa letra
console.log(cadena.startsWith("Fe")); //chequea si empieza con

let sarasa = "JKHKJH"
console.log (sarasa.toLowerCase());


let cad = "juan";
cad = cad.toUpperCase();
console.log(cad); */


// ejemplo 1
/* function modificarX ( x){
    x =x*2;
    console.log  ("aca adentro x vale" + x);
}
let x = 20;

console.log ("antes de la funcion x vale" + x);
modificarX (x);
console.log ("despues de la funcion x vale" + x); 
 */


//ejemplo 2
/* function modificarX ( x){
    x.push("Andrea");
    console.log  ("aca adentro x vale" + x);
}
let x = ["Juan", "pedro", "luis"];

console.log ("antes de la funcion x vale" + x);
modificarX (x);
console.log ("despues de la funcion x vale" + x);  */

function modificarPerro (unPerro){
    unPerro.nombre = "Colita"
    console.log  ("aca adentro el perro se llama" + nombre);
}
let perro = {
    nombre : "bobby",
edad: 3,
patas: 4,
raza: "caniche",
ladrar (){
    console.log("guau guau");
}

}

console.log ("antes de la funcion el perro se llama" + perro.nombre);



/* alert("Hola");
 function saludar ( mensaje ) {

    alert(mensaje);
}
// saludar("hola a todos");
Saludar("Chau gente");
console.log(x);
x("Hola"); */

