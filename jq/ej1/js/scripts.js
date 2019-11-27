$(function (){   //sabe que lo va a ejecutar cuando este lista la pagina

    $('#btnLeft').click(function(){
        $('#miDiv').animate({left : '-=20px'}); //adentro del animate pasamos un objeto. lo interpreta del valor que tenia left lo sobreescribimos restandole 20px
    })
    $('#btnRight').click(function(){
        $('#miDiv').animate({left : '+=700px'}, 2000, 'linear', function(){alert("llegue")}); //lo segundo es la velocidad y lo tercero el tipo de movimiento y el ultimo una funcion que haria al terminar
    })
    $('#btnUp').click(function(){
        $('#miDiv').animate({top : '-=20px'}); //sin espacios entre el igual y el valor!! sino no anda
    })
    $('#btnDown').click(function(){
        $('#miDiv').animate({top : '+=20px'}); 
    })


});