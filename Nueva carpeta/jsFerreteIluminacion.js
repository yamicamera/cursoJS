/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
     const precio = 35;
     let cantidad;
     let marca;
     let importeTotal;
     let descuento = 0;
     let precioConDescuento;
     let IIBB;
     let flag = 0;

     cantidad = parseInt(document.getElementById('Cantidad').value);
     marca = document.getElementById('Marca').value;

     switch (cantidad) {
         case 1:
         case 2:
             descuento = 0;
             break;
         case 3:
             if (marca == "ArgentinaLuz"){
                 descuento = .15;
             }
             if (marca == "FelipeLamparas") {
                 descuento = .1;
             }
             else {
                 descuento = .05;
             }
             break;
         case 4:

         descuento = (marca == "ArgentinaLuz" || marca == "FelipeLamparas") ? .25 : .20;
             /* if (marca == "ArgentinaLuz" || marca == "FelipeLamparas"){
                 descuento = .25;
             }
             else {
                 descuento = .2;
             } */
            break;
         case 5:
             descuento = marca == "ArgentinaLuz" ?.4 : .3;

             /* if (marca == "ArgentinaLuz"){
                 descuento = .6;
             }
             else {
                 descuento = .7;
             } */
            break;
         default:
             descuento = .5;
     }

     precioConDescuento =  precio * (1 - descuento);
     importeTotal = precioConDescuento * cantidad;
     
     document.getElementById('precioDescuento').value = precioConDescuento.toFixed(2);
    console.log(descuento);

     if (importeTotal > 120){
         IIBB = importeTotal * .1;
         importeTotal += IIBB;
         flag = 1;
     }

     let mensaje = "El importe final es $" + importeTotal;
     if (flag){
         mensaje += "\nUsted tuvo que pagar" + IIBB + "de Ingresos Brutos";
     }
     alert(mensaje);
}
