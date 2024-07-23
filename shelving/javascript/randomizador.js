/////////////////////////////////////////////////////////////////////    ATENCION    //////////////////////////////////////////////////////////////////////

// En este codigo hay un par de pautas claras. Una es informar la utilidad del modulo, la segunda es informar que todas las funciones estan comentadas con 
// un preambulo informativo de la tarea a acatar en la misma. Y la tercera es informar que existen diversos separadores, para marcar distintas secciones.
// Estas son las referencias encerradas en "comillas", y un [...] que significa que la secuencia se repite...

// "[...]/////[...]": Barra que indica un segmento informativo.
// "//[...]\\\\\[...]//           :   Area de variables evaluables. (Suele tener que ver con cambios 
// variablesCheckPoint(parameter)"    frecuentes en el cuerpo de un programa)
// "//====[...]====//": Divisor de secciones del programa
// "//----[...]----//": Sencillo divisor estetico dentro del cuerpo.

// randomizador tiene la sencilla tarea de tomar un elemento, y aleatorizarlo. 
// A traves de una lista, ingresada por parametro, la funcion toma la lista ingresada. Y averiguando el largo de la misma, genera aleatoriamente un 
// elemento en ella, y a este lo devuelve.

startingProgramJS('randomizador')

////////////////////////////////////////////////////////////////    PROYECTO RAYONNAGE    /////////////////////////////////////////////////////////////////

function takeRandom(list) {
    //takeRandom toma la lista ingresada. Y averiguando el largo de la misma, genera aleatoriamente un elemento en ella, y a este lo devuelve.
    const large = list.length;
    for (let i = 0; i < large; i++) {
    const position = Math.floor(Math.random() * large);
    const randomResult = list[position];
    consoleLog('Result of random:', randomResult)
    return randomResult
    }
}

