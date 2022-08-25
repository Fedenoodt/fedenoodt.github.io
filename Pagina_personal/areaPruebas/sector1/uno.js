let frase = prompt("Ingrese la frase a mostrar en pantalla...");

console.log(frase)

if frase == null:
     document.write("<h1>¡No pusiste nada!</h1>");
else:
     document.write("<h1>" + frase + "</h1>");
