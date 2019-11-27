$(function (){   //sabe que lo va a ejecutar cuando este lista la pagina

   let persona = { nombre: 'Juan', apellido: 'Perez', edad: 30};

    $('#btnLeft').click(function(){

        $.each(persona, function(clave, valor){

            console.log(clave + " = " + valor);
        })
    })




});