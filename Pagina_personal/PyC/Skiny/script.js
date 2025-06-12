// ID es un ente central en ejecuciòn, ya que aun sin mucha importancia sobre el uso en bases de datos, 
// es la inercia que sostiene al sistema de creacion de notas
let id;

const allItems = { ...localStorage }; 
console.log('allItems:', allItems);
console.log('allItems.T1:', allItems.T1);
console.log('allItems.id:', allItems.id);

// Copiamos todo lo que haya en almacenamiento local, y lo imprimimos para analisis tecnico, 
// por si hacen falta ajustes.

function estructura(id, titulo, contenido) {
    // "estructura" es una funcion que se encarga de dar estructura a las notas.
    if (titulo === null || contenido === null) {
        // Esta validacion quisquillosa se hace, porque si los datos llegaron hasta aca por X razon en 
        // "null", aca tienen que acabar el viaje si o si.
        return;
    }

    let cuerpo = document.createElement("div");
    const imagen = `<div>
        <h1>${titulo}</h1>
        <p>${contenido}</p>
        <button type="submit" class="edit">Editar</button> <button type="submit" class="delete">Eliminar</button>
    </div>`;
    cuerpo.classList.add("notes");
    // data-id porque en caso de necesitarlo, hay un atributo HTML que almacena el ID... en HTML.
    cuerpo.setAttribute("data-id", id);
    cuerpo.innerHTML = imagen;
    const notes = document.getElementById("notes");

    if (notes) {
        return notes.prepend(cuerpo);
    } else {
        console.error("No se encontró el contenedor de notes.");
    }
    // con la inercia de crear un elemento, se ingresaron id, titulo, contenido, con la estructura innerHTML y prepend().
}

// "lsID" es la personificaciòn de "localStorageID", responsable de traer la ID que "este en ese momento" en almacenamiento local.
const lsID = Number(localStorage.getItem('id'));

if (lsID > 0) {
    for (let i = 1; i <= lsID; i++) {
        // Si hay datos en el navegador, lsID no va a ser 0, y si no es 0, hay que pintar los datos que almacena el programa,  
        // en el HTML.
        estructura (i, localStorage.getItem(`T${i}`), localStorage.getItem(`C${i}`))
    }
}

const crear = document.getElementById("creador").addEventListener("submit", function(event) {
    // Evento-funcion Crear, se va a encargar de tomar los valores del formulario estatico de "Crear" en el programa, y crearlos, 
    // usando a "Estructura" y dando aviso a almacenamiento local de las nuevas IDs.
    event.preventDefault(); 
    let titulo = document.getElementById("titulo").value;
    let contenido = document.getElementById("contenido").value;
    if (localStorage.getItem('id') > 0) {
        // Si la "entidad representada como lsID" tiene datos, significa que tenemos que tomarlos, y reemplazar nuestra referencia 
        // en 0.
        id = Number(localStorage.getItem('id'));
        console.log('lsID:', id)
        console.log('Esta en almacenamiento el ID.');

    } else {
        // ... si no, tomamos nuestra referencia en 0.
        id = 0;
        console.warn('No esta en almacenamiento el ID.');
    }
    id += 1

    localStorage.setItem('id', id);
    localStorage.setItem(`T${id}`, titulo); // "TID" es "TituloID".
    localStorage.setItem(`C${id}`, contenido); // "CID" es "ContenidoID".

    estructura(id, titulo, contenido)
    // aumentamos nuestra referencia de ID, cargamos los datos de las notas, y la estructuramos.
});

document.addEventListener("click", function(event) {
    if (event.target.classList.contains("edit")) { 
        // Mediante el uso de .closest() nos acercamos a la nota que pidio ser editada ...
        let nota = event.target.closest(".notes"); // Encuentra la nota donde está el botón
        let id = nota.getAttribute("data-id"); // Obtiene el ID exacto

        let nuevoTitulo = prompt("Nuevo título:", localStorage.getItem(`T${id}`));
        let nuevoContenido = prompt("Nuevo contenido:", localStorage.getItem(`C${id}`));
        // ... con prompt() tomamos esos datos nuevos...
        if (nuevoTitulo && nuevoContenido) {
            if (nuevoTitulo !== null && nuevoContenido !== null && nuevoTitulo.trim() !== "" && nuevoContenido.trim() !== "") {
                localStorage.setItem(`T${id}`, nuevoTitulo);
                localStorage.setItem(`C${id}`, nuevoContenido);
                nota.querySelector("h1").textContent = `${nuevoTitulo}`;
                nota.querySelector("p").textContent = nuevoContenido;
                // ... Y si no estan vacios, o tienen espacios en blanco, los guardamos y presentamos.
            }
        }
    }
    else if (event.target.classList.contains("delete")) { 
        let nota = event.target.closest(".notes"); // Encuentra la nota donde está el botón
        let id = nota.getAttribute("data-id"); // Obtiene el ID exacto

        let confirmacion = confirm("¿Estás seguro de que querés eliminar esta nota?");
        if (confirmacion) {
            localStorage.removeItem(`T${id}`); // Elimina el título de la nota
            localStorage.removeItem(`C${id}`); // Elimina el contenido de la nota
            //nota.remove(); // Elimina la nota del DOM
            if (nota) {
                nota.remove(); // Esto debería eliminar la nota del DOM
            } else {
                console.error("No se encontró el elemento en el DOM.");
            }
        }
        // Si encontramos al usuario queriendo eliminar la nota, hacemos un espacio de confirmacion, y eliminacion silvestre.
    }
    }
);
