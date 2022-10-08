document.write(`<h1 id = "txt">Hola...</h1>`);
let entrada = document.getElementById("txt");
console.log("entrada");
entrada.keydown = () => (console.log("¡Pvto el que lee!"));  
