document.write(`<a id = "txt">Hola...</a>`);
let entrada = document.getElementById("txt");
console.log("entrada");
entrada.keydown = () => (console.log("¡Pvto el que lee!"));  
