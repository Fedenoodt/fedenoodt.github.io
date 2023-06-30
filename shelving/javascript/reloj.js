/////////////////////////////////////////////////////////////////////    ATENCION    //////////////////////////////////////////////////////////////////////

// En este codigo hay un par de pautas claras. Una es informar la utilidad del modulo, la segunda es informar que todas las funciones estan comentadas con 
// un preambulo informativo de la tarea a acatar en la misma. Y la tercera es informar que existen diversos separadores, para marcar distintas secciones.
// Estas son las referencias encerradas en "comillas", y un [...] que significa que la secuencia se repite...

// "[...]/////[...]": Barra que indica un segmento informativo.
// "//====[...]====//": Divisor de secciones del programa
// "//----[...]----//": Sencillo divisor estetico dentro del cuerpo.

// reloj es una función que tiene la tarea de recibir como parámetro, un nombre (Se aconseja que sea el nombre de la página, o algo por el estilo), y otro 
// parámetro en formato string que haría una lectura de el estilo de reloj que se busca:
// 'num': Devuelve un reloj resumido en solo números. 'numDay': Es exactamente igual, salvo que agrega el día de la semana. 'str': Devuelve un reloj 
// versado en palabras. 'dayStr': Es igual al anterior, solo que con el día de la semana incluido.

startingProgramJS('reloj')

////////////////////////////////////////////////////////////////    PROYECTO RAYONNAGE    /////////////////////////////////////////////////////////////////

function reloj (name, parameter) {
    function relojCONF () {
        //// relojCONF toma los datos, y los compila en una unica linea. ////
        const DateTime = luxon.DateTime
        const dt = DateTime.now();
        const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
        localStorage.setItem('mes', dt.month)
        let mes = meses[dt.month - 1];
        let diaSemana = dt.toLocaleString({ weekday: 'long'});
    
        let horas = dt.hour;
        if (horas < 10) {
            horas = '0' + dt.hour;
        }
        let minutos = dt.minute;
        if (minutos < 10) {
            minutos = '0' + dt.minute;
        }
        let segundos = dt.second;
        if (segundos < 10) {
            segundos = '0' + dt.second;
        }
        //// Dentro de la función, se valida repetidas veces la línea a imprimir según los parámetros establecidos.
        let hora = 'HORA_VACIA';
        if (parameter == 'str') {
            hora = `${horas}:${minutos}:${segundos}hs. ${dt.day} de ${mes} de ${dt.year}`;
        }
        if (parameter == 'num') {
            hora = `${horas}:${minutos}:${segundos}hs. ${dt.day}-${dt.month}-${dt.year}`;
        }
        if (parameter == 'dayStr') {
            hora = `${horas}:${minutos}:${segundos}hs. ${diaSemana}, ${dt.day} de ${mes} de ${dt.year}`;
        }
        if (parameter == 'dayNum') {
            hora = `${horas}:${minutos}:${segundos}hs. ${diaSemana} ${dt.day}-${dt.month}-${dt.year}`;
        }
        
        return hora
    }
    let getReloj = relojCONF();
    console.log(getReloj)
    const timeDateInterval = setInterval(() => {
        //// timeDateInterval se encarga de llevar la información completa a almacenamiento local, para extraerla milisegundo mas tarde. ////
        const time = relojCONF();
        localStorage.setItem(name, time.toString());
    }, 1000);
    
    function darReloj () {
        //// darReloj captura esa información, al igual de cuantas veces se piudió ese reloj en pantalla, para luego enbeberlo en el documento HTML. ////
        let lista = document.querySelectorAll('.hora');
        let hora = localStorage.getItem(name);
        for (let i = 0; i < lista.length; i++) {
            lista[i].innerHTML = hora;
        }}

    console.log('Si tenes este problema: "Uncaught TypeError: Cannot set properties of null (setting innerHTML) at darReloj (reloj.js:37:28)" significa que no estas declarando donde va el reloj en la web.')
    
    //// Y por ultimo, se entrega toda la compilacion de darReloj en un setInterval externo. ////
    setInterval(darReloj, 1)
}
