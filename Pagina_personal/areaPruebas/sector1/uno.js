function estableceHoras() {
    const DateTime = luxon.DateTime
    const dt = DateTime.now();
    const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    let mes = meses[dt.month - 1];
    const hora = `${dt.hour}:${dt.minute}:${dt.second}hs. ${dt.day} de ${mes} de ${dt.year}`;
    
}




const DateTime = luxon.DateTime
const dt = DateTime.now();
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
let mes = meses[dt.month - 1];
const hora = `${dt.hour}:${dt.minute}:${dt.second}hs. ${dt.day} de ${mes} de ${dt.year}`;
setInterval(document.write(hora), 1000)
