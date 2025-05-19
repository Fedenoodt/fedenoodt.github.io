function eject () {
    const temporadas = { 1 : 13, 2 : 22, 3 : 23, 4 : 22, 5 : 22, 6 : 25, 7 : 25, 8 : 25, 9 : 25, 10 : 23, 11 : 22, 
        12 : 21, 13 : 22, 14 : 22, 15 : 22, 16 : 21, 17 : 22, 18 : 22, 19 : 20, 20 : 21, 21 : 23, 22 : 22, 23 : 22, 
        23 : 22, 24 : 22, 25 : 22, 26 : 22, 27 : 22, 28 : 21, 29 : 21, 30 : 23, 31 : 22, 32 : 22, 33 : 21, 34 : 22, 
        35 : 18, 36 : 11
    };
    
    function notCero (prop) {
        if (prop < 1) {
            return prop = 1;
        } else {
            return prop;
        }
    };

    let audio = document.getElementById('clickSound');
            audio.play()
    
    const cantTemporada = Object.keys(temporadas).length;
    
    let whatSeaason = Math.floor(Math.random() * cantTemporada);
    whatSeaason = notCero(whatSeaason);
    console.log("temporada:", whatSeaason);
    let cantEpisodios = temporadas[whatSeaason];
    console.log("cantidad de episodios:", cantEpisodios);
    
    let whatEpisode = Math.floor(Math.random() * cantEpisodios);
    whatEpisode = notCero(whatEpisode);
    console.log("Episodio:", whatEpisode);
    let cuerpo = document.createElement("div");
    const imagen = `<div>
        <h1>A usted le tocó el capítulo ${whatEpisode} de la temporada ${whatSeaason}.</h1>
    </div>`;
    cuerpo.classList.add("results");
    cuerpo.innerHTML = imagen;
    const resultsContainer = document.getElementById("results-container");
        if (resultsContainer) {
            resultsContainer.prepend(cuerpo);
        } else {
            console.error("No se encontró el contenedor de resultados.");
        }

    return imagen;

}

const llamada = document.getElementById("random");
llamada.addEventListener("click", eject);

function background () {
    //const fondos = { "Homero" : "https://fedenoodt.github.io/Pagina_personal/ocio/Randomero%20Simpsons/Movil/Homero.jpg", "Marge" : "https://fedenoodt.github.io/Pagina_personal/ocio/Randomero%20Simpsons/Movil/Marge.jpg", "Lisa" : "https://fedenoodt.github.io/Pagina_personal/ocio/Randomero%20Simpsons/Movil/Lisa.jpg", "Bart" : "https://fedenoodt.github.io/Pagina_personal/ocio/Randomero%20Simpsons/Movil/Bart.jpg", "Maggie" : "https://fedenoodt.github.io/Pagina_personal/ocio/Randomero%20Simpsons/Movil/Maggie.jpg", "Ayudante" : "https://fedenoodt.github.io/Pagina_personal/ocio/Randomero%20Simpsons/Movil/Ayudante.jpg", "Bola" : "https://fedenoodt.github.io/Pagina_personal/ocio/Randomero%20Simpsons/Movil/Bola.jpg", "Abhram" : "https://fedenoodt.github.io/Pagina_personal/ocio/Randomero%20Simpsons/Movil/Abram.png", "Selma" : "https://fedenoodt.github.io/Pagina_personal/ocio/Randomero%20Simpsons/Movil/Selma.png", "Paty" : "https://fedenoodt.github.io/Pagina_personal/ocio/Randomero%20Simpsons/Movil/Patty.png", "Mona": "https://fedenoodt.github.io/Pagina_personal/ocio/Randomero%20Simpsons/Movil/Mona.png" };
    const fondos = { "Homero" : "/Movil/Homero.jpg", "Marge" : "/Movil/Marge.jpg", "Lisa" : "/Movil/Lisa.jpg", "Bart" : "/Movil/Bart.jpg", "Maggie" : "/Movil/Maggie.jpg", "Ayudante" : "/Movil/Ayudante.jpg", "Bola" : "/Movil/Bola.jpg", "Abhram" : "/Movil/Abram.png", "Selma" : "/Movil/Selma.png", "/Movil/Paty" : "/Patty.png", "Mona": "/Movil/Mona.png" };
    const nombres = Object.keys(fondos);
    const indice = Math.floor(Math.random() * Object.keys(fondos).length);
    const claves = nombres[indice];
    return fondos[claves]
    }

console.log(background())

function ajustarFondo() {
    let imageUrl;

    if (window.innerWidth < 600) {
        imageUrl = `url('${background()}')`; // Verifica el nombre correcto de la función
        document.body.style.backgroundSize = 'contain';
        console.log('Operacion movil...')
    } else {
        imageUrl = `url('https://fedenoodt.github.io/Pagina_personal/ocio/Randomero%20Simpsons/Simpsons_logo.jpg')`;
        document.body.style.backgroundSize = 'cover';
        console.log('Operacion TV...')
    }

    document.body.style.backgroundImage = imageUrl;
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundRepeat = 'no-repeat';
}

window.addEventListener('resize', ajustarFondo);
ajustarFondo(); // Llamarlo al inicio para que funcione desde el principio
