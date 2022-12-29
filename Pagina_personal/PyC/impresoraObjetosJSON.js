
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

        // else if (conversor[i] == 'c' & conversor[i+1] == 'r' & conversor[i+2] == 'e' & conversor[i+3] == 'd' & conversor[i+4] == 'e' & conversor[i+5] == 'n' & conversor[i+6] == 'c' & conversor[i+7] == 'i' & conversor[i+8] == 'a' & conversor[i+9] == 'l') {
        //     reescritura += ` c`;
        // } 
        
        else {reescritura+= conversor[i]}
        // console.log(reescritura[i])
    }
    document.write(reescritura)

    let imagen = document.createElement('div');
    imagen.innerHTML(reescritura)
    document.body.appendChild(imagen)
}

imprimir()