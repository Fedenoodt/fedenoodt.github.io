function estableceHoras () {
    const DateTime = luxon.DateTime
    const dt = DateTime.now();
    const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    let mes = meses[dt.month - 1];
    const hora = `${dt.hour}:${dt.minute}:${dt.second}hs. ${dt.day} de ${mes} de ${dt.year}`;
    
}

function ceros (valor) {
    if parseInt(valor) < 10:
        valor = '0' + valor;
    return valor
}


const DateTime = luxon.DateTime
const dt = DateTime.now();
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
let restado = meses[dt.month - 1];
let mes = ceros(restado);
let dia = ceros(dt.day);
let hora = ceros(dt.hour)
let minuto = ceros(dt.minute)
let segundos = ceros(dt.second)
const actual = `${segundos}:${minuto}:${hora}hs. ${} de ${mes} de ${dt.year}`;
setInterval(document.write(actual), 1000)
