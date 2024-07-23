let aleatorio = Math.random() * 499;
let numero = Math.round(aleatorio);
let valido = false;

let adivino = NaN;

resultado = function(adivino) {
    document.write('<h1>Usted ha dicho ' + adivino + '.</h1><br /><h1>El n&uacute;mero m&iacute;nimo es ' + numero + ".</h1><br /><br /><h1>(El m&aacute;ximo n&uacute;mero aleatorio es 500)</h1>");
}

while (!valido) {
    let adivino = parseInt(prompt("Adivine el numero minimo, de entre una y tres cifras..."));

    if (isNaN (adivino)) {
        alert("Ingrese un número, por favor.");
        console.warn("Error: Violacion de parseInt().");
    }

    else if (adivino > 500) {
        alert("Ingrese un número, que sea igual, o menor a 500. Por favor.");
        console.log("Usuario exedio limite de altura.")}

    else if (adivino >= numero) {
        alert("Usted ha adivinado.");
        resultado(adivino)
        valido = true;
    }

    else if (adivino < numero) {
        alert("No. El numero es mas grande");
        resultado(adivino)
        valido = true;
    }     
    }
    document.write('<a href = "https://fedenoodt.github.io/Pagina_personal/areaPruebas/sector2/uno.html"><h1>Clic ac&aacute; para volver a jugar...</h1></a>');
