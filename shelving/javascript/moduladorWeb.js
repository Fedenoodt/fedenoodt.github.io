/////////////////////////////////////////////////////////////////////    ATENCION    //////////////////////////////////////////////////////////////////////

// En este codigo hay un par de pautas claras. Una es informar la utilidad del modulo, la segunda es informar que todas las funciones estan comentadas con 
// un preambulo informativo de la tarea a acatar en la misma. Y la tercera es informar que existen diversos separadores, para marcar distintas secciones.
// Estas son las referencias encerradas en "comillas", y un [...] que significa que la secuencia se repite...

// "[...]/////[...]": Barra que indica un segmento informativo.
// "//====[...]====//": Divisor de secciones del programa
// "//----[...]----//": Sencillo divisor estetico dentro del cuerpo.

// moduladorWeb tiene la tarea de construir una web, partiendo desde la base de que el diseñador tiene que tomar los enlaces con la funcion buscadora 
// seeker("nombreQueTieneLaWeb"), y subir ese mismo nombre a un localStorage, con cada una de las paginas.
// incluyendo asi este modulo "automatico", una funcion especial, a la que se le pide al mismo diseñador, que la web de cabezera, se nombre como "index".
// Para no perder el tiempo con las dudas de cual es de estas webs.


////////////////////////////////////////////////////////////////    PROYECTO RAYONNAGE    /////////////////////////////////////////////////////////////////

function builder (parameter) {
    consoleLogSecure(parameter)
    consoleLog('Building...')
    localSet('building', JStringify(parameter))
    consoleLog('Build.')
}

function refresh (parameter) {
    // refresh se encarga detras de la produccion de la imagen, de agarrar el nombre que finalmente correspnde, y suplantar el cuerpo por la pagina actual.
    let block = null;
    block = document.createElement('div');
    block.innerHTML = ''
    document.body.appendChild(block)

    
    block = document.createElement('div');
    block.innerHTML = parameter
    document.body.appendChild(block)
}

function targeting (parameter) {
    localSet('target', parameter)
}

let target = localGet('target');
localSet('target', target)
consoleLogSecure(target)
if (nullUndefined(localGet('target'))) {
    localSet('target', 'index')
}


let imagenes = JSparse(localGet('building'));
consoleLogSecure(imagenes)

try {
    let imagen = Object.values(imagenes[target].split('`'));
    consoleLogSecure(imagen)
    refresh(imagen)
}
catch {
    let imagen = Object.values(imagenes[index].split('`'));
    consoleLogSecure(imagen)
    refresh(imagen)
}
