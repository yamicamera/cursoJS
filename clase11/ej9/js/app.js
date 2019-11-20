

$(document).ready(function(){
    
    $('h1').mouseover(function(){

        $(this).attr('style', 'color: lightblue');//this hacemos referencia al evento es lo mismo que poner 'h1'

    });

    $('h1').mouseout(function(){

        $(this).removeAttr('style');

    });

    $('p').hover(mouseIn, mouseOut);

    $('#txtNombre').focus(function(){

        $(this).attr('value', "");

    });

    $('#txtNombre').blur(function(){
        if($(this).text() === ""){
            
            $(this).text("Buscar...");
        }

    }); 
  
});

function mouseIn(){

    $(this).css('color', 'pink'); 
}

function mouseOut(){

    $(this).css('color', 'black');
}