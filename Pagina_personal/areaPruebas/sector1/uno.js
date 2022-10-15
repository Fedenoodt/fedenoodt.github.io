function estableceHoras () {
    const DateTime = luxon.DateTime
    const dt = DateTime.now();
    const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    let mes = meses[dt.month - 1];
    const hora = `${dt.hour}:${dt.minute}:${dt.second}hs. ${dt.day} de ${mes} de ${dt.year}`;
    
}

const DateTime = luxon.DateTime
const dt = DateTime.now();
const anio = dt.year;
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
let NUMes  = '';
let mes = meses[dt.month - 1];
let dia = '';
let hora = '';
let minuto = '';
let segundos = '';

(dt.month - 1) < 10 ? NUMes = '0' + dt.month - 1 : NUMes = dt.month - 1
dt.day < 10 ? dia = '0' + dt.day : dia = dt.day
dt.hour < 10 ? hora = '0' + dt.hour : hora = dt.hour
dt.minute < 10 ? minuto = '0' + dt.minute : minuto = dt.minute
dt.second < 10 ? segundos = '0' + dt.second : segundos = dt.second

const fecha = `${hora}:${minuto}:${segundos}hs. ${dia} de ${NUMes} de ${anio}`;
const tactica = `${hora}${minuto}:${segundos}  ${dia}${NUMes}${anio}`;
document.write(fecha)
document.write(tactica)
