

// 'x' y 'z' vienen a representar a cada una de las imagenes... 
function x () {
    let saludar = 'Hola';
    return saludar
}

function z () {
    let interrogante = '¿Como estas? Espero que muy bien.'
    return interrogante
}

let saludar = 'Hola';
let interrogante = '¿Como estas? Espero que muy bien.'
let cabezal = `<p onclick = pendiente(x())>¡Saludo!</p>
<p onclick = pendiente(z())>¿Como estas?</p>`;

a = document.createElement('div');
a.innerHTML = `<br /><br /><p>${localStorage.getItem('valor')}</p>`;

let b = document.createElement('div');
b.innerHTML = cabezal;
document.body.appendChild(b)

function pendiente (valor) {
    localStorage.clear()
    const enJSON = JSON.stringify(valor);
    localStorage.setItem('valor', enJSON)
    cuerpo()
}
function cuerpo () {
    // La idea es levantar desde acá, toda la ejecución, ya que es más nítido de comparar con el localStorage().
    // Ahi armamos una "funcion de lectura" que comprenda que imagen del nexo (contemporánea, ya que no esta 
    // listo este nodo) tiene que emprender.
    let pasaje = localStorage.getItem('valor');


}
