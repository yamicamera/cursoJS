

$(document).ready(function(){
    
    $('h1').mouseover(function(){

        $(this).attr('style', 'color: lightblue');//this hacemos referencia al evento es lo mismo que poner 'h1'

    });

    $('h1').mouseout(function(){

        $(this).removeAttr('style');

    });

    $('p').hover(mouseIn, mouseOut);

    $('#txtNombre').focus(function(){

        $(this).val("");

    });

    $('#txtNombre').blur(function(){
        if($('#txtNombre').val() === ""){

            $('#txtNombre').val("Buscar...");
        }
      
    }); 

    $('#btn1').click(function(){
        $('p').fadeOut("slow");
    });

    $('#btn2').click(function(){
        $('p').fadeIn("slow");
    });

    $('#btn3').click(function(){
        $('p').toggle("slow");
    });
  
});

function mouseIn(){

    $(this).css('color', 'pink'); 
}

function mouseOut(){

    $(this).css('color', 'black');
}