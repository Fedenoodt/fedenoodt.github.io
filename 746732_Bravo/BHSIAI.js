console.log('Conectando estructura Javascript...')

// ================================================================================================================================= //

// 1 ► Este fragmento toma los input del usuario, los registra, los manda a almacenamiento local, y los imprime en consola.

// localStorage.setItem('valor', 0)

function conversor (punto) {
    // Valga la redundancia. Conversor "convierte" el dato ingresado en una variable.
    let direccion = parseInt(punto);
    return direccion
}

// let cabezal = `<p onclick = pendiente(conversor('0'))>¡Saludo!</p>
// <p onclick = pendiente(conversor('1'))>¿Como estas?</p>`;

a = document.createElement('div');
a.innerHTML = `<br /><br /><p>${localStorage.getItem('valor')}</p>`;


// let b = document.createElement('div');
// b.innerHTML = cabezal;
// document.body.appendChild(b)

function pendiente (valor) {
    // Pendiente se encarga de resolver el valor pendiente de para el almacenamiento interno.
    localStorage.clear()
    const enJSON = JSON.stringify(valor);
    localStorage.setItem('valor', enJSON)
    location.reload()
    console.log(localStorage.getItem('valor'))
}

// ================================================================================================================================= //

const establecido = localStorage.getItem('valor');
console.log('Índice establecido:', establecido)

// ================================================================================================================================= //

// 2 ► Este fragmento construye el reloj.

function relojCONF () {
    // location.reload(4000)
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
    
    return hora
}
// let getReloj = relojCONF();
const timeDateInterval = setInterval(() => {
    const time = relojCONF();
    localStorage.setItem('hora', time.toString());
}, 1000);

function darReloj () {
	let pantalla = document.getElementById('hora');
	let hora = localStorage.getItem('hora');
	pantalla.innerHTML = hora;
}

setInterval(darReloj, 1)

// const getReloj = setInterval(() => {
//     localStorage.getItem('hora')
// }, 1000)

// ================================================================================================================================= //

console.log('Cargando las imágenes...')

// ================================================================================================================================= //

// 3 ► Este fragmento preserva todas las imagenes de el nexo

// Estas variables ID no pretenden ser más que "apodos" para los números.
let baseID = '0';
let toolsID = '1';
let relojID = '2';
let websID = '3';
let mediosID = '4';
let radioID = '5';
let twitchID = '6';
let youtubeID = '7';
let streamingID = '8';
let juegosID = '9';
let minecraftID = '10';
let commsID = '11';
let redesID = '12';

let cabezal = `	
<section class="home">
    <div class="in-flex">
        <div id="header">
            <a href = "" onclick = pendiente(conversor(${baseID}))><img class="Emblema" src="https://fedenoodt.github.io/746732_Bravo/Emblema.png"></a>
            <div class = "atajos">
                <a href = "" onclick = pendiente(conversor(${relojID}))><div><h2 id = "hora"></h2></div></a>
                <a class = "imgAtajos" href="https://github.com/Fedenoodt/I-Black-Hawk-Security-Informatics-Anonymous-Incorporation" target="_blank"><img class="imgAtajos" src="https://fedenoodt.github.io/746732_Bravo/Shield-PNG-Photos.png"></a>
                <a class = "imgAtajos" href="https://github.com/Fedenoodt/fedenoodt.github.io/tree/gh-pages" target="_blank"><img class="imgAtajos" src="https://fedenoodt.github.io/746732_Bravo/768px-Settings_(iOS).png"></a>
                <script src = "hora.js"></script>
            </div>
            <br />
            <h1>Nexo estratégico</h1>
            <br />
            <h1>Black Hawk Security Informatics Anonymous Incorporation</h1>
            <hr />		
                <ul>
				<li class="listaHorizontal"><div><a href="https://fedenoodt.github.io/Pagina_personal/PyC/proyectoEE.html#nota5" target="_blank"><p class = "notGood">Receso de urgencia: 1/1 [ 07-03-2023 ]</p></a></div></li>
				<li class="listaHorizontal"><div><a href="https://github.com/Fedenoodt/ProyectoRayonnage" target="_blank"><p class = "good">Hacer las 20 herramientas del Proyecto Rayonnage: 5/20 </p></a></div></li>
				<li class="listaHorizontal"><div><a href="" target="_blank"><p class = "notGood">Encontrar la manera de Ejecutar Empire at War Gold, y Resident Evil 4 en una m&aacute;quina de TecniBot. </p></a></div></li>
				<li class="listaHorizontal"><div><a href="" target="_blank"><p class = "good">Estar listo para ir con Marcelo Bivort por Engranaje Embarrado los Martes a las 18hs. </p></a></div></li>
				
                </ul>
        </div>
    </div>
    <hr />
    <hr />
    <hr />`;

function base () {
	let cuerpo = document.createElement("div");
	const imagen = `
	${cabezal}
	<div class="in-flex">
		<h2>Accesos de emergencia</h2>
		<ul>
		    <li><a href="https://github.com/Fedenoodt/CH---JavaScript/edit/main/Notas.txt" target="_blank">¡Write now! - CoderHouse</a></li>
		    <li><a href="https://coderhouse.zoom.us/j/98016948428?pwd=cW9HdVBHZy9HOTRsTll4UkNBSkZrQT09&prefer=1&un=RmVkZXJpY28gTm9vZHQgTW9saW5z#success" target="_blank">Clases - CoderHouse</a></li>
		    <li><a href="https://github.com/Fedenoodt/JavaScript/edit/main/Notas.txt#new_blob.js-blob-form" target="_blank">¡Write now! - JavaScript</a></li>
		    <li><a href="https://github.com/Fedenoodt/CH---JavaScript" target="_blank">GitHub - JavaScript - CoderHouse</a></li>
		    <li><a href="https://github.com/Fedenoodt/JavaScript/tree/main" target="_blank">GitHub - JavaScript</a></li>
		    <li><a href="https://fedenoodt.github.io/Pagina_personal/javascript-es.7.pdf" target="_blank">Manual-Informatica.com - JavaScript</a></li>
		    <li><a href="https://www.youtube.com/watch?v=z95mZVUcJ-E&t=2756s" target="_blank">Soy Dalto - JavaScript</a></li>
		</ul>
		<hr />		
		<ul>
		    <li class="listaHorizontal"><a href="https://mail.google.com/mail/u/1/#inbox" target="_blank">Gmail</a></li>
		    <li class="listaHorizontal"><a href="https://github.com/" target="_blank">GitHub</a></li>
		    <li class="listaHorizontal"><a href="https://github.com/Fedenoodt/Trabajo" target="_blank">Trabajo</a></li>
		    <li class="listaHorizontal"><a href="https://drive.google.com/drive/u/1/my-drive" target="_blank">Drive</a></li>
		    <li class="listaHorizontal"><a href="https://app.diagrams.net/" target="_blank">Diagramas</a></li>
		    <li class="listaHorizontal"><a href="https://classroom.google.com/u/1/h" target="_blank">Classroom</a></li>
		    <li class="listaHorizontal"><a href="https://www.youtube.com/" target="_blank">Youtube</a></li>
		    <li class="listaHorizontal"><a href="https://calendar.google.com/calendar/u/1/r?tab=oc" target="_blank">Calendario</a></li>
		    <li class="listaHorizontal"><a href = "" onclick = pendiente(conversor(${toolsID}))>M&aacutes herramientas...</a></li>
		</ul>
		<hr />
		<h2>Links de acceso</h2>
		<ul>
		    <li><a href="https://plataforma.coderhouse.com/cursos" target="_blank">Coder House - Plataforma E-Learning</a>></li>
		    <li><a href = "" onclick = pendiente(conversor(${websID}))>P&aacute;ginas Especiales</a>></li>
		    <li><a href="https://www.youtube.com/playlist?list=PLOJvby8Q_tfGshu5XTZ23OWK8cRft5F8m" target="_blank">Jedi Order Playlist</a>></li>
		    <li><a href = "" onclick = pendiente(conversor(${mediosID}))>Medios audiovisuales</a>></li>
		    <li><a href = "" onclick = pendiente(conversor(${commsID}))>Comunicaciones</a>></li>
		    <li><a href = "" onclick = pendiente(conversor('${redesID}'))>Redes Sociales</a>></li>
		</ul>
		<br />

	    </div>
	</section>
	`;
	cuerpo.innerHTML = imagen;
	document.body.appendChild(cuerpo);
    return imagen
// 	puente(websID, webs)
}

function driving () {
    // "driving" es una función concreta para la lista de paseos de Youtube, para abrir la correcta, en el momento del año que se la convoca.
    const mesActual = localStorage.getItem('mes');
    // const mesActual = 8;
    let lista = '';
    if (mesActual == 1 | mesActual == 2) { localStorage.setItem('driverList', 'https://www.youtube.com/playlist?list=PLOJvby8Q_tfGp8QXNce2UAKUuS5DBjSbR') }
    else if (mesActual == 3 | mesActual == 4) { localStorage.setItem('driverList', 'https://www.youtube.com/playlist?list=PLOJvby8Q_tfEQRUIpoJ7dSyIKed8_abKe') }
    else if (mesActual == 5 | mesActual == 6) { localStorage.setItem('driverList', 'https://www.youtube.com/playlist?list=PLOJvby8Q_tfEfzeRD7jhLZ4cVOv9NaJHd') }
    else if (mesActual == 7 | mesActual == 8) { localStorage.setItem('driverList', 'https://www.youtube.com/playlist?list=PLOJvby8Q_tfEvtLSuftj_-HGbm3s1sf9v') }
    else if (mesActual == 9 | mesActual == 10) { localStorage.setItem('driverList', 'https://www.youtube.com/playlist?list=PLOJvby8Q_tfHnP5MiUWhW-6cCS4iu8iZX') }
    else if (mesActual == 11 | mesActual == 12) { localStorage.setItem('driverList', 'https://www.youtube.com/playlist?list=PLOJvby8Q_tfFi63ckq8rJXQn3uAKGPiWK') }
    // localStorage.setItem('driverList', lista);
}

driving()
const driverList = localStorage.getItem('driverList');

function tools () {
    let cuerpo = document.createElement("div");
    const imagen = `
    ${cabezal}
	    <div class="in-flex">
	    <h2>Herramientas</h2>
	    <ul>
		<li><a href="https://fedenoodt.github.io/798326_Epsilon/BHSIAIObsoletos.html">Accesos directos obsoletos</a>></li>
		<li><a href="https://translate.google.com.ar/" target="_blank">Traductor de Google</a>></li>
		<li><a href="https://www.google.com.ar/maps/@-34.607613,-58.4515826,15z" target="_blank">Google Maps</a>></li>
		<li><a href="https://www.omnilineas.com.ar/" target="_blank">OmniL&iacute;neas</a>></li>
		<li><a href="https://static.wikigta.org/nl/images/8/83/V.png" target="_blank">Mapa de Grand Theft Auto V</a>></li>
		<li><a href="https://www.mercadolibre.com.ar/" target="_blank">Mercado Libre</a>></li>
		<li><a href="https://www.ilovepdf.com/es/html-a-pdf" target="_blank">Convertor HTML a PDF</a>></li>
		<li><a href="https://www.y2mate.com/es/youtube-mp3/sNjWpZmxDgg" target="_blank">Convertor Youtube a MP3</a>></li>
		<li><a href="https://workspace.google.com/intl/es-419/products/forms/?utm_source=google&utm_medium=cpc&utm_campaign=latam-AR-all-es-dr-bkws-all-all-trial-e-dr-1011272-LUAC0011853&utm_content=text-ad-none-any-DEV_c-CRE_479426435746-ADGP_Hybrid%20%7C%20BKWS%20-%20EXA%20%7C%20Txt%20~%20Forms-KWID_43700057710499709-kwd-10647024857&utm_term=KW_google%20forms-ST_google%20forms&gclid=Cj0KCQjwkruVBhCHARIsACVIiOwoV_-s-dU6S2iarog5B7sprTXCVZSfzhnnItRt9ZoVj11ckd869ywaAk1fEALw_wcB&gclsrc=aw.ds" target="_blank">Google Formularios</a>></li>
		<li><a href="https://fedenoodt.github.io/Pagina_personal/screenToner.png" target="_blank">Imagen para arreglar color de pantalla</a>></li>
		<li><a href="https://www.onlinemictest.com/es/prueba-de-mouse/" target="_blank">Probador de entradas para mouse</a>></li>
		<li><a href="https://www.onlinemictest.com/es/prueba-de-teclado/" target="_blank">Probador de entradas para teclado</a>></li>
		<li><a href="about:blank" target="_blank">P&aacutegina en blanco</a>></li>
		<li><a href="https://carto.maps.arcgis.com/apps/CEWebViewer/viewer.html?3dWebScene=e87eb53174ab4ba09026e90e1d7c6557" target="_blank">Galaxia Star Wars</a>></li>
		<li><a href="https://imagen.online-convert.com/es/convertir-a-png" target="_blank">Imagen PNG transparente</a>></li>
		<li><a href="https://www.site24x7.com/es/tools/selector-de-codigo-color.html" target="_blank">Detector RGB de imagen</a>></li>
		<li><a href="https://rgbacolorpicker.com/" target="_blank">Selector paleta RGB</a>></li>
		<li><a href="https://ezgif.com/webp-to-gif" target="_blank">Convertidor WEBP a GIF</a>></li>
		<li><a href="https://convertio.co/es/mp4-gif/" target="_blank">Convertidor MP4 a GIF</a>></li>
		<li><a href="https://convertio.co/es/webm-gif/" target="_blank">Convertidor WEBM a GIF</a>></li>
		<li><a href="http://sps.fibertel.com.ar/speedtest/" target="_blank">Speedtest Fibertel</a>></li>
		<li><a href="https://www.speedtest.net/es" target="_blank">Speedtest Ookla</a>></li>
		<li><a href="https://fedenoodt.github.io/798326_Epsilon/BHSIAIPruebas.html">Zona de pruebas web</a>></li>
		<li><a href="https://c.tenor.com/2wR9-9cmrjMAAAAC/ahora-vengo-hernan-drago.gif" target="_blank">Ahora vengo</a>></li>
		<li><a href="${driverList}" target="_blank">Tour de paseos</a>></li>
		<li><a href="https://www.youtube.com/playlist?list=PLOJvby8Q_tfGmVbV4xxkfLjoQF6FjybsL" target="_blank">Colección de salvapantallas</a>></li>
		<li><a href="https://ayuda.ch-sistemas.com/wp-content/uploads/2018/05/cabina4.png" target="_blank">Fondo de telón</a>></li>
		<li><a href="https://i.pinimg.com/originals/ae/a0/9d/aea09d635db4444475efac0b42e0ac1b.gif" target="_blank">Bandera Argentina</a>></li>
		<li><a href="https://fedenoodt.github.io/Pagina_personal/maintenance.png" target="_blank">Imagen "En mantenimiento..."</a>></li>


		<li><a href = "" onclick = pendiente(conversor(${baseID}))>Volver</a><<</li>
	    </ul>
	</div>
</section>
`;
cuerpo.innerHTML = imagen;
document.body.appendChild(cuerpo);
return imagen
}

function reloj () {
    let cuerpo = document.createElement("div");
    const imagen = `
	<center>
	<a href = "" onclick = pendiente(conversor(${baseID}))><img class="Emblema" src="https://fedenoodt.github.io/746732_Bravo/Emblema.png"></a>
	<h2 class = "megaReloj" id = "hora"></h2>
	<a href = "" onclick = pendiente(conversor(${baseID}))><h2> << Volver </h2></a>
	</center>
	`;
    cuerpo.innerHTML = imagen;
    document.body.appendChild(cuerpo);
return imagen
}

function webs () {
    let cuerpo = document.createElement("div");
    const imagen = `
    ${cabezal}
    <div class="in-flex">
			<h2>P&aacute;ginas Especiales</h2>
			<ul>
				<li><a href="https://fedenoodt.github.io/Pagina_personal/vida/inicio.html" target="_blank">Pagina Oficial de Fedenoodt</a>></li>
				<li><a href="https://fedenoodt.github.io/Pagina_personal/vida/nexoGrupote.html" target="_blank">Nexo Grupote</a>></li>
			 	<li><a href = "" onclick = pendiente(conversor(${baseID}))>Volver</a><<</li>
			</ul>
		</div>


	</section>
    `;
    cuerpo.innerHTML = imagen;
    document.body.appendChild(cuerpo);
return imagen
    
}

function medios () {
    let cuerpo = document.createElement("div");
    const imagen = `
    ${cabezal}
    <div class="in-flex">
        <h2>Medios audiovisuales</h2>
			<ul>
				<li><a href = "" onclick = pendiente(conversor(${radioID}))>Radio</a>></li>
				<li><a href = "" onclick = pendiente(conversor(${twitchID}))>Twitch</a>></li>
				<li><a href = "" onclick = pendiente(conversor(${youtubeID}))>Youtube</a>></li>
				<li><a href = "" onclick = pendiente(conversor(${streamingID}))>Streaming</a>></li>
				<li><a href = "" onclick = pendiente(conversor(${juegosID}))>Juegos</a>></li>
				<li><a href = "" onclick = pendiente(conversor(${baseID}))>Volver</a><<</li>
			</ul>
		</div>
	</section>
    `;
    cuerpo.innerHTML = imagen;
    document.body.appendChild(cuerpo);
return imagen
    
}

function radio () {
    let cuerpo = document.createElement("div");
    const imagen = `
    ${cabezal}
    <div class="in-flex">
			<h2>Radio</h2>
			<ul>
				<li><a href="https://bluefm.com.ar/" target="_blank">Radio Blue 100.7</a>></li>
				<li><a href="https://fmaspen.com/category/aspen-time/" target="_blank">Radio Aspen 102.3</a>></li>
				<li><a href="https://www.radiozoe.com.ar/" target="_blank">Radio Zoe 107.1</a>></li>
				<hr />
				<li><a href="https://www.youtube.com/watch?v=ceqgwo7U28Y&ab_channel=thebootlegboy2" target="_blank">the bootleg boy 2 ~ Chill Radio 24/7 Youtube</a>></li>
				<li><a href="https://www.youtube.com/watch?v=nSy7wpevIsY&list=PLOJvby8Q_tfG83AsSJSbxPv7-C9VUvRha&ab_channel=hiphopmusic" target="_blank">Radio Los Santos Youtube</a>></li>
				<li><a href="https://www.youtube.com/watch?v=wsd2xgm91nM&ab_channel=GTAFM" target="_blank">GTAV ♣ STILL SLIPPING Los Santos • Youtube</a>></li>
				<li><a href="https://www.youtube.com/watch?v=d0hKoOw0Wuw&ab_channel=GTAFM" target="_blank">GTAV ♣ iFruit Radio • Youtube</a>></li>
				<li><a href="https://www.youtube.com/watch?v=YYIBtojKDSc&ab_channel=GTAFM" target="_blank">GTAV ♣ Los Santos Rock Radio • Youtube</a>></li>
				<li><a>GTAV ♣ Self Radio slot</a>></li>
				<li><a href="https://www.youtube.com/watch?v=uZ3RFNMKcmg&ab_channel=GTAFM" target="_blank">GTAV ♣ Non Stop Pop FM • Youtube</a>></li>
				<li><a href="https://www.youtube.com/watch?v=nxwUWlqdCFI&ab_channel=SilverAsh" target="_blank">GTAV ♣ Radio Los Santos • Youtube</a>></li>
				<li><a href="https://www.youtube.com/watch?v=tmQqUh0xark&ab_channel=ListenToThis" target="_blank">GTAV ♣ Channel X • Youtube</a>></li>
				<li><a href="https://www.youtube.com/watch?v=N12WWl_f3QM&ab_channel=ListenToThis" target="_blank">GTAV ♣ Rebel Radio • Youtube</a>></li>
				<li><a href="https://www.youtube.com/watch?v=E-PFWBfRwAc&ab_channel=semmelsamu" target="_blank">GTAV ♣ Soulwax FM • Youtube</a>></li>
				<li><a href="https://www.youtube.com/watch?v=iX2liYJZuJU&ab_channel=xcgac" target="_blank">GTAV ♣ East Los FM • Youtube</a>></li>
				<li><a href="https://www.youtube.com/watch?v=iDFQd0AGmLs&ab_channel=GTAFM" target="_blank">GTAV ♣ West Coast Classics Radio Station • Youtube</a>></li>
				<li><a href="https://www.youtube.com/watch?v=aaXui87cF5Y&ab_channel=GTAFM" target="_blank">GTAV ♣ Blaine County Talk Radio • Youtube</a>></li>
				<li><a href="https://www.youtube.com/watch?v=osmrXqRuwJA&ab_channel=ListenToThis" target="_blank">GTAV ♣ The Blue Ark • Youtube</a>></li>
				<li><a href="https://www.youtube.com/watch?v=fYi-ZoglszY&t=4308s&ab_channel=GTAFM" target="_blank">GTAV ♣ WorldWide FM • Youtube</a>></li>
				<li><a href="https://www.youtube.com/watch?v=kEkNJRQJACI&ab_channel=videodrom83" target="_blank">GTAV ♣ FlyLo FM • Youtube</a>></li>
				<li><a href="https://www.youtube.com/watch?v=oaNdiTLKlMA&ab_channel=ListenToThis" target="_blank">GTAV ♣ The Lowdown 91.1 • Youtube</a>></li>
				<li><a href="https://www.youtube.com/watch?v=R9nFhKZhTJ0&ab_channel=PeterDazuk" target="_blank">GTAV ♣ The Lab Radio Station • Youtube</a>></li>
				<li><a href="https://www.youtube.com/watch?v=AA3WjWD_hyM&ab_channel=ListenToThis" target="_blank">GTAV ♣ Radio Mirror Park • Youtube</a>></li>
				<li><a href="https://www.youtube.com/watch?v=lCZc9y9KpY4&ab_channel=ListenToThis" target="_blank">GTAV ♣ Space 103.2 • Youtube</a>></li>
				<li><a href="https://www.youtube.com/watch?v=y-Faj25nOhM&ab_channel=ListenToThis" target="_blank">GTAV ♣ Vinewood Boulevard Radio • Youtube</a>></li>
				<li><a href="https://www.youtube.com/watch?v=-W6g6QUhAj0&ab_channel=Tate%27sDailySpeech" target="_blank">GTAV ♣ Blonded Los Santos 97 8 FM • Youtube</a>></li>
				<li><a href="https://www.youtube.com/watch?v=m8HlukW1auQ&ab_channel=videodrom83" target="_blank">GTAV ♣ LSUR • Youtube</a>></li>
				<li><a href="https://fedenoodt.github.io/Pagina_personal/ocio/Radio%20GTAV/radiogtav.html" target="_blank">GTAV ♣ Dial de radio • Youtube</a>></li>
				<li></a><a href = "" onclick = pendiente(conversor(${mediosID}))>Volver</a><<</li>
			</ul>
			<a class = "inicio" href = "" onclick = pendiente(conversor(${baseID}))><h2><<<<< Volver al inicio <<<</h2></a>
		</div>
	</section>
    `;
    cuerpo.innerHTML = imagen;
    document.body.appendChild(cuerpo);
return imagen
}

function twitch () {
    let cuerpo = document.createElement("div");
    const imagen = `
    ${cabezal}
    <div class="in-flex">
			<h2>Twitch</h2>
			<ul>
				<li><a href="https://www.twitch.tv/" target="_blank">Twitch</a>></li><br />
				<li><a href="https://www.twitch.tv/auronplay" target="_blank">auronplay</a>></li>
				<li><a href="https://www.twitch.tv/tanizen" target="_blank">Tanizen</a>></li>	
				<li><a href="https://www.twitch.tv/elperitaafk" target="_blank">eLPeritaAFK</a>></li>				
				<li><a href="https://www.twitch.tv/elrichmc" target="_blank">ElRichMC</a>></li>				
				<li><a href="https://www.twitch.tv/ibai" target="_blank">Ibai</a>></li>
				<li><a href="https://www.twitch.tv/abyls" target="_blank">Abyls</a>></li>
				<li><a href="https://www.twitch.tv/polispol1" target="_blank">polispol1</a>></li>
				<li><a href="https://www.twitch.tv/4fungamingg" target="_blank">4fungamingg</a>></li>
				<li></a><a href = "" onclick = pendiente(conversor(${mediosID}))>Volver</a><<</li>
			</ul>
			<a class = "inicio" href = "" onclick = pendiente(conversor(${baseID}))><h2><<<<< Volver al inicio <<<</h2></a>
		</div>
	<footer>
		<hr />
		<p class = "tip"><b>TIP:</b> Recordar el uso de el "Programador de tareas de Windows" para hacer que un stream, o lista de Youtube se 
		encienda de manera automática.</p>
	</footer>
	</section>
    `;
    cuerpo.innerHTML = imagen;
    document.body.appendChild(cuerpo);
return imagen
}

function youtube () {
    let cuerpo = document.createElement("div");
    const imagen = `
    ${cabezal}
    <div class="in-flex">
			<h2>Youtube</h2>
			<ul>
				<li><a href="https://www.youtube.com/feed/library" target="_blank">Biblioteca Youtube</a></li><br />
				<li><a href="https://myactivity.google.com/u/1/product/youtube?hl=es-419&utm_medium=web&utm_source=youtube" target="_blank">Historial por reloj Youtube</a></li><br />
				<li><a href="https://www.youtube.com/user/xFaRgAnx" target="_blank">xFaRgAnx YT</a>></li>
				<li><a href="https://www.youtube.com/@TheBraxXter" target="_blank">BraxXter</a>></li>
				<li><a href="https://www.youtube.com/user/ElRichMC" target="_blank">ElRichMC - Minecraft & Gaming a otro nivel</a>></li>
				<li><a href="https://www.youtube.com/user/HiperPiece" target="_blank">Hyper</a>></li>
				<li><a href="https://www.youtube.com/channel/UCSJXasOBzUlztNbpkRDA53w" target="_blank">La Sombra del Imperio</a>></li>
				<li><a href="https://www.youtube.com/channel/UCFR2oaNj02WnXkOgLH0iqOA" target="_blank">Auron</a>></li>
				<li><a href="https://www.youtube.com/channel/UCaY_-ksFSQtTGk0y1HA_3YQ" target="_blank">Ibai Llanos</a>></li>
				<li><a href="https://www.youtube.com/user/AuronPlay" target="_blank">AuronPlay</a>></li>
				<li><a href="https://www.youtube.com/user/SoyFarfadox" target="_blank">Farfadox</a></li>
				<li><a href="https://www.youtube.com/c/RaiCanGTA" target="_blank">Rai Can</a>></li>
				<li><a href="https://www.youtube.com/user/danilirri" target="_blank">CodigoRojoARG</a>></li>
				<li></a><a href = "" onclick = pendiente(conversor(${mediosID}))>Volver</a><<</li>
			</ul>
			<a class = "inicio" href = "" onclick = pendiente(conversor(${baseID}))><h2><<<<< Volver al inicio <<<</h2></a>
		</div>
	<footer>
		<hr />
		<p class = "tip"><b>TIP:</b> Recordar el uso de "Youtube NonStop" para el cese de publicidad, y "SmartVideo For Youtube" para 
		nivelar el mínimo gráfico automático de los videos Youtube. Ambas como extenciones de Chrome y Firefox.</p>
	</footer>
    </section>
    `;
    cuerpo.innerHTML = imagen;
    document.body.appendChild(cuerpo);
return imagen
}

function streaming () {
    let cuerpo = document.createElement("div");
    const imagen = `
    ${cabezal}
    <div class="in-flex">
			<h2>Streaming</h2>
			<ul>
				<li><a href="https://web.flow.com.ar/guia-de-tv?epg" target="_blank">Cablevision Flow</a>></li>
				<li><a href="https://www.netflix.com/browse" target="_blank">Netflix</a>></li>
				<li><a href="https://www.netflix.com/browse/genre/75436?bc=34399&so=yr" target="_blank">Netflix - Policiales ordenadas por a&ntilde;o</a>></li>
				<li><a href="https://www.disneyplus.com/es-419/home" target="_blank">Disney+</a>></li>
				<li><a href="https://play.hbomax.com/" target="_blank">HBO Max</a>></li>
				<li><a href="https://www.starplus.com/es-419/home" target="_blank">Star+</a>></li>
				<li><a href="https://www.primevideo.com/?ref_=dvm_pds_amz_ar_dc_s_g_mkw_sURBO2uG4-dc_pcrid_231825120471&mrntrk=slid__pgrid_42306243048_pgeo_1000073_x__ptid_kwd-45697133742" target="_blank">Amazon Prime Video</a>></li>

				<li></a><a href = "" onclick = pendiente(conversor(${mediosID}))>Volver</a><<</li>
			</ul>
			<a class = "inicio" href = "" onclick = pendiente(conversor(${baseID}))><h2><<<<< Volver al inicio <<<</h2></a>
		</div>
	<footer>
		<hr />
		<p class = "tip"><b>TIP:</b> Recordar con respecto a Flow, que hay que usar directamente este acceso, e ingresar directo a "Guía de TV". 
			Flow es muy inestable como plataforma.</p>
	</footer>
    </section>
    `;
    cuerpo.innerHTML = imagen;
    document.body.appendChild(cuerpo);
return imagen
}

function juegos () {
    let cuerpo = document.createElement("div");
    const imagen = `
    ${cabezal}
    <div class="in-flex">
		<h2>Juegos</h2>
			<ul>
				<li><a href = "" onclick = pendiente(conversor(${minecraftID}))>Minecraft (Webs de informaci&oacute;n)</a>></li>
				<li><a href="https://agar.io" target="_blank">Agar.io</a>></li>
				<li><a href="https://www.geoguessr.com/trips" target="_blank">GeoGuessr</a>></li>
				<li><a href="https://geotastic.net/home" target="_blank">Geotastic (Geoguessr gratuito recomendado de PolIsPol)</a>></li>
				<li></a><a href = "" onclick = pendiente(conversor(${mediosID}))>Volver</a><<</li>
		</ul>
		<a class = "inicio" href = "" onclick = pendiente(conversor(${baseID}))><h2><<<<< Volver al inicio <<<</h2></a>
	</div>
    `;
    cuerpo.innerHTML = imagen;
    document.body.appendChild(cuerpo);
return imagen
}

function minecraft () {
    let cuerpo = document.createElement("div");
    const imagen = `
    ${cabezal}
	<div class="in-flex">
		<h2>Minecrafteo</h2>
			<ul>
				<li><a href="https://docs.google.com/document/d/1b4P51y2acdchT11xjx-eywD-BodEp82eL3X0F1yKB3I/edit" target="_blank">Salvamundos</a>></li>
				<hr />
				<li><a href="https://fedenoodt.github.io/Pagina_personal/ocio/La_Fortaleza/IPLaFortaleza.html" target="_blank">La Fortaleza</a>></li>
				<li><a href="https://fedenoodt.github.io/Pagina_personal/ocio/odtu.html" target="_blank">Organización Dispar de Tierras Unidas</a>></li>
				<li></a><a href = "" onclick = pendiente(conversor(${juegosID}))>Volver</a><<</li>
		</ul>
		<a class = "inicio" href = "" onclick = pendiente(conversor(${baseID}))><h2><<<<< Volver al inicio <<<</h2></a>
	</div>
    `;
    cuerpo.innerHTML = imagen;
    document.body.appendChild(cuerpo);
return imagen
}

function comms () {
    let cuerpo = document.createElement("div");
    const imagen = `
    ${cabezal}
    <div class="in-flex">
			<h2>Comunicaciones</h2>
			<ul>
				<li><a href="https://web.telegram.org/#/im" target="_blank">Telegram</a>></li>
				<li><a href="https://web.whatsapp.com/" target="_blank">Whatsapp</a>></li>
				<li><a href = "" onclick = pendiente(conversor(${baseID}))>Volver</a><<</li>
			</ul>
		</div>
	</section>
    `;
    cuerpo.innerHTML = imagen;
    document.body.appendChild(cuerpo);
return imagen
}

function redes () {
    let cuerpo = document.createElement("div");
    const imagen = `
    ${cabezal}
    <div class="in-flex">
			<h2>Redes Sociales</h2>
			<ul>
				<li><a href="https://fedenoodt.github.io/798326_Epsilon/BHSIAI.html"><a href="https://www.linkedin.com/in/federico-noodt-molins-182a30134/" target="_blank">LinkedIn Fedenoodt</a></a>></li>
				<li><a href="https://fedenoodt.github.io/798326_Epsilon/BHSIAI.html"><a href="https://www.facebook.com/" target="_blank">Facebook</a></a>></li>
				<li><a href="https://fedenoodt.github.io/798326_Epsilon/BHSIAI.html"><a href="https://www.instagram.com/?hl=es-la" target="_blank">Instagram</a></a>></li>
				<li><a href="https://fedenoodt.github.io/798326_Epsilon/BHSIAI.html"><a href="https://twitter.com/home" target="_blank">Twitter</a></a>></li>
				<li><a href = "" onclick = pendiente(conversor(${baseID}))>Volver</a><<</li>
			</ul>
		</div>
	</section>
    `;
    cuerpo.innerHTML = imagen;
    document.body.appendChild(cuerpo);
return imagen
}

// (Cabe destacar que todas las imagenes, tienen que borrar lo que sea que haya en pantalla, asi se hacen apoyo sincrónico).

// ================================================================================================================================= //

console.log('Ejecutando imagen...')

// ================================================================================================================================= //

// 4 ► Y este segmento ejecuta la imagen llamada.

let menu = [base, tools, reloj, webs, medios, radio, twitch, youtube, streaming, juegos, minecraft, comms, redes];
try{console.log('Imagen: '+ menu[establecido]())
} catch { console.log('Atencion. El ID fue reestablecido.')
	  localStorage.setItem('valor', 0)}
	
// ================================================================================================================================= //

console.log('Estructura Javascript conectada con éxito.-')
