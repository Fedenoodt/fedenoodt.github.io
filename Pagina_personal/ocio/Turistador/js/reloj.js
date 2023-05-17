function main () {
    function relojCONF () {
        //// relojCONF toma los datos, y los compila en una unica linea. ////
        const DateTime = luxon.DateTime
        const dt = DateTime.now();
        const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
        localStorage.setItem('mes', dt.month)
        let mes = meses[dt.month - 1];
    
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
        
        const hora = `${horas}:${minutos}:${segundos}hs. ${dt.day} de ${mes} de ${dt.year}`;

        localStorage.setItem(`detectoDia`, `${dt.day}`)
        localStorage.setItem(`detectoLuz`, `${horas}:${minutos}`)
        
        return hora
    }
    let getReloj = relojCONF();
    console.log(getReloj)
    const timeDateInterval = setInterval(() => {
        //// timeDateInterval genera un pantallazo de cada segundo con la clasica funcion de setInterval(). ////
        const time = relojCONF();
        localStorage.setItem('hora', time.toString());
    }, 1000);
    
    function darReloj () {
        //// darReloj devuelve esa imagen para la pagina. ////
        let pantalla = document.getElementById('hora');
        let hora = localStorage.getItem('hora');
        pantalla.innerHTML = hora;
    }

    console.log('Si tenes este problema: "Uncaught TypeError: Cannot set properties of null (setting innerHTML) at darReloj (reloj.js:37:28)" significa que no estas declarando donde va el reloj en la web.')
    
    //// Y por ultimo, se entrega toda la compilacion de darReloj en un setInterval externo. ////
    setInterval(darReloj, 1)
}

main()