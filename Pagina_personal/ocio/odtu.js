const closing = '<h1 class="warning">ADVERTENCIA: El servidor cerrará pronto.</h1>';
const offline = '<h1 class="warning">ADVERTENCIA: El servidor está cerrado.</h1>';
const operative = '<h1 class="online"> El servidor está operando.</h1>';
const restarting = '<h1 class="warning">ADVERTENCIA: El servidor se reiniciará pronto.</h1>';
const sleepAFK = '<h1 class="sleeping"> ▼▼ fedenoodt está durmiendo AFK en su camita Zzz--..... Pero volverá ▼▼</h1>';
const sleepOpen = '<h1 class="sleeping"> ▼▼ fedenoodt está durmiendo. Cuando vuelva, abre el servidor ▼▼</h1>';
const bussyBack = '<h1 class="bussy"> ▬ fedenoodt está ocupado haciendo cosas en otro lado, pero va a volver... ▬</h1>';
const online = '<h3 class="online">fedenoodt está en línea.</h3>';
const eating = '<h3 class="online">fedenoodt está en un comedor.</h3>';

const inactiveSERV = '<h3>INACTIVA</h3>';
const closingSERV = '<h1 class="warning">ADVERTENCIA: El servidor cerrará pronto.</h1>';
const restartingSERV = '<h1 class="warning">ADVERTENCIA: El servidor se reiniciará pronto.</h1>';
const onlineSERV = '<h3 class="online">El servicio está online.</h3>';
const offlineSERV = '<h3 class="online">El servicio está offline.</h3>';


const lan = '63854';

const active = 1;

const status = bussyBack;

const number = '25.58.113.35:';
const IPclosed = 'CERRADA';
const fullNumber = number + lan;


function manager (tag, status) {
    let toChange = document.getElementById(tag);
    toChange.innerHTML = status;
    consoleLogSecure(tag, ';', status)
}
if (active == 1) { 
    manager('ip', fullNumber)
    manager('lobby', status)
} else if (active == 0) { 
    manager('ip', IPclosed)
    manager('lobby', offline)
}
    
manager('server', onlineSERV)

const index = `
            <section class = "home">
                <div class="in-flex">
                    <center>
                        <img class="slFlag" src="https://fedenoodt.github.io/Pagina_personal/Organizacion_dispar_tierras_Unidas.png"><a href = "https://github.com/Fedenoodt/fedenoodt.github.io/tree/gh-pages/Pagina_personal/ocio" target="_blank"><img class="imgAtajos" src="https://fedenoodt.github.io/Pagina_personal/768px-Settings_(iOS).png"></a><h1>Organizaci&oacute;n dispar de tierras unidas</h1>
                        <h2>Direcci&oacute;n IP:</h2>
                        <h3 id = "ip"></h3><br /><br />
                        <br /><hr /><br />

                        <div id = 'lobby'></div>
                        <br /><hr /><br />
                        <br /><hr /><br />
                        <ul>
                            <li class="listaHorizontal"><a href=""><div class="buttonContainer" id="default" onclick = targeting("metroCuadrado")><h5> Exploraci&oacute;n, sus m&eacute;todos, y <br/>Patr&oacute;n Big Square Bang </h5></div></a></li>
                            <li class="listaHorizontal"><a href=""><div class="buttonContainer" id="default" onclick = targeting("hamachi")><h5> Como conectarse <br/>v&iacute;a hamachi </h5></div></a></li>
                            <li class="listaHorizontal"><a href=""><div class="buttonContainer" id="default" onclick = targeting("skin")><h5> Mis recomendaciones <br/>para tu skin </h5></div></a></li>
                            <li class="listaHorizontal"><a href=""><div class="buttonContainer" id="default" onclick = targeting("conectarse")><h5> Como conectarse <br/>a nuestro sistema </h5></div></a></li>
                            <li class="listaHorizontal"><a href=""><div class="buttonContainer" id="default" onclick = targeting("naciones")><h5> Las naciones </h5></div></a></li>
                            <li class="listaHorizontal"><a href="https://fedenoodt.github.io/Pagina_personal/ocio/La_Fortaleza/IPLaFortaleza.html" target="_blank"><div class="buttonContainer" id="fortress" target="_blank"><h5> La Fortaleza </h5></div></a></li>
                            <li class="listaHorizontal"><a href=""><div class="buttonContainer" id="default" onclick = targeting("cuadrantes")><h5> La Guerra por <br/>cuadrantes </h5></div></a></li>
                            <li class="listaHorizontal"><a href=""><div class="buttonContainer" id="default" onclick = targeting("coordenadas")><h5> Libro de <br/>coordenadas </h5></div></a></li>
                            <li class="listaHorizontal"><a href="https://lc-public.fra1.cdn.digitaloceanspaces.com/optimized/2X/7/75fe01b1bcb31d3a1952bb699b016cb4102bb58b_2_739x748.png" target="_blank"><div class="buttonContainer" id="default"><h5> Tradeos de <br/>aldeanos </h5></div></a></li>
                            <li class="listaHorizontal"><a href="https://www.planetminecraft.com/banner/" target="_blank"><div class="buttonContainer" id="default"><h5> Creador de <br/>estandartes </h5></div></a></li>
                        </ul>

                </center>
            </div>
        </section>`;

const RiskietRacer55 = `
        <section class = "home">
            <div class="in-flex">
                <center>
                    <h1>Naci&oacute;n de RiskietRacer55</h1>
                    </br></br></br></br>
                    <a class = "volver" href="" onclick = targeting("index")><div class="buttonContainer" id="default"><h5>Volver al<br />Inicio</h5></div></a>
                    <h3></h3>
                    </br></hr></br>
                    <h3>No hay mucho para decir. Esta es la historia de agus, incierto el futuro es...
                        </h3>
                    
            
                </center>
            </div>
        </section>`;

const conectarse = `
        <section class = "home">
            <div class="in-flex">
                <center>
                    <a class = "volver" href="" onclick = targeting("index")><div class="buttonContainer" id="default"><h5>Volver al<br />Inicio</h5></div></a>
                    <h1>Como conectarse...</h1>
                    <h3>Acá te vengo a explicar como conectarte a nuestra red de Minecraft, es muy sencillo.</h3>
                    </br></hr></br>
                    <h3>Consiste en muy pocos pasos. Para empezar tenés que tener en cuenta que tenés que tener Java al d&iacute;a, para esto, entr&aacute;s a la 
                        <a href="https://www.java.com/es/download/ie_manual.jsp" target="_blank">web de Java</a>, le das al bot&oacute;n grande que dice descargar Java, eso te va a descargar los complementos de la 
                        &uacute;ltima versi&oacute;n, eso que descargaste, lo pinchas con doble clic, y te va a abrir un instalable. Es muy probable que ya tengas instalado Java por otra cosa, 
                        as&iacute; que te va a decir que desinstales la versi&oacute;n obsoleta, y reinstales por la nueva. Vas dando en siguiente, dejando que el proceso fluya, y listo 
                        (Si no lo ten&iacute;as instalado, no ten&eacute;s instalado, no ten&eacute;s que pasar por eso, instalas directamente).<br/><br/><br/>
                        Teniendo el Java ya, y supongo que el Launcher de Minecraft instalado, si no and&aacute; a <a href="https://www.minecraft.net/es-es" target="_blank">la web de Microsoft</a> y ponelo.<br/>
                        Una vez hecho esto, preguntale a fede que versi&oacute;n de Minecraft van a jugar para instalarla, y la instal&aacute;s. <br/><br/>
                        Una vez hayas verificado que tu Minecraft funcione corectamente, te aconsejo si sobra tiempo optimizarlo para que funcione lo mejor posible en tu dispositivo. Y ahora toca instalar otro 
                        dispositivo concocido, que es <a href="" onclick = targeting("hamachi") target="_blank">Hamachi</a>. En esa web esta el link de descarga. es una descarga de lo m&aacute;s habitual, 
                        instalaci&oacute;n f&aacute;cil. <br/><br/>
                        Es muy probable que fede te pida Optifine, para esto, vas a la <a href="https://optifine.net/downloads" target="_blank">web</a>, le das al bot&oacute;n que dice "mostrar todas las versiones", 
                        y seleccionas la misma que en Minecraft.<br/><br/>
                        Ahora, por &uacute;ltimo, necesito toda tu atenci&oacute;n. Hamachi te abri&oacute; una ventanita que parece un telefono, en la que hay un bot&oacute;n de encendido. Dale a ese bot&oacute;n.
                        Vas a necesitar hacerte con un usuario de LogMeIn Hamachi, hacelo en un momento, acá no hay nada de pago. <br/> Una vez hecho eso... ¿Te acord&aacute;s de la 
                        <a href="" onclick = targeting("hamachi") target="_blank">web que te d&iacute; de Hamachi</a>, que no fue directo al link de descarga? Bueno, entrá ahi que hay un 
                        usuario y contraseña. Ese contacto lo usas para, en la aplicaci&oacute;n, darle al bot&oacute;n <b>"Unirse a una red existente"</b>, y registrar esa cuenta.<br/> Esa cuenta es nada 
                        mas ni menos que el canal de Hamachi donde se transmite la partida de juego. <br/><br/> Una vez ya est&eacute;s registrado, ya est&aacute;s mas cerca de jugar.<br/>
                        Abr&iacute; Minecraft → Multiplayer → Te va a salir una advertencia, le das que si → Agregar servidor → "El nombre que vos quieras", y la direcci&oacute;n IP que se cambia a diario en nuestra 
                        <a href="" onclick = targeting("index")>P&aacute;gina Principal</a>.<br/><br/><br/>
                        <div class="volver"><a href="#top"><div class="buttonContainer"><h5>↑</h5></div></a></div>Play... Y ya estar&iacute;as jugando ☻
                        </h3>
                    
            
                </center>
            </div>
        </section>`;

const coordenadas = `
        <section class = "home">
            <div class="in-flex">
                <center>
                    <a class = "volver" href="" onclick = targeting("index")><div class="buttonContainer" id="default"><h5>Volver al<br />Inicio</h5></div></a>
                    <h1>Libro de coordenadas</h1><a href = "https://github.com/Fedenoodt/fedenoodt.github.io/edit/gh-pages/Pagina_personal/ocio/coordenadas.html" target="_blank"><img class="imgAtajos" src="https://fedenoodt.github.io/Pagina_personal/768px-Settings_(iOS).png"></a>
                    <br/><br/><br/><br/>
                    <h3>Este es el libro de coordenadas general de la Organizaci&oacute;n dispar de Tierras Unidas. Aqu&iacute; se almacena toda la informaci&oacute;n del mundo.</h3>
                    </br></hr></br>
                    <div>
                    <h1>Seed: 3049658686440718873</h1>
                    </div>
                    <div>
                    <h3>
                    <hr /><br />
                    Memoria temporal de 5 coordenadas:
                    <br /> : 
                    <br /> : 
                    <br /> : 
                    <br /> : 
                    <br /> : 
                    <br /><hr /><br />

                    Zonas:
                    [(Radio de 10 bloques de 0 - 0)] Spawn
                        </h3>

                    </div>
                    </br></hr></br>
                    <div><img class="slFlag" src="https://fedenoodt.github.io/Pagina_personal/Swerterland.png"><h1>Swerterland</h1>
                    </br></hr></br>
                    <h3>Posiciones estratégicas: </h3>
                    </br></hr></br>
                        <h3><ul>
                            <li>[2358 63 1987] Base Cero Basti&oacute;n “Shockplace” de Swerterland</li>
                            <li>[770 103 3665] Complejo minero Das Rheingold</li>
                            <li>[2870 79 -2228] Fuerte Militar Cero "Red Clover" de Swerterland</li>
                        </ul></h3>
                    </div>
                    
            
                </center>
            </div>
        </section>`;

const cuadrantes = `
        <section class = "home">
            <div class="in-flex">
                </br></br>
                    <a class = "volver" href="" onclick = targeting("index")><div class="buttonContainer" id="default"><h5>Volver al<br />Inicio</h5></div></a>
                    
                    <h3>La Guerra de Cuadrantes es lo que historicamente le ha dado la muerte a muchas naciones en este mundo. <br/> Es un sistema de conflicto entre naciones que suerguió a 
                    raíz de tener el cinturón apretado jeje. Una nación muy antigüa una vez le planteó cara a otra, para robarle un cuadrante de su territorio a través de la Tabla de las 
                    normas.</h3>
                    <br/></hr><br/>
                    <h3>
                        La <a href="" onclick = targeting("tablaNormas") target="_blank">Tabla de normas</a> es un sistema de normas que conforma lo que es una batalla, en la que quién  sale vencedor, se queda con un cuadrante.
                        Es decir, el cuadrante X2-Z1 le pertenece a pepe, juanito lo venció, y se quedo con esa parcela de 2000x2000 para su nación.<br/>
                        Esta "guerra" se hace desde una partida de &Uacute;ltimo equipo en pie/&Uacute;ltimo jugador en pie, dentro del cuadrante.<br/><br/>
                        <a href="https://fedenoodt.github.io/Pagina_personal/Cartograf%C3%ADa_internacional.png"target="_blank">Este es el mapa de actualidad de la posici&oacute;n de las naciones:<br/><img src="https://fedenoodt.github.io/Pagina_personal/Cartograf%C3%ADa_internacional.png"></a>
                        </h3>
                       
            </div>
        </section>`;

const hamachi = `
        <section class = "home">
          <center>
            <div class="in-flex">
                    <a class = "volver" href="" onclick = targeting("index")><div class="buttonContainer" id="default"><h5>Volver al<br />Inicio</h5></div></a>
                    <h1>Dirección Hamachi</ h1>
                    <h3>ODTU1192_01</h3>
                    <h3>*bostadecaballo*</h3></br></br>
                    <div id = 'server'><h3 class="online">El servicio está online.</h3></div>

                    </br></hr></br>
                    <h3>Link de descarga: <a href="https://www.vpn.net/">https://www.vpn.net/</a></h3>
                    
            
                </center>
            </div>
        </section>`;

const hipotesisMetroCuadrado = `
            <section class = "home">
                <div class="in-flex">
                     <center>
                        <a class = "volver" href="" onclick = targeting("index")><div class="buttonContainer" id="default"><h5>Volver al<br />Inicio</h5></div></a>
                        <h1>Hipótesis Metro Cuadrado</h1>
                        <h3>22 de Junio de 2022, Miércoles. Sol minecrafteano número 151.</h3>
                        <h3>Metro Cuadrado resultó muy efectivo para localizar los focos problematicos de su misión. Se puede encontrar múltiples biomas por cuadrantes siguiendo una política sumamente nómade.
                            El requisíto imperioso para hacer que esto funcione correctamente es seguir estrictamente la línea de exploración señalada a completar.
                            Una formación que puede resultar muy efectiva dado que los cuadrantes no son muy grandes, es bordear cerca de los límites, y hacer cruz por dentro. <br/>
                            Con respecto a las distancias y los tiempos, estaban medio defasadas las medidas que pedía Metro Cuadrado, porque en dos soles se puede llegar a 
                            cubrir un cuadrante perfectamente, por ende, con los 36 cuadrantes a explorar, 72 soles habría sido un mínimo raspante para encontrar todos los cuadrantes.<br/>
                            Aún asi, detecté durante la jornada que 16 cuadrantes en una partida que recién comienza (dos anillos alrededor de 0-0), sería prácticamente suficiente para encontrar todos los biomas 
                            de la partida. Lo cuál puedo asegurar que es suficiente para darle seguridad a este proyecto, y determinarlo como sumamente efectivo contra la desinformación minecrafteana.<br/><br/><br/><br/>
                            Les presento, dando la firma de que funciona, a el Patrón Big Square Bang.<br/><br/><br/>
                            <img class = "firma" src="https://fedenoodt.github.io/798326_Epsilon/TT7546GS761585_TG.png"><br/>
                            Aclaración: Federico Noodt
                        </h3>
                    
            
                </center>
            </div>
        </section>`;

const metroCuadrado = `
        <section class = "home">
          <center>
              <div class="in-flex">
                    <img class="logo" id ="minimalExpand_200" src="https://fedenoodt.github.io/Pagina_personal/Metro_Cuadrado.png"><a class = "volver" href="" onclick = targeting("index")><div class="buttonContainer" id="default"><h5>Volver al<br />Inicio</h5></div></a>
                    <a class = "imgAtajos" href="" onclick = targeting("metroCuadrado") target="_blank"><img class="imgAtajos" src="https://fedenoodt.github.io/Pagina_personal/768px-Settings_(iOS).png"></a>
                    <a class = "imgAtajos" href="https://fedenoodt.github.io/Pagina_personal/Exploracion_talla%231%5BNUEVO_MUNDO%5D.png" target="_blank"><img class="imgAtajos" src="https://fedenoodt.github.io/Pagina_personal/Map.png"></a>
                    <h1>Proyecto Metro Cuadrado</h1>
<p><h4>El proyecto Metro Cuadrado presume ser una exclamación de la eficiencia de la exploración por cuadrantes analizado en el Condominio de La Fortaleza.<br /></ h4>
    <h5>Es decir, es un proyecto para demostrar, que la teoría que se puede ver <a href="https://fedenoodt.github.io/Pagina_personal/ocio/La_Fortaleza/maps.html" target="_blank">ACÁ</a>, 
        hecha en La Fortaleza, tiene un uso definitivamente eficaz y/o eficiente.<br />
    <br />
    ¿Como tengo pensado hacer eso?<br />
    Bueno. En este mundo voy a tener como misión principal cumplir con este proyecto, con la peculiaridad de que no va a haber una sola base, NO política sedentaria, SI política nómade. Lo que pase después 
    de que este se termine, queda a suerte de 
    la historia de ese mundo, pero la misión principal, es ganarle al proyecto Metro Cuadrado.</ h5>
<h4>Objetivo: Encontrar alrededor de 20 biomas diferentes, y 5 biomas especiales, en los primeros 36 cuadrantes alrededor de 0 0 (144.000 metros/bloques cuadrados) en menos de 2000 soles Minecrafteanos.</ h4>
                
<br /><hr /><br />
<ol>
    <div><li><h5>X1Z1: Bosque de abedules, pantáno, bosque, llanura, 4 aldeas, Ríos, Jungla esparcida, Jungla, Océano tibio, Océano tibio profundo, Savana, Naufragio, Llanuras de Girasol, Océano, Portal náufrago, 
        Colinas azotadas por el viento, Sabana azotada por el viento, Océano profundo, Templo Guardián, Pradera. <br />  
        ♦ Sol de 1ra exploración finalizada: 14 <br />  
        ♦ Analisis completos: 1 <br />   
        ♦ Biomas especiales: 0</h5></li></div>
    <div><li><h5>-X1Z1: Bosque de abedules, Bosque oscuro, Bosque azotado por el viento, Océano frío, Océano profundo frío, Taiga, Llanura nevada, Río nevado, Taiga nevada, Bosque, Templo guardián, Ríos, 1 Aldea, 
        Playa, Playa nevada, Océano congelado, Playa de piedras, Iglú, Llanuras nevadas, Picos de hielo, Monumento, Océano tibio, Savana, Llanuras de Girasol, Océano, Taiga de crecimiento de abeto viejo, Portal 
        náufrago. <br />  
        ♦ Sol de 1ra exploración finalizada: 25 <br />  
        ♦ Analisis completos: 1 <br />   
        ♦ Biomas especiales: 0</h5></li></div>
    <div><li><h5>X1-Z1: Pantano, Bosque, Ríos, Llanuras, Colinas azotadas por el viento, Antiguo bosque de abedules, Bosque azotado por el viento, Bosque de abedules, Playa, 3 aldeas, Océano frío, Océano, Océano 
        profundo, Templo Guardián, Playa de piedras, Pradera, Portal náufrago, Savanna azotada por el viento, Naufragio. <br /> 
        ♦ Sol de 1ra exploración finalizada: 31 <br />  
        ♦ Analisis completos: 1 <br />   
        ♦ Biomas especiales: 0</h5></li></div>
    <div><li><h5>-X1-Z1: Bosque de abedules, Ríos, Bosque oscuro, Bosque azotado por el viento, Taiga de crecimiento de abeto viejo, Playa, Océano frío, Océano frío profundo, Colinas azotadas por el viento, 
        Bosque, Taiga, Océano, Océano profundo, llanura, Portal náufrago, Océano tibio, Savanna, Playa de piedras, Océano cálido, Corales, 1 Aldea, Naufragio, Bosque florido, Jungla, Antiguo Bosque de abedules, 
        Antiguo bosque de abedules.<br /> 
        ♦ Sol de 1ra exploración finalizada: 40 <br />  
        ♦ Analisis completos: 1 <br />   
        ♦ Biomas especiales: 0</h5></li></div>
    <div><li><h5>X2Z1: Bosque, Ríos, Playa de piedras, Océano frío, Océano frío profundo, Monumento, Naufragio, Geoda oceanica, Playa, Llanuras, Taiga, Bosque de abedules, Portal náufrago, Llanuras de Girasol, 
        Bosque florido, 2 Aldeas, Prado, Arboleda, Taiga de crecimiento de pino viejo, Bosque oscuro, Monumento. <br />   
        ♦ Sol de 1ra exploración finalizada: 49 <br />  
        ♦ Analisis completos: 1 <br />   
        ♦ Biomas especiales: 0</h5></li></div>
    <div><li><h5>-X2Z1: Llanura nevada, Río congelado, Taiga nevada, Colinas de grava azotadas por el viento, Playa nevada, Océano congelado, Templo guardián, Océano frío, Océano, Arboleda, Monumento, Aldea fantasma, Bosque florido, Orilla pedregosa, Taiga de crecimiento de abeto viejo, Playa pedregosa, 3 Aldeas, Picos de hielo, Océano congelado profundo, Playa, Portal náufrago.<br />  
        ♦ Sol de 1ra exploración finalizada: 58 <br />   
        ♦ Analisis completos: 1 <br />   
        ♦ Biomas especiales: 0</h5></li></div>
    <div><li><h5>X2-Z1: Taiga, Ríos, Bosque, Océano frío, Naufragio, Océano frío profundo, Portal náufrago, Templo Guardián, CAMPOS DE SETAS, Playa pedregosa, Llanuras Bosque florido, Prado, Bosque de abedules, Jungla, Jungla esparcida, Playa, Océano tibio, Monumento, Océano tibio profundo, Geoda oceanica, Océano profundo, Océano, Bosque oscuro, Zona pedregosa, Antiguo bosque de abedules. <br />  
        ♦ Sol de 1ra exploración finalizada: 66 <br />  
        ♦ Analisis completos: 1 <br />   
        ♦ Biomas especiales: 1</h5></li></div>
    <div><li><h5>-X2-Z1: Bosque, Playa, Playa pedregosa, Océano frío, Naufragio, Llanuras, Laderas nevadas, Prado, Ríos, Arboleda, Picos de hielo, Antiguo bosque de abedules, Bosque de abedules, Jungla esparcida, Jungla de bamboo, 1 aldea, TIERRAS BALDÍAS BOSCOSAS, cuevas exuberantes,  DESIERTO, Corales, Océano caliente, Savanna, Océano tibio, Monumento, Océano, Océano profundo, Meseta de la savanna, PÁRAMOS. <br /> 
        ♦ Sol de 1ra exploración finalizada: 75 <br />  
        ♦ Analisis completos: 1 <br />   
        ♦ Biomas especiales: 3</h5></li></div>
    <div><li><h5>X1Z2: Océano tibio, Playa, Naufragio, Savanna, Llanuras, Jungla esparcida, Ríos, Jungla, Ciudad Monumento, Bosque, Playa pedregosa, TIERRAS BALDÍAS EROSIONADAS, PÁRAMOS, DESIERTO, TIERRAS BALDÍAS BOSCOSAS, Corales, Océano caliente, Portal náufrago, 3 Aldeas, Jungla de bamboo. <br />   
        ♦ Sol de 1ra exploración finalizada: 87 <br />  
        ♦ Analisis completos: 1 <br />   
        ♦ Biomas especiales: 4 </h5></li></div>
    <div><li><h5>-X1Z2: PÁRAMOS, Ríos, TIERRAS BALDÍAS EROSIONADAS, DESIERTO, Jungla, Pantano, Bosque, Casa de bruja, Savanna azotada por el viento, Taiga, Río congelado, Llanuras nevadas, Taiga nevada, Océano frío, Océano, Playa, Savanna, Océano tibio, Jungla esparcida, Jungla de bamboo, Aljibe del desierto, Océano caliente, Océano caliente profundo, Naufragio, Océano tibio profundo, Templo Guardián, Ciudad Monumento, Antiguo bosque de abedules, Bosque azotado por el viento, Savanna azotada por el viento. <br />  
        ♦ Sol de 1ra exploración finalizada: 93 <br />  
        ♦ Analisis completos: 1 <br />   
        ♦ Biomas especiales: 3</h5></li></div>
    <div><li><h5>X1-Z2: Llanuras, Ríos, Prado, Naufragio, Océano frío, Bosque de abedules, Bosque oscuro, Playa, Océano, Océano profundo, Antiguo bosque de abedules, Playa pedregosa, Taiga, Taiga de crecimiento de abeto viejo, Taiga de crecimiento de pino viejo, Portal náufrago, Océano frío profundo. <br />  
        ♦ Sol de 1ra exploración finalizada: 103 <br />  
        ♦ Analisis completos: 1 <br />   
        ♦ Biomas especiales: 0</h5></li></div>
    <div><li><h5>-X1-Z2: Llanuras, Ríos, Bosque, Savanna, Océano tibio, Océano tibio profundo, Océano caliente, Geoda oceanica, Prado, Taiga, Taiga de crecimiento de pino viejo, Bosque oscuro, Antiguo bosque de abedules, Llanuras de Girasol, Bosque florido, Naufragio, cuevas exuberantes. <br /> 
        ♦ Sol de 1ra exploración finalizada: 111 <br />  
        ♦ Analisis completos: 1 <br />   
        ♦ Biomas especiales: 0</h5></li></div>
    <div><li><h5>X2Z2: Ríos, Bosque, Llanuras, Prado, PISTAS NEVADAS, Playa, Playa pedregosa, bosque florido, Corales, Océano tibio, Océano caliente, Ciudad Monumento, DESIERTO, 3 Aldeas, Savanna, Meseta de savanna, Jungla esparcida, Jungla, TIERRAS BALDÍAS BOSCOSAS, Portal náufrago, PÁRAMOS, TIERRAS BALDÍAS EROSIONADAS. <br />   
        ♦ Sol de 1ra exploración finalizada: 123 <br />  
        ♦ Analisis completos: 1 <br />   
        ♦ Biomas especiales: 4</h5></li></div>
    <div><li><h5>-X2Z2: Río congelado, Taiga nevada, Llanuras nevadas, Taiga, Océano frío, Playa, Templo Guardián, Taiga de crecimiento de abeto viejo, Océano frío profundo, CAMPOS DE SETAS, Océano profundo, Ciudad Monumento, Pantano, Savanna azotada por el viento, Océano, Bosque, Océano congelado, Océano congelado profundo. <br />   
        ♦ Sol de 1ra exploración finalizada: 130 <br />  
        ♦ Analisis completos: 1 <br />   
        ♦ Biomas especiales: 1</h5></li></div>
    <div><li><h5>X2-Z2: Océano profundo, Océano, Playa, Bosque de abedules, Bosque, Playa pedregosa, Océano frío, Ríos, Llanuras, Taiga de crecimiento de pino viejo, Arboleda, Picos irregulares, Taiga de crecimiento de abeto viejo, Ciudad Monumento, Océano tibio, Océano tibio profundo, Geoda oceanica, Portal náufrago, Jungla, Naufragio, Savanna, 2 aldeas, Templo guardián. <br />  
        ♦ Sol de 1ra exploración finalizada: 139 <br />  
        ♦ Analisis completos: 1 <br />   
        ♦ Biomas especiales: 0</h5></li></div>
    <div><li><h5>-X2-Z2: Océano caliente, Corales, PÁRAMOS, TIERRAS BALDÍAS BOSCOSAS, Playa pedregosa, Jungla, Bosque, Jungla esparcida, Templo de la jungla, Savanna, DESIERTO, Océano, 3 Aldeas, Pirámide, Monumento, TIERRAS BALDÍAS EROSIONADAS, PICOS PEDREGOSOS, Jungla de bamboo. <br /> 
        ♦ Sol de 1ra exploración finalizada: 149 <br />  
        ♦ Analisis completos: 1 <br />   
        ♦ Biomas especiales: 5</h5></li></div>    
        <a href="" onclick = targeting("hipotesisMetroCuadrado") target="_blank"><div class="buttonContainer" id="default"><h5> Hipótesis temprana del proyecto </h5></div></a>
    <div><li><h5>X3Z1: <br />   
        Llanuras, bosque, Ríos, Playas, Antiguo bosque de abedules, Jungla esparcida, Jungla, Savanna, Manglar, Jungla de bamboo, Bosque de abedules, Bosque oscuro, Océano, Taiga, Prado. <br />  
        ♦ Sol de 1ra exploración comenzada: 4467 <br />  
        ♦ Sol de 1ra exploración finalizada: 4473 <br />  
        ♦ Analisis completos: 1 <br />   
        ♦ Biomas especiales: 0</h5></li></div>
    <div><li><h5>-X3Z1: <br />   
        ♦ Sol de 1ra exploración finalizada:  <br />  
        ♦ Analisis completos: 0 <br />   
        ♦ Biomas especiales: 0</h5></li></div>
    <div><li><h5>X3-Z1: <br />  
        ♦ Sol de 1ra exploración finalizada:  <br />  
        ♦ Analisis completos: 0 <br />   
        ♦ Biomas especiales: 0</h5></li></div>
    <div><li><h5>-X3-Z1: <br /> 
        ♦ Sol de 1ra exploración finalizada:  <br />  
        ♦ Analisis completos: 0 <br />   
        ♦ Biomas especiales: 0</h5></li></div>    
    <div><li><h5>X1Z3: <br />   
        ♦ Sol de 1ra exploración finalizada:  <br />  
        ♦ Analisis completos: 0 <br />   
        ♦ Biomas especiales: 0 </h5></li></div>
    <div><li><h5>-X1Z3: <br />   
        ♦ Sol de 1ra exploración finalizada:  <br />  
        ♦ Analisis completos: 0 <br />   
        ♦ Biomas especiales: 0 </h5></li></div>
    <div><li><h5>X1-Z3: <br />   
        ♦ Sol de 1ra exploración finalizada:  <br />  
        ♦ Analisis completos: 0 <br />   
        ♦ Biomas especiales: 0 </h5></li></div>
    <div><li><h5>-X1-Z3: <br />   
        ♦ Sol de 1ra exploración finalizada:  <br />  
        ♦ Analisis completos: 0 <br />   
        ♦ Biomas especiales: 0 </h5></li></div>
    <div><li><h5>X3Z2:  <br />  
        ♦ Sol de 1ra exploración finalizada:  <br />  
        ♦ Analisis completos: 0 <br />   
        ♦ Biomas especiales: 0</h5></li></div>
    <div><li><h5>-X3Z2:  <br />  
        ♦ Sol de 1ra exploración finalizada:  <br />  
        ♦ Analisis completos: 0 <br />   
        ♦ Biomas especiales: 0</h5></li></div>
    <div><li><h5>X3-Z2:  <br /> 
        ♦ Sol de 1ra exploración finalizada:  <br />  
        ♦ Analisis completos: 0 <br />   
        ♦ Biomas especiales: 0</h5></li></div>
    <div><li><h5>-X3-Z2: <br /> 
        ♦ Sol de 1ra exploración finalizada:  <br />  
        ♦ Analisis completos: 0 <br />   
        ♦ Biomas especiales: 0</h5></li></div>
    <div><li><h5>X2Z3: <br />   
        ♦ Sol de 1ra exploración finalizada:  <br />  
        ♦ Analisis completos: 0 <br />   
        ♦ Biomas especiales: 0</h5></li></div>
    <div><li><h5>-X2Z3: <br />  
        ♦ Sol de 1ra exploración finalizada:  <br />  
        ♦ Analisis completos: 0 <br />   
        ♦ Biomas especiales: 0</h5></li></div>
    <div><li><h5>X2-Z3: <br />  
        ♦ Sol de 1ra exploración finalizada:  <br />  
        ♦ Analisis completos: 0 <br />   
        ♦ Biomas especiales: 0</h5></li></div>
    <div><li><h5>-X2-Z3: <br /> 
        ♦ Sol de 1ra exploración finalizada:  <br />  
        ♦ Analisis completos: 0 <br />   
        ♦ Biomas especiales: 0</h5></li></div>
    <div><li><h5>X3Z3: <br />   
        ♦ Sol de 1ra exploración finalizada:  <br />  
        ♦ Analisis completos: 0 <br />   
        ♦ Biomas especiales: 0 </h5></li></div>
    <div><li><h5>-X3Z3: <br />  
        ♦ Sol de 1ra exploración finalizada:  <br />  
        ♦ Analisis completos: 0 <br />   
        ♦ Biomas especiales: 0</h5></li></div>
    <div><li><h5>X3-Z3: <br />  
        ♦ Sol de 1ra exploración finalizada:  <br />  
        ♦ Analisis completos: 0 <br />   
        ♦ Biomas especiales: 0</h5></li></div>
    <div><li><h5>-X3-Z3: <br /> 
        ♦ Sol de 1ra exploración finalizada:  <br />  
        ♦ Analisis completos: 0 <br />   
        ♦ Biomas especiales: 0</h5></li></div>
    <div><h5>ATENCIÓN:<br /> 
        Acá termina lo que respecta a los 36 cuadrantes correspondientes al Proyecto Metro Cuadrado. La exploración continua desde acá sin problema fuera de la jurisdicción del proyecto.</h5></div>

                    
            </div>
                </center>
            </div>
        </section>`;

const naciones = `
    <center>
        <section class = "home">
            <div class="in-flex">
                    <h1>La Organizaci&oacuten dispar de tierras unidas, y sus territorios</h1>
                    <br/><br/><br/>
                    <a class = "volver" href="" onclick = targeting("index")><div class="buttonContainer" id="default"><h5>Volver al<br />Inicio</h5></div></a>
                    <h3>Hablemos un poco de historia. Hace mucho tiempo que fede fue sectorizando la exploraci&oacute;n de los mundos Minecraft. Y con el tiempo fue surgiendo la idea de 
                        "Cuadrantes", secciones que miden 2000 bloques de ancho, 2000 bloques de largo, y la altura m&aacute;xima de Minecraft. Algo así como un Gran Chunk (16x16 bloques).<br/>
                        El tiempo pas&oacute;, y empez&oacute; a explorar as&iacute;.<br/>
                        Finalmente con el origen de Metro Cuadrado, se reconoci&oacute; a esta como una pr&aacute;ctica tediosa pero pr&aacute;ctica. A lo que luego se le sum&oacute; la idea de 
                        que estos, "Sectores" pod&iacute;an ser de lo m&aacute;s &uacute;tiles para formar naciones. Y así es como surgieron todos estos territorios de abajo, siendo la O.D.T.U. 
                        (Organizaci&oacute;n dispar de tierras unidas), una falsa ONU, las que concilia a todas estas tierras...
                    </h3>
                    <br /><hr /><br />
                    <br /><hr /><br />
                    <ul>
                        <li class="listaHorizontal"><a href="https://fedenoodt.github.io/Pagina_personal/ocio/swerterland.html" onclick = targeting("swerterland")><div class="buttonContainer" id="swerterland" id=""><h5> Swerterland </h5></div></a></li>
                        <li class="listaHorizontal"><a href="https://fedenoodt.github.io/Pagina_personal/ocio/noOnesLand.html" onclick = targeting("noOnesLand")><div class="buttonContainer" id="noOnesLand"><h5> Tierra de <br/>nadie </h5></div></a></li>
                        <li class="listaHorizontal"><a href="https://fedenoodt.github.io/Pagina_personal/ocio/RiskietRacer55.html" onclick = targeting("RiskietRacer55")><div class="buttonContainer" id="default"><h5> "Naci&oacute;n de <br/>RiskietRacer55" </h5></div></a></li>
                    </ul>
                    
            
                </center>
            </div>
        </section>`;

const noOnesLand = `
        <section class = "home">
            <div class="in-flex">
                </br></br>
                    <a class = "volver" href="" onclick = targeting("index")><div class="buttonContainer" id="default"><h5>Volver al<br />Inicio</h5></div></a>
                    <div id="noOnesLand">
                    <h1 style= "background-image: url('noOnesLand.png');">Tierra de Nadie</h1>
                    </br></br></br></br>
                    
                    <h3>La tierra de nadie. La zona peligrosa marcada por la Organizaci&oacute;n dispar de Tierras Unidas. ¿Porqu&eacute;? Bueno, porque aqui han trascendido los peores peligros de la humanidad.<br/>
                    Nada de lo que salga de ahi, puede ser bueno.</h3></div>
                    </br></hr></br>
                    <h3>Varios milenios antes de que Swerterland llegara a estas tierras hubo andanadas, y andanadas, y andanadas de guerras de otras naciones entre ellas. Dejaron destrozos, que 
                        fueron sanando con la erosi&oacute;n y el tiempo. Pero en una zona del mapa, siempre todos perdian todo, malas noticias era para quien se estacionara all&iacute;, un lugar del que la 
                        tierra se tragaba los cultivos, del que todas las estrategias eran vistas. Todo era tan malo que hasta los v&aacute;ndalos y bandidos se aprobechaban de los d&eacute;biles para robar y matar.
                        </br></br>
                        Luego de que el per&iacute;odo terminara, la ODTU lo declar&oacute; "Tierra de Nadie", y aconcej&oacute; a todo el mundo que evitara esa tierra sin ley, sin normas, para que no pasaran cosas malas.</br>
                        Esa zona no tiene ning&uacute;n punto de control. Excepto para... ejem... Quien quiera hacerse el malo muajajajaja.
                        </h3>
                    
            
                </center>
            </div>
        </section>`;

const skin = `
            <section class = "home">
                <div class="in-flex">
                    <div id = "header">
                        <a class = "volver" href="" onclick = targeting("index")><div class="buttonContainer" id="default"><h5>Volver al<br />Inicio</h5></div></a>
                        <h1>Recomendaciones para editar la skin</h1>
                        <h3>Das clic a una skin cualquiera, y tenés para editarla. La podés borrar al completo, customisarla, o buscar por ahi el editor que ellos tienen.</h3>
                        <a href="https://www.minecraftskins.net/" target="_blank"><div class="buttonContainer" id="default"><h1>Minecraft Skins</h1></div></a>
                        <h3>Skindex es bastante completa. Mucha gente sube skins, y ten&eacutes;s editor para hacer una skin.</h3>
                        <a href="https://www.minecraftskins.com/" target="_blank"><div class="buttonContainer" id="default"><h1>The Skindex</h1></div></a>
                    </div>
                </div>
            </center>
    </section>`;

const swerterland = `
        <section class = "home">
            <div class="in-flex">
                <center>
                    <a class = "volver" href="" onclick = targeting("index")><div class="buttonContainer" id="default"><h5>Volver al<br />Inicio</h5></div></a>
                    <img class="slFlag" src="https://fedenoodt.github.io/Pagina_personal/Swerterland.png"><h1>Swerterland</h1><img class="slWarFlag" src="https://fedenoodt.github.io/Pagina_personal/Bandera de guerra Swerterland.png">
                    <br/><br/><br/><br/>
                    <h3>Swerterland. Una naci&oacute;n guerrillera, que se apoya en la econom&iacute;a de su gran imperio.</h3>
                    </br></hr></br>
                    <h3>Una naci&oacute;n que si bien es muy mansa, opta mucho por la negociaci&oacute;n, tiene en su historia a dos banderas muy importantes. A mano izquierda ven la bandera nacional por
                        excelencia, pero a mano derecha, est&aacute; la bandera de las fuerzas armadas. Ya pueden juzgar de que intenciones van.<br/>
                        Cuenta con sus bases militares m&uacute;ltiples distribuidas por toda su naci&oacute;n, Shockplace como la m&aacute;s conocida, as&iacute; tambi&eacute;n como la Ciudad Capital Forgotten Gloom, y lugares varios donde reina la paz.
                        La bandera de guerra guarda mucho respeto, porque es la mas antigûa de la naci&oacute;n. Cuenta la leyenda de que se pueden agarrar dos trapos de cualquier lugar, y sentirse
                        identificado con ellos de solo quererlo. Pero la bandera nacional es identificada por la diplomacia, y a cordura a la hora de aplicar las normas como se debe. <br/> <br/>
                        Existen dos banderaas que son menos relevantes para la historia de la naci&oacute;n, pero importantes para la historia econ&oacute;mica, esos son los gremios, con sus franjas en las banderas.
                        <img class="slFlag" src="https://fedenoodt.github.io/Pagina_personal/Bandera Gremio Maderero de Swerterland.png">
                        <img class="slWarFlag" src="https://fedenoodt.github.io/Pagina_personal/Bandera Gremio Minero de Swerterland.png">
                        A mano derecha está el gremio minero, y a mano izquierda, el gremio madererero, quienes aportan recursos federales.
                        </h3>
                    
            
                </center>
            </div>
        </section>`;

const tablaNormas = `
        <section class = "home">
            <div class="in-flex">
                <center>
                <br/><br/>
                    <a class = "volver" href="" onclick = targeting("index")><div class="buttonContainer" id="default"><h5>Volver al<br />Inicio</h5></div></a>
                    
                    <h3>La Tabla de Normas esta compuesta de cinco grandes segmentos: Normas de puntualidad, Normas de retirada, Normas de propiedad, Normas de adquicisión, Normas del dr&aacute;gon
                        <br/>Te las explico...
                    </h3>
                    <br/></hr><br/>
                    <h3>
                        Las normas de puntualidad son:
                        <ol>
                            <li>Último jugador en pie: Solo quién sobreviva al combate, será declarado campeón.</li>
                            <li>Tiempo y forma: Si es declarada una guerra por cuadrantes, el equipo/jugador atacante cuenta con la virtud de elegír fecha y hora del ataque,
                                mientras que el equipo/jugador defensor, cuenta con la virtud de elegir el lugar dentro del cuadrante atacado, que quiera defender.<br/>
                                Por lógica, quién va a atacar a alguien, lo va a buscar a donde este.
                            </li>
                            <li>En caso que no se registre actividad de juego, durante el plazo de 5 dias seguidos (maratoneo) de las dos personas, no se puede efectuar 
                                ninguna guerra.</li>
                        </ol><br/>
                        ------------------------------------------                                          ------------------------------------------
                        <br/><br/>
                        La norma de retirada es muy sencilla. Si la persona durante la guerra, permanece fuera del cuadrante durante más de cinco minutos, gana el que esté en el lugar.
                        <br/><br/>
                        ------------------------------------------                                          ------------------------------------------
                        <br/><br/>
                        La norma de propiedad es muy sencilla. Si el/los ganadores de último equipo/jugador en pie mata a su oponente, tiene derecho a declarar propiedad sobre el 
                        territorio, pero no sobre los artículos que posee el/los perdedor/es. Los artículos deben guardarse en un cofre.
                        <br/><br/>
                        ------------------------------------------                                          ------------------------------------------
                        <br/><br/>
                        La norma de adquicisión es muy sencilla. Si el dueño de un cuadrante, ve a un extrangero robar recursos en su territorio, tiene total autorización de disparar 
                        a matar, y quedarse con todos sus artículos.
                        <br/><br/>
                        ------------------------------------------                                          ------------------------------------------
                        <br/><br/>
                        La norma del drag&oacute;n es muy sencilla. Todos los presidentes, reitero, TODOS los presidentes actuales deben estar presentes en la pelea del drag&oacute;n.
                        <br/><br/><br/><br/>
                        Esas son todas las normas.
                        </h3>
                    
            
                </center>
            </div>
        </section>`;

//=======================================================================================================================================================//

builder({'index': index, 'RiskietRacer55': RiskietRacer55, 'conectarse': conectarse, 'coordenadas': coordenadas, 'cuadrantes': cuadrantes, 'hamachi': hamachi, 'hipotesisMetroCuadrado': hipotesisMetroCuadrado, 'metroCuadrado': metroCuadrado, 'naciones': naciones, 'noOnesLand': noOnesLand, 'skin': skin, 'swerterland': swerterland, 'tablaNormas': tablaNormas})
