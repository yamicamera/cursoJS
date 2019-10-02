var persona = {

    //clave valor
    nombre : "Juan", 
    apellido : "Perez",
    edad : 20,  //en la realidad dçse pone fecha de nacimiento
    direccion : {
        pais : "Argentina",
        localidad : "Avellaneda",
        domicilio : {
            calle : "Av Mitre",
            numero : 750
        }
    }
};

console.log(persona.nombre);  //Juan
console.log(persona['apellido']); //Perez
console.log(persona.altura);

console.log(persona.direccion.pais); //Argentina
console.log(persona.direccion.domicilio.calle); // Av Mitre

console.log( persona['direccion']);
console.log(persona['direccion']['domicilio']['calle']);

var x = "edad";
console.log (persona[x]);

for (prop in persona){
    console.log(prop);
}

for (prop in persona){
    console.log(prop+ ":" + persona[prop]);
}

for (prop in persona.direccion){
    console.log(prop+ ":" + persona.direccion[prop]);
}

for (prop in persona.direccion.domicilio){
    console.log(prop+ ":" + persona.direccion.domicilio[prop]);
}