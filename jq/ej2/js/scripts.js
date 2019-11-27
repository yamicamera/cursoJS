$(function (){   //sabe que lo va a ejecutar cuando este lista la pagina

    $('#btnLeft').on('click', colorear);
    $('#btnLeft').on('click', agrandar);

    $('#btnRight').click(function(){
       
        $('#btnLeft').off('click', colorear); //deshabilita el boton left
    })
   
});

function colorear(){
    $('#miDiv').css('background-color', 'purple');
}

function agrandar(){
    $('#miDiv').css('font-size', '+=5px');
}