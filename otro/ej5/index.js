
let listaPersonas = [];

function Persona(nombre, apellido, edad, genero, maneja, nada, bici, pais){
    this.nombre = nombre;
}

window.addEventListener('load', function(){
    // var frm = document.getElementById('frmPersona')
   // var frm = document.getElementsByTagName('form')[0];
   var frm = document.forms[0];
   console.log(frm);
   frm.addEventListener('submit', manejarSubmit);

}); //anonima aca adentro porque solo se ejecuta una vez

function manejarSubmit(e){

    e.preventDefault();
    var frm = e.target;
    //alert("Capture el evento submit");
    //aca voy a crear una persona

    var nuevaPersona = new Persona();
    listaPersona.push(nuevaPersona);

}