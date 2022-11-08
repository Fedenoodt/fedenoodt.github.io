let saludar = 'Hola';
let interrogante = '¿Como estas? Espero que muy bien.'
let cabezal = `<p onclick = pendiente(saludar)>¡Saludo!</p>
<p onclick = pendiente(interrogante)>¿Como estas?</p>`;

a = document.createElement('div');
a.innerHTML = `<br /><br /><p>${localStorage.getItem('valor')}</p>`;

let b = document.createElement('div');
b.innerHTML = cabezal;
document.body.appendChild(b)

function pendiente (valor) {
    // document.body.removeChild(b)
    const enJSON = JSON.stringify(valor);
    localStorage.setItem('valor', enJSON)
    
    document.body.appendChild(a)
}
