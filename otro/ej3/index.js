function Persona (nombre, apellido, edad){

this.nombre = nombre;
this.apellido = apellido;
this.edad = edad;

}
Persona.prototype.saludar = function saludar(){
    console.log("Hola, soy " + this.nombre + " " + this.apellido);
}

var x = new Persona("Juan", "Perez", 23);
var y = new Persona("Lucia", "Garcia", 30);
var z = new Persona("Andrea", "Vazquez", 31);

console.log(x);
console.log(y);

// x.genero = "Masculino";
Persona.prototype.genero = 20;
console.log(x);
console.log(y);
console.log(z);

x.saludar();
y.saludar();