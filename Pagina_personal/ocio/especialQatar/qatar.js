localStorage.clear()

function relojCONF () {
    // location.reload(4000)
    const DateTime = luxon.DateTime
    const dt = DateTime.now();
    const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    let mes = meses[dt.month - 1];

    let dia = 24;
    let hora = 60;
    let marcaH = 12;
    let marcaM = 0;

    let horas = dt.hour;
    let minutos = hora - dt.minute;

    if (horas > marcaH) {
        horas = (dia - horas) + marcaH - 1;
    } else if (horas < marcaH) {
        horas = marcaH - (horas + 1);
    }
    // if (horas < 10) {
    //     horas = '0' + dt.hour;
    // }

    // if (minutos < 10) {
    //     minutos = '0' + dt.minute;
    // }

    localStorage.setItem('actualH', dt.hour)
    localStorage.setItem('actualM', dt.minute)

    // let horas = 0;
    // let minutos = 0;

    if (horas == 0 & minutos == 0) {
        const pantalla = `¡El partido ya empezó!`;
        return pantalla
    }
    const pantalla = `${horas} horas, ${minutos} minutos para el inicio de juego`;
    return pantalla
}
// let getReloj = relojCONF();
const timeDateInterval = setInterval(() => {
    const time = relojCONF();
    localStorage.setItem('reloj', time.toString());
}, 1000);

function darReloj () {
	let pantalla = document.getElementById('reloj');
	let reloj = localStorage.getItem('reloj');
	pantalla.innerHTML = reloj;
}
setInterval(darReloj, 1)
