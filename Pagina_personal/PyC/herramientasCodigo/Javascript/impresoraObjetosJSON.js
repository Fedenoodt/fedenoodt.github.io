
function captura (archivo) {
    fetch(`${archivo}.json`)
    .then((response) => response.json())
    .then((data) => localStorage.setItem('registro', JSON.stringify(data)))

    let registro = localStorage.getItem('registro');
    let items = registro.length;
    console.log(items)
    constructor()
    return registro
}

function constructor () {
    let registro = localStorage.getItem('registro');
    const conversor = JSON.parse(registro);
    let constructor = '';
    for (let i = 0; i < conversor.length; i++) {
        let datos = JSON.stringify(conversor[i]);
        constructor += datos
    }
    imprimir()
    return constructor
}


function imprimir() {    
    const conversor = constructor();
    console.log(conversor)

    let reescritura = '';
    for (let i = 0; i < conversor.length; i++) {
        if (conversor[i] == '"' | conversor[i] == '[' | conversor[i] == ']' | conversor[i] == '.') 
        {reescritura += ''}
        else if (conversor[i] == ':' | conversor[i] == ','){
            reescritura += `${conversor[i]} `;
        }
        else if (conversor[i] == '}') {
            reescritura += ` </br> `;
        }
        else if (conversor[i] == '{') {
            reescritura += ` `;
        }
        else {reescritura+= conversor[i]}
    }
    document.write(reescritura)

    let imagen = document.createElement('div');
    imagen.innerHTML(reescritura)
    document.body.appendChild(imagen)
}
