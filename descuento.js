let compra= parseFloat(prompt("digite e valor de la compra"));
if (compra > 200000){
    descuento = compra * 0.20;
}
    else if (compra > 100000) {
        descuento = compra * 0.10;}
        else{
            descuento =0;
        }
        totalpagar =compra - descuento;
        console.log("valor de la compra" + compra );
        console.log("total a pagar" + totalpagar);
    alert ("valor de la compra :" +compra +  "\n descuento aplicado :"+descuento+"\n pago total :" + totalpagar);


    


