//import { main } as reloj from "https://fedenoodt.github.io/shelving/javascript/reloj.js";

//main()

let meses = [crepVespertinos.enero, crepVespertinos.febrero, crepVespertinos.marzo, crepVespertinos.abril, crepVespertinos.mayo, crepVespertinos.junio, crepVespertinos.julio, crepVespertinos.agosto, crepVespertinos.septiembre, crepVespertinos.octubre, crepVespertinos.noviembre, crepVespertinos.diciembre];

let mes = localStorage.getItem('mes');
let selecto = meses[mes-1];

const chilliad = framer('https://www.youtube.com/embed/BJ8Lxd43IgA');
const mountainsChumash = framer('https://www.youtube.com/embed/AqFtwD1nUAc');

const imagen = framer(`${localStorage.getItem('driverList')}`);



function disyuntor (mes) {
    // "disyuntor" es una función concreta para la lista de paseos de Youtube, para abrir la correcta, en el momento del año que se la convoca.
    const mesActual = mes;
    // const mesActual = 8;
    let tiempos;
    let lugares;
    if (mesActual == 1 | mesActual == 2) { 
        const tiempos = retrasos.primera;
        const lugares = listas.primera;
        localStorage.setItem('tiempos', JSON.stringify(tiempos))
        localStorage.setItem('lugares', JSON.stringify(lugares))
        //console.log(`Lista: ${JSON.stringify(tiempos)}.`)
        //console.log(JSON.stringify(lugares))
    }
    else if (mesActual == 3 | mesActual == 4) { 
        const tiempos = retrasos.segunda;
        const lugares = listas.segunda;
        localStorage.setItem('tiempos', JSON.stringify(tiempos))
        localStorage.setItem('lugares', JSON.stringify(lugares))
        //console.log(`Lista: ${JSON.stringify(tiempos)}.`)
        //console.log(JSON.stringify(lugares))
    }
    else if (mesActual == 5 | mesActual == 6) { 
        const tiempos = retrasos.tercera;
        const lugares = listas.tercera;
        localStorage.setItem('tiempos', JSON.stringify(tiempos))
        localStorage.setItem('lugares', JSON.stringify(lugares))
        //console.log(`Lista: ${JSON.stringify(tiempos)}.`)
        //console.log(JSON.stringify(lugares))
    }
    else if (mesActual == 7 | mesActual == 8) { 
        const tiempos = retrasos.cuarta;
        const lugares = listas.cuarta;
        localStorage.setItem('tiempos', JSON.stringify(tiempos))
        localStorage.setItem('lugares', JSON.stringify(lugares))
        //console.log(`Lista: ${JSON.stringify(tiempos)}.`)
        //console.log(JSON.stringify(lugares))
    }
    else if (mesActual == 9 | mesActual == 10) { 
        const tiempos = retrasos.quinta;
        const lugares = listas.quinta;
        localStorage.setItem('tiempos', JSON.stringify(tiempos))
        localStorage.setItem('lugares', JSON.stringify(lugares))
        //console.log(`Lista: ${JSON.stringify(tiempos)}.`)
        //console.log(JSON.stringify(lugares))
    }
    else if (mesActual == 11 | mesActual == 12) { 
        const tiempos = retrasos.sexta;
        const lugares = listas.sexta;
        localStorage.setItem('tiempos', JSON.stringify(tiempos))
        localStorage.setItem('lugares', JSON.stringify(lugares))
        //console.log(`Lista: ${JSON.stringify(tiempos)}.`)
        //console.log(JSON.stringify(lugares))
    }
    // localStorage.setItem('driverList', lista);
    return tiempos, lugares
}

function separarTiempos (tiempo) {
    let h = tiempo.slice(0, 2);
    let m = tiempo.slice(3, 5);

    return [h, m];
};

function juntarTiempos (horas, minutos) {
    if (horas < 10) {
        horas = `0${horas}`;
    }
    if (minutos < 10) {
        minutos = `0${minutos}`;
    }
    return `${horas}:${minutos}`
}

function restoTiempos (horas, minutos) {
    let enHora = `${24 - parseInt(horas)}`;
    let enMinuto = `${60 - parseInt(minutos)}`;
    
    return [enHora, enMinuto];
}

function aString (valor) {
    return `${valor}`
}

function aInteger (valor) {
    let listaNueva = [];
    for (let i = 0; i < valor.length; i++){
        listaNueva.push([parseInt(valor[i][0]), parseInt(valor[i][1])])
    }
    return listaNueva
}

function configurarLista (lista, funcion) {
    let listaNueva = [];
    for (let i = 0; i < lista.length; i++){
        listaNueva.push(funcion(lista[i]))
    }
    return listaNueva
}

function sumatoria (tiempos, vespertinoAyer) {
    let resultado = [];

    //Conversion de variables a entero...
    vespertinoAyer = [JSON.parse(vespertinoAyer[0]), JSON.parse(vespertinoAyer[1])];
    tiempos = configurarLista(tiempos, separarTiempos);
    tiempos = aInteger(tiempos);

    //Ejecucion de la sumatoria...
    vespertinoAyer = [vespertinoAyer[0] + tiempos[0][0], vespertinoAyer[1] + tiempos[0][1]];
    resultado.push(vespertinoAyer)

    for (let i = 1; i < tiempos.length; i++) {
        vespertinoAyer = [resultado[i - 1][0] + tiempos[i][0], resultado[i - 1][1] + tiempos[i][1]];
        resultado.push(vespertinoAyer)
    }
    
}

function sumatoriaV2 (tiempos, vespertinoAyer) {
    let resultado = [];

    //Conversion de variables a entero...
    vespertinoAyer = [JSON.parse(vespertinoAyer[0]), JSON.parse(vespertinoAyer[1])];
    tiempos = configurarLista(tiempos, separarTiempos);
    tiempos = aInteger(tiempos);

    //Ejecucion de la sumatoria...
    vespertinoAyer = [vespertinoAyer[0] + tiempos[0][0], vespertinoAyer[1] + tiempos[0][1]];
    resultado.push(vespertinoAyer)

    for (let i = 1; i < tiempos.length; i++) {
        let horaSumar = resultado[i - 1][0];
        let minutoSumar = resultado[i - 1][1];
        if (minutoSumar >= 60){
            horaSumar += Math.trunc(minutoSumar/60);
            minutoSumar = 0;
            if (horaSumar > 23) {
                horaSumar = 0}
        }
        vespertinoAyer = [horaSumar + tiempos[i][0], minutoSumar + tiempos[i][1]];
        if (vespertinoAyer[1] >= 60) {
            vespertinoAyer[0] += Math.trunc(vespertinoAyer[1]/60);
            vespertinoAyer[1] -= 60;
            vespertinoAyer = [vespertinoAyer[0], vespertinoAyer[1]];
            if (vespertinoAyer[0] > 23) {
                vespertinoAyer = [0, vespertinoAyer[1]];}
        }
        if (vespertinoAyer[0] > 23) {
            vespertinoAyer = [0, vespertinoAyer[1]];
        }
        resultado.push(vespertinoAyer)
        
    }
    console.log(resultado)
    return resultado
}

function aLimpio (horariosINT) {
    let horarios = [];
    for (let i = 0; i < horariosINT.length; i++){
        let temp0 = JSON.stringify(horariosINT[i][0]);
        let temp1 = JSON.stringify(horariosINT[i][1]);
        if (horariosINT[i][0] < 10){temp0 = '0' + temp0};
        if (horariosINT[i][1] < 10){temp1 = '0' + temp1};
        horarios.push(`${temp0}:${temp1}`)
    }
    return horarios
}

function granComparacion (crepuscular, momento) {
    let resultados = [];

    let dia = localStorage.getItem('detectoDia');
    let momentoAnterior = selecto[dia-2];
    disyuntor(localStorage.getItem('mes'));
    let tiempos = JSON.parse(localStorage.getItem('tiempos'));
    let lugares = JSON.parse(localStorage.getItem('lugares'));

    let excepcion = meses[mes-2];
    let momentoMes = excepcion[excepcion.length - 1];
    if (dia == '1') {
        momentoAnterior = momentoMes;
    }
    let vespertinoAyer = separarTiempos(momentoAnterior);
    console.log('Noche de ayer:', vespertinoAyer)
    let diaCompleto = restoTiempos(vespertinoAyer[0], vespertinoAyer[1]);

    let horariosINT = sumatoriaV2(tiempos, vespertinoAyer);
    console.log('horariosINT', horariosINT)
    let horarios = aLimpio(horariosINT);
    localStorage.setItem('tActualizado', JSON.stringify(horarios))
    console.log('horarios', horarios)
    console.log(Object.keys(lugares))
}




function darInforme (lugar) {
    let cartel = document.querySelector('h3');
    cartel.innerText = `Estás en: ${lugar}.`
}
darInforme('La Tierra')

function framer (video) {
    let toFrame =  `<iframe style = "position:fixed; top:0; left:0; bottom:0; right:0; width: 100%; height: 100%;" width="560" height="315" src="${video}?autoplay=1&mute=1&loop=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`.toString();
    console.error('MONTANDO IMAGEN')
    console.error(toFrame)
    return toFrame
}

function proyector(imagen) {
        let reproduccion = document.querySelector(".reproduccion");
        reproduccion.innerHTML = imagen;
        //document.body.appendChild(reproduccion)
}


//proyector(chilliad)

let crepuscular = localStorage.getItem('detectoLuz');
let dia = localStorage.getItem('detectoDia');
let momento = selecto[dia-1];

granComparacion(crepuscular, momento)

const control = setInterval(() => {
    console.info('Escaneando....')

    console.log('Hora:', crepuscular);
    indiceDia = 0;
    //console.log('Indice actual:', indiceDia)
    let paseo = JSON.parse(localStorage.getItem('lugares'));
    let nombres = Object.keys(paseo);
    console.log('paseo:', nombres);
    let marca = JSON.parse(localStorage.getItem('tActualizado'));
    console.log('marca:', marca);

    for (let i = 0; i < marca.length; i++) {
        if (crepuscular == marca[i]) {
            darInforme(nombres[i])
            localStorage.setItem('proyeccion', framer(paseo[nombres[i]]))
        }
    }
    if (crepuscular == momento) {
        darInforme(nombres[0])
        proyector(framer(paseo[nombres[0]]))
    }
        proyector(localStorage.getItem('proyeccion'))
}, 1000);

const inspeccion = setInterval(() => {
    console.warn('Validando....')

    crepuscular = localStorage.getItem('detectoLuz');
    console.log('Noche de hoy:', momento);
    granComparacion(crepuscular, momento)

}, 45000)