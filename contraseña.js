let pass = prompt("digite la contraseña");
let numCaracteres =pass.length;
alert(numCaracteres);
console.log(numCaracteres);
(numCaracteres > 8 )?alert("contraseña segura"):alert("contraseña muy corta")