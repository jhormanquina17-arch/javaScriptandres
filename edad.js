let edad=parseInt(prompt("dijite la edad"));
if (edad >8){
    if (edad <=12);{
        alert("infantil");
        // tambien se puede:if (edad > 8 && edad<=12)
    }
    if (edad >=13 && edad <=17){
         alert("adolecente")

    }
    if (edad >=18 && edad<=59){
        alert("adulto")
    }
    if (edad>=60 );{
        alert("adulto mayor")
    }
}
//operadores ternarios 
(edad > 0 && edad <= 12) ? alert("infantil"):(edad >= 13 && edad <= 17) 
    ? alert ("adolecente"):(edad = 18 && edad <= 59) ? alert("adulto"):(edad >=60) ? alert ("anciano"):("digite edad valida ")

