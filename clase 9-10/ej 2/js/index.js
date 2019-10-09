//let div = document.getElementsByTagName('div');
//console.log(div[0]);
let div = document.getElementById('miDiv');
let hijos = div.children;
//let primerHijo = div.firstChild

//hijos[0].style.backgroundColor = "red";
let p1 = document.getElementById('p1');
//console.log(hijos);
let padre = p1.parentNode;
console.log(padre);

//let titulo = document.getElementById('titulo'); es igual a la de abajo
let titulo = document.getElementsByTagName('h1')[0];
//console.log (titulo);

// let hermano = titulo.nextElementSibling.nextElementSibling; es igual a lo de abajo
let hermano = titulo
              .nextElementSibling
              .nextElementSibling

// console.log (hermano);

let body = document.body;
let ultimoHijo = body.lastElementChild;
console.log(ultimoHijo);
let h2 = ultimoHijo.previousElementSibling;

console.log(h2);
console.log(div.hasChildNodes());

//crear nuevo elemento con js en un html de manera correcta

let enlace = document.createElement('a');
let texto = document.createTextNode('Ir a Clarin');
enlace.appendChild(texto);
enlace.setAttribute('href', 'http://clarin.com');
enlace.setAttribute('target', '_blank');

let divEnlace = document.getElementById('enlace');
divEnlace.appendChild(enlace);

let enlace2 = "<a href='http://lanacion.com> Ir a la nacion </a>"
divEnlace.innerHTML = enlace2;