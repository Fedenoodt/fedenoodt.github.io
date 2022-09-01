let aleatorio = Math.random() * 499;
let numero = Math.round(aleatorio)
let adivino = prompt("Adivine el numero minimo, de entre una y tres cifras...");

if (adivino >= numero) {
alert("Usted ha adivinado.");
}

else if (adivino < numero) {
alert("No. El numero es mas grande");
};
document.write('<h1>El n&uacute;mero m&iacute;nimo es ' + numero + ".</h1><br /><br /><h1>(El m&aacute;ximo n&uacute;mero aleatorio es 500)</h1>")
