// ◄ Las imagenes son cada una de las proyecciones que hace las páginas en funciones ►

let cabezal = `	
<section class="home">
    <div class="in-flex">
        <div id="header">
            <a href="https://fedenoodt.github.io/798326_Epsilon/BHSIAI.html#top" target="_blank"><img class="Emblema" src="https://fedenoodt.github.io/798326_Epsilon/Emblema.PNG"></a>
            <div class = "atajos">
                <a><h2>setInterval(giraHoras, 1000)</h2></a>
                <a class = "imgAtajos" href="https://github.com/Fedenoodt/I-Black-Hawk-Security-Informatics-Anonymous-Incorporation" target="_blank"><img class="imgAtajos" src="https://fedenoodt.github.io/798326_Epsilon/Shield-PNG-Photos.png"></a>
                <a class = "imgAtajos" href="https://github.com/Fedenoodt/fedenoodt.github.io/tree/gh-pages" target="_blank"><img class="imgAtajos" src="https://fedenoodt.github.io/798326_Epsilon/768px-Settings_(iOS).png"></a>
                <script src = "hora.js"></script>
            </div>
            <br />
            <h1>Nexo estratégico</h1>
            <br />
            <h1>Black Hawk Security Informatics Anonymous Incorporation</h1>
            <hr />		
                <ul>
                    <li class="listaHorizontal"><div><a href="https://fedenoodt.github.io/Pagina_personal/PyC/proyectoEE.html#nota5" target="_blank"><p class = "notGood">Receso de urgencia: 1/1 [ 04-10-2022 ]</p></a></div></li>
                    <li class="listaHorizontal"><div><a href="https://github.com/Fedenoodt/JavaScript/blob/main/Notas.txt" target="_blank"><p class = "good">Incorporaci&oacute;n de contenidos JavaScript seg&uacute;n jornada anual: <br />Tiempo transcurrido: 56.2%. <br />Lectura oficial de contenido: 100.00%. <br />Incorporaci&oacute;n pr&aacute;ctica de contenido: 33.33%.</p></a></div></li>
                    <li class="listaHorizontal"><div><a href="https://plataforma.coderhouse.com/cursos/44465/javascript" target="_blank"><p class = "good">Clases Javascript de Coder House: 12/17 (70.6%). <br /> <!--[ALERTA DE AUSENCIA] <br />--> Asistencias en 90.0%. </p></a></div></li>
                </ul>
        </div>
    </div>
    <hr />
    <hr />
    <hr />`;

function base () {
	let cuerpo = document.createElement("div");
	cuerpo.innerHTML = `
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
		    <li class="listaHorizontal"><a onclick = pendiente(conversor('1'))>M&aacutes herramientas...</a></li>
		</ul>
		<hr />
		<h2>Links de acceso</h2>
		<ul>
		    <li><a href="https://plataforma.coderhouse.com/cursos" target="_blank">Coder House - Plataforma E-Learning</a>></li>
		    <li><a id  = "01" onclick = pendiente(conversor('2'))>P&aacute;ginas Especiales</a>></li>
		    <li><a href="https://www.youtube.com/playlist?list=PLOJvby8Q_tfGshu5XTZ23OWK8cRft5F8m" target="_blank">Jedi Order Playlist</a>></li>
		    <li><a onclick = pendiente(conversor('3'))>Medios audiovisuales</a>></li>
		    <li><a  onclick = pendiente(conversor('4'))>Comunicaciones</a>></li>
		    <li><a  onclick = pendiente(conversor('5'))>Redes Sociales</a>></li>
		</ul>
		<br />

	    </div>
	</section>
	`;
	document.body.appendChild(cuerpo);
    return cuerpo
// 	puente(websID, webs)
}

function tools () {
    let cuerpo = document.createElement("div");
    cuerpo.innerHTML = `
    ${cabezal}
    <div class="in-flex">
    <h2>Herramientas</h2>
    <ul>
        <li><a href="https://fedenoodt.github.io/798326_Epsilon/BHSIAIObsoletos.html">Accesos directos obsoletos</a>></li>
        <li><a href="https://translate.google.com.ar/" target="_blank">Traductor de Google</a>></li>
        <li><a href="https://www.google.com.ar/maps/@-34.607613,-58.4515826,15z" target="_blank">Google Maps</a>></li>
        <li><a href="https://www.ilovepdf.com/es/html-a-pdf" target="_blank">Convertor HTML a PDF</a>></li>
        <li><a href="https://www.y2mate.com/es/youtube-mp3/sNjWpZmxDgg" target="_blank">Convertor Youtube a MP3</a>></li>
        <li><a href="https://workspace.google.com/intl/es-419/products/forms/?utm_source=google&utm_medium=cpc&utm_campaign=latam-AR-all-es-dr-bkws-all-all-trial-e-dr-1011272-LUAC0011853&utm_content=text-ad-none-any-DEV_c-CRE_479426435746-ADGP_Hybrid%20%7C%20BKWS%20-%20EXA%20%7C%20Txt%20~%20Forms-KWID_43700057710499709-kwd-10647024857&utm_term=KW_google%20forms-ST_google%20forms&gclid=Cj0KCQjwkruVBhCHARIsACVIiOwoV_-s-dU6S2iarog5B7sprTXCVZSfzhnnItRt9ZoVj11ckd869ywaAk1fEALw_wcB&gclsrc=aw.ds" target="_blank">Google Formularios</a>></li>
        <li><a href="https://fedenoodt.github.io/Pagina_personal/screenToner.png" target="_blank">Imagen para arreglar color de pantalla</a>></li>
        <li><a href="about:blank" target="_blank">P&aacutegina en blanco</a>></li>
        <li><a href="https://carto.maps.arcgis.com/apps/CEWebViewer/viewer.html?3dWebScene=e87eb53174ab4ba09026e90e1d7c6557" target="_blank">Galaxia Star Wars</a>></li>
        <li><a href="https://imagen.online-convert.com/es/convertir-a-png" target="_blank">Imagen PNG transparente</a>></li>
        <li><a href="https://www.site24x7.com/es/tools/selector-de-codigo-color.html" target="_blank">Detector RGB de imagen</a>></li>
        <li><a href="https://rgbacolorpicker.com/" target="_blank">Selector paleta RGB</a>></li>
        <li><a href="https://ezgif.com/webp-to-gif" target="_blank">Convertidor WEBP a GIF</a>></li>
        <li><a href="http://sps.fibertel.com.ar/speedtest/">Speedtest Fibertel</a>></li>
        <li><a href="https://www.speedtest.net/es">Speedtest Ookla</a>></li>
        <li><a href="https://fedenoodt.github.io/798326_Epsilon/BHSIAIPruebas.html">Zona de pruebas web</a>></li>
        <li><a href="https://c.tenor.com/2wR9-9cmrjMAAAAC/ahora-vengo-hernan-drago.gif">Ahora vengo</a>></li>
        
        
        <li><a onclick = pendiente(conversor('0'))>Volver</a><<</li>
    </ul>
</div>
</section>
`;
document.body.appendChild(cuerpo);

}

function webs () {
    let cuerpo = document.createElement("div");
    cuerpo.innerHTML = `
    ${cabezal}
    <div class="in-flex">
			<h2>P&aacute;ginas Especiales</h2>
			<ul>
				<li><a href="https://fedenoodt.github.io/Pagina_personal/vida/inicio.html" target="_blank">Pagina Oficial de Fedenoodt</a>></li>
				<li><a href="https://fedenoodt.github.io/Pagina_personal/vida/nexoGrupote.html" target="_blank">Nexo Grupote</a>></li>
			 	<li><a onclick = pendiente(conversor('0'))>Volver</a><<</li>
			</ul>
		</div>


	</section>
    `;
    document.body.appendChild(cuerpo);
    
}

function medios () {
    let cuerpo = document.createElement("div");
    cuerpo.innerHTML = `
    ${cabezal}
    <div class="in-flex">
        <h2>Medios audiovisuales</h2>
			<ul>
				<li><a href="https://fedenoodt.github.io/798326_Epsilon/BHSIAIRadio.html">Radio</a>></li>
				<li><a href="https://fedenoodt.github.io/798326_Epsilon/BHSIAITwitch.html">Twitch</a>></li>
				<li><a href="https://fedenoodt.github.io/798326_Epsilon/BHSIAIYoutube.html">Youtube</a>></li>
				<li><a href="https://fedenoodt.github.io/798326_Epsilon/BHSIAIStreaming.html">Streaming</a>></li>
				<li><a href="https://fedenoodt.github.io/798326_Epsilon/BHSIAIJuegos.html">Juegos</a>></li>
				<li><a onclick = pendiente(conversor('0'))>Volver</a><<</li>
			</ul>
		</div>
	</section>
    `;
    document.body.appendChild(cuerpo);
    
}

function comms () {
    let cuerpo = document.createElement("div");
    cuerpo.innerHTML = `
    ${cabezal}
    <div class="in-flex">
			<h2>Comunicaciones</h2>
			<ul>
				<li><a href="https://web.telegram.org/#/im" target="_blank">Telegram</a>></li>
				<li><a href="https://web.whatsapp.com/" target="_blank">Whatsapp</a>></li>
				<li><a onclick = pendiente(conversor('0'))>Volver</a><<</li>
			</ul>
		</div>
	</section>
    `;
    document.body.appendChild(cuerpo);
}

function redes () {
    let cuerpo = document.createElement("div");
    cuerpo.innerHTML = `
    ${cabezal}
    <div class="in-flex">
			<h2>Redes Sociales</h2>
			<ul>
				<li><a href="https://fedenoodt.github.io/798326_Epsilon/BHSIAI.html"><a href="https://www.linkedin.com/in/federico-noodt-molins-182a30134/" target="_blank">LinkedIn Fedenoodt</a></a>></li>
				<li><a href="https://fedenoodt.github.io/798326_Epsilon/BHSIAI.html"><a href="https://www.facebook.com/" target="_blank">Facebook</a></a>></li>
				<li><a href="https://fedenoodt.github.io/798326_Epsilon/BHSIAI.html"><a href="https://www.instagram.com/?hl=es-la" target="_blank">Instagram</a></a>></li>
				<li><a href="https://fedenoodt.github.io/798326_Epsilon/BHSIAI.html"><a href="https://twitter.com/home" target="_blank">Twitter</a></a>></li>
				<li><a onclick = pendiente(conversor('0'))>Volver</a><<</li>
			</ul>
		</div>
	</section>
    `;
    document.body.appendChild(cuerpo);
}