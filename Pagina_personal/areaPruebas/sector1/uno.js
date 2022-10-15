function estableceHoras () {
    const DateTime = luxon.DateTime
    const dt = DateTime.now();
    const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    let mes = meses[dt.month - 1];
    const hora = `${dt.hour}:${dt.minute}:${dt.second}hs. ${dt.day} de ${mes} de ${dt.year}`;
    
}

function ceros(valor) {
    if valor < 10:
        return valor = '0' + valor;
}


const DateTime = luxon.DateTime
const dt = DateTime.now();
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
let restado = meses[dt.month - 1];
let mes = restado;
let dia = dt.day;
let hora = dt.hour;
let minuto = dt.minute;
let segundos = dt.second;
const actual = `${ceros(hora)}:${ceros(minuto)}:${ceros(segundos)}hs. ${ceros(dia)} de ${ceros(mes)} de ${dt.year}`;
setInterval(document.write(actual), 1000)
