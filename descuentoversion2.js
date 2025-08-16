let compra =parseFloat(prompt("ingrese el valor de la compra" ));
let descuento =(compra > 200000) ? compra * 0.20: (compra > 100000 ) ? compra * 0.10 : 0;
let totalpagar =compra - descuento;
console.log("valor compra" + compra);
console.log("valor de descuento" + descuento );
console.log("el valor de total a pagar es :" + totalpagar);
alert("valor compra :" + compra +"\n valor de descuento :"+ descuento +"\n valor a pagar :"+ totalpagar);