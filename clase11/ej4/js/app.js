

$(document).ready(function(){
$('#btn1').click(function(){
    cambiarTexto();
});
$('#btn2').click(function(){
    mostrarTexto();
});
$('#btn3').click(function(){
    //$('p').text('Hola jquery');

    let parrafos = document.getElementsByTagName('p');
    for (let i=0; i < parrafos.length; i++){
        parrafos[i].textContent = "Chau jQuery";
    }

});

   


});

function cambiarTexto(){
$('h1').text('Hola jquery');     //es lo mismo que decir document.getelementbytagname + textcontent (funciona como getter)

}
function mostrarTexto(){
   console.log( $('h1').text()); //si yo llamo a text y no lepongo nada me devuelve el texto que esta en h1 si le pongo algo lo reemplaza (funciona como stter)
}