

$(document).ready(function(){

     
    $('#btn1').click(function(){
        $('th').attr('style', 'background-color: lightblue; text-transform: uppercase; font-family: arial '); //attr es como set atribute
        $('td').css('color', 'pink');
        // let ths = document.getElementsByTagName('th');
        // for(th of ths){
        //     th.setAttribute('style', 'background-color: pink');
        // }

    });
   
    $('#btn2').click(function(){
        console.log( $('th').css('background-color'));
    });

    $('#btn3').click(function(){
        $('th').removeAttr('style');
        $('td').css({'color' : 'black', 'font-size' : '18px'});
    });

});

