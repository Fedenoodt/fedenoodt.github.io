console.log(`Estructura Javascript conectada con éxito.-`);

// ======================================================================================================================================= //

let cabeza = `
<!DOCTYPE html>
<html>
<head>
	<title>BHSIAI</title>
	<link rel="stylesheet" type="text/css" href="estiloBHSIAI.css">
	<meta charset="utf-8" name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>



</body>
</html>
`;

var timeDisplay = document.getElementById("time");

function refreshTime() {
  var dateString = new Date().toLocaleString("en-US", {timeZone: "America/Buenos_Aires"});
  var formattedString = dateString.replace(", ", " - ");
  timeDisplay.innerHTML = formattedString;
}

let cabezal = `	
<section class="home">
    <div class="in-flex">
        <div id="header">
            <a href="https://fedenoodt.github.io/798326_Epsilon/BHSIAI.html#top" target="_blank"><img class="Emblema" src="Emblema.png"></a>
            <div class = "atajos">
                <a><h2>${setInterval(refreshTime, 1000)}</h2></a>
                <a class = "imgAtajos" href="https://github.com/Fedenoodt/I-Black-Hawk-Security-Informatics-Anonymous-Incorporation" target="_blank"><img class="imgAtajos" src="Shield-PNG-Photos.png"></a>
                <a class = "imgAtajos" href="https://github.com/Fedenoodt/fedenoodt.github.io/tree/gh-pages" target="_blank"><img class="imgAtajos" src="768px-Settings_(iOS).png"></a>
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
		    <li class="listaHorizontal"><a href="https://fedenoodt.github.io/798326_Epsilon/BHSIAIHerramientas.html">M&aacutes herramientas...</a></li>
		</ul>
		<hr />
		<h2>Links de acceso</h2>
		<ul>
		    <li><a href="https://plataforma.coderhouse.com/cursos" target="_blank">Coder House - Plataforma E-Learning</a>></li>
		    <li><a id = "webs" href=${webs()}>P&aacute;ginas Especiales</a>></li>
		    <li><a href="https://www.youtube.com/playlist?list=PLOJvby8Q_tfGshu5XTZ23OWK8cRft5F8m" target="_blank">Jedi Order Playlist</a>></li>
		    <li><a href="https://fedenoodt.github.io/798326_Epsilon/BHSIAIMediosAudiovisuales.html">Medios audiovisuales</a>></li>
		    <li><a href="https://fedenoodt.github.io/798326_Epsilon/BHSIAIComunicaciones.html">Comunicaciones</a>></li>
		    <li><a href="https://fedenoodt.github.io/798326_Epsilon/BHSIAIRedesSociales.html">Redes Sociales</a>></li>
		</ul>
		<br />

	    </div>
	</section>
	`;
	document.body.appendChild(cuerpo);
}

base()

function webs () {
    let cuerpo = document.createElement("div");
    cuerpo.innerHTML = `
    ${cabezal}
    <div class="in-flex">
			<h2>P&aacute;ginas Especiales</h2>
			<ul>
				<li><a href="https://fedenoodt.github.io/Pagina_personal/vida/inicio.html" target="_blank">Pagina Oficial de Fedenoodt</a>></li>
				<li><a href="https://fedenoodt.github.io/Pagina_personal/vida/nexoGrupote.html" target="_blank">Nexo Grupote</a>></li>
			 	<li><a href="https://fedenoodt.github.io/798326_Epsilon/BHSIAI.html#top">Volver</a><<</li>
			</ul>
		</div>


	</section>
    `;
    document.body.appendChild(cuerpo);
}

// ======================================================================================================================================= //

console.log(`Ejecución de Javascript finalizada.-`)