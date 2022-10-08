document.write(`<input id = "txt" type = "text" value = "Hola..."></input>`);
let entrada = document.getElementById("txt");
entrada.keydown = () => (document.write("¡Pvto el que lee!"));  
