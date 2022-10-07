function horaFecha () {
    let d = Date();
    tiempo = d.toString()
    return tiempo;
}

actualizar = setInterval(horaFecha, 1000);
