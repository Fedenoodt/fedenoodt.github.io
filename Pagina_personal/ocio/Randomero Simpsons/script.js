function eject () {
    const temporadas = { 1 : 13, 2 : 22, 3 : 23, 4 : 22, 5 : 22, 6 : 25, 7 : 25, 8 : 25, 9 : 25, 10 : 23, 11 : 22, 
        12 : 21, 13 : 22, 14 : 22, 15 : 22, 16 : 21, 17 : 22, 18 : 22, 19 : 20, 20 : 21, 21 : 23, 22 : 22, 23 : 22, 
        23 : 22, 24 : 22, 25 : 22, 26 : 22, 27 : 22, 28 : 21, 29 : 21, 30 : 23, 31 : 22, 32 : 22, 33 : 21, 34 : 22, 
        35 : 18
    };
    
    function notCero (prop) {
        if (prop < 1) {
            return prop = 1;
        } else {
            return prop;
        }
    };
    
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

}

const llamada = document.getElementById("random");
llamada.addEventListener("click", eject);
