function eject () {
    // La constante temporadas, es la que mantiene el índice de temporadas al día como clave, y la cantidad de capítulos de ella, como valor.
    const temporadas = { 1 : 13, 2 : 22, 3 : 23, 4 : 22, 5 : 22, 6 : 25, 7 : 25, 8 : 25, 9 : 25, 10 : 23, 11 : 22, 
        12 : 21, 13 : 22, 14 : 22, 15 : 22, 16 : 21, 17 : 22, 18 : 22, 19 : 20, 20 : 21, 21 : 23, 22 : 22, 23 : 22, 
        23 : 22, 24 : 22, 25 : 22, 26 : 22, 27 : 22, 28 : 21, 29 : 21, 30 : 23, 31 : 22, 32 : 22, 33 : 21, 34 : 22, 
        35 : 18, 36 : 11
    };
    
    function notCero (prop) {
        // No existe la "temporada 0". 
        // Asi que notCero se encarga de verificar, que la propiedad aleatorizada que es 0, pase automáticamente a ser 1.
        if (prop < 1) {
            return prop = 1;
        } else {
            return prop;
        }
    };

    // audio.play() porque es una pista de 13 segundos que da ambiente al elegir el episodio.
    let audio = document.getElementById('clickSound');
            audio.play()

    // cantTemporada para definir cuantas temporadas hay...
    const cantTemporada = Object.keys(temporadas).length;

    // whatSeason se encarga de seleccionar una temporada de manera selectiva.
    let whatSeaason = Math.floor(Math.random() * cantTemporada);
    // aca, notCero se encarga de validar que no haya puntos ciegos.
    whatSeaason = notCero(whatSeaason);
    console.log("temporada:", whatSeaason);
    // cantEpisodios toma el total de episodios en la temporada.
    let cantEpisodios = temporadas[whatSeaason];
    console.log("cantidad de episodios:", cantEpisodios);

    // ... y whatEpisode toma esa cantidad, para elegir de manera puntual el capitulo.
    let whatEpisode = Math.floor(Math.random() * cantEpisodios);
    // Se valida de igual manera que con las temporadas, que el valor no sea 0.
    whatEpisode = notCero(whatEpisode);
    console.log("Episodio:", whatEpisode);

    // ... Y para cerrar la estructura de randomizacion, let cuerpo se encarga de formular el mensaje 
    let cuerpo = document.createElement("div");
    const imagen = `<div>
        <h1>A usted le tocó el capítulo ${whatEpisode} <br /> de la temporada ${whatSeaason}.</h1>
    </div>`;
    cuerpo.classList.add("results");
    cuerpo.innerHTML = imagen;
    const resultsContainer = document.getElementById("results-container");
    // Se valida el contenedor de resultados, para saber si no hay ningún error.
        if (resultsContainer) {
            // ".prepend" se justifica. Ya que es importante que el episodio del último clic, quede por encima de los otros.
            resultsContainer.prepend(cuerpo);
        } else {
            console.error("No se encontró el contenedor de resultados.");
        }

    return imagen;

}

const llamada = document.getElementById("random");
llamada.addEventListener("click", eject);

function background () {
    // La función se encarga de, con las imagenes para dispositivos moviles presentadas en "fondos" se devuelva una al azar
    const fondos = { "Homero" : "https://fedenoodt.github.io/Pagina_personal/ocio/Randomero%20Simpsons/Movil/Homero.jpg", "Marge" : "https://fedenoodt.github.io/Pagina_personal/ocio/Randomero%20Simpsons/Movil/Marge.jpg", "Lisa" : "https://fedenoodt.github.io/Pagina_personal/ocio/Randomero%20Simpsons/Movil/Lisa.jpg", "Bart" : "https://fedenoodt.github.io/Pagina_personal/ocio/Randomero%20Simpsons/Movil/Bart.jpg", "Maggie" : "https://fedenoodt.github.io/Pagina_personal/ocio/Randomero%20Simpsons/Movil/Maggie.jpg", "Ayudante" : "https://fedenoodt.github.io/Pagina_personal/ocio/Randomero%20Simpsons/Movil/Ayudante.jpg", "Bola" : "https://fedenoodt.github.io/Pagina_personal/ocio/Randomero%20Simpsons/Movil/Bola.jpg", "Abhram" : "https://fedenoodt.github.io/Pagina_personal/ocio/Randomero%20Simpsons/Movil/Abram.png", "Selma" : "https://fedenoodt.github.io/Pagina_personal/ocio/Randomero%20Simpsons/Movil/Selma.png", "Paty" : "https://fedenoodt.github.io/Pagina_personal/ocio/Randomero%20Simpsons/Movil/Patty.png", "Mona": "https://fedenoodt.github.io/Pagina_personal/ocio/Randomero%20Simpsons/Movil/Mona.png" };
    const nombres = Object.keys(fondos);
    // Es evidente, pero en todos los casos que aleatorizo, uso el Math.random(), multiplicado por los indices, y para resolver al numero flotante, lo redondeo con .floor().
    const indice = Math.floor(Math.random() * Object.keys(fondos).length);
    const claves = nombres[indice];
    return fondos[claves]
    }

function ajustarFondo() {
    // La funcion se jacta de tomar los datos, y ajustar el fondo dinámicamente a la amplitud de la pantalla.
    // window.outerWidth cubre el marco de la ventana, para el diseño responsivo. Asi, cuando sea un teléfono, mostrar el resultado de background().
    let imageUrl = window.outerWidth < 600 ? background() : "https://fedenoodt.github.io/Pagina_personal/ocio/Randomero%20Simpsons/Simpsons_logo.jpg";

    document.body.style.backgroundImage = `url('${imageUrl}')`;
    console.log("Imagen establecida:", imageUrl);
}

// Usamos resize para adaptar dinamicamente al fondo...
window.addEventListener("resize", ajustarFondo);
// ... y DOMContentLoaded para asegurarnos que todo DOM este listo.
document.addEventListener("DOMContentLoaded", ajustarFondo);
