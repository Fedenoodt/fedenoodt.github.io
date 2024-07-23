// 1 ► Este fragmento toma los input del usuario, los registra, los manda a almacenamiento local, y los imprime en consola.

function conversor (punto) {
    // Valga la redundancia. Conversor "convierte" el dato ingresado en una variable.
    let direccion = parseInt(punto);
    return direccion
}

let cabezal = `<p onclick = pendiente(conversor('0'))>¡Saludo!</p>
<p onclick = pendiente(conversor('1'))>¿Como estas?</p>`;

a = document.createElement('div');
a.innerHTML = `<br /><br /><p>${localStorage.getItem('valor')}</p>`;


let b = document.createElement('div');
b.innerHTML = cabezal;
document.body.appendChild(b)

function pendiente (valor) {
    // Pendiente se encarga de resolver el valor pendiente de para el almacenamiento interno.
    localStorage.clear()
    const enJSON = JSON.stringify(valor);
    localStorage.setItem('valor', enJSON)
    console.log(localStorage.getItem('valor'))
}

// ================================================================================================================================= //

// 2 ► Este fragmento preserva todas las imagenes de el nexo

function primero () {
    document.write('Esta es la primer selección...')
}
function segundo () {
    document.write('Esta es la segunda selección...')
}

// (Cabe destacar que todas las imagenes, tienen que borrar lo que sea que haya en pantalla, asi se hacen apoyo sincrónico).

// ================================================================================================================================= //

// 3 ► Y este segmento ejecuta la imagen llamada.

let menu = [primero, segundo];
menu[localStorage.getItem('valor')]()