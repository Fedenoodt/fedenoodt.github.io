//import { main } as reloj from "https://fedenoodt.github.io/shelving/javascript/reloj.js";

//main()

const crepVespertinos = {'enero' : ['20:39', '20:39', '20:39', '20:39', '20:39', '20:39', '20:39', '20:39', '20:38', '20:38', '20:38', '20:38', '20:38', '20:37', '20:37', '20:37', '20:36', '20:36', '20:35', '20:35', '20:34', '20:34', '20:33', '20:33', '20:32', '20:31', '20:31', '20:30', '20:29', '20:28', '20:28'],
'febrero' : ['20:27', '20:26', '20:25', '20:24', '20:23', '20:22', '20:21', '20:20', '20:19', '20:18', '20:17', '20:16', '20:15', '20:14', '20:13', '20:12', '20:10', '20:09', '20:08', '20:07', '20:06', '20:04', '20:03', '20:02', '20:01', '19:59', '19:58', '19:57'],
'marzo' : ['19:55', '19:54', '19:53', '19:51', '19:50', '19:49', '19:47', '19:46', '19:45', '19:43', '19:42', '19:40', '19:39', '19:38', '19:36', '19:35', '19:34', '19:32', '19:31', '19:29', '19:28', '19:27', '19:25', '19:24', '19:22', '19:21', '19:20', '19:18', '19:17', '19:15', '19:14'],
'abril' : ['19:13', '19:11', '19:10', '19:09', '19:07', '19:06', '19:05', '19:04', '19:02', '19:01', '19:00', '18:58', '18:57', '18:56', '18:55', '18:53', '18:52', '18:51', '18:50', '18:49', '18:48', '18:46', '18:45', '18:44', '18:43', '18:42', '18:41', '18:40', '18:39', '18:38'],
'mayo' : ['18:37', '18:36', '18:35', '18:34', '18:33', '18:33', '18:32', '18:31', '18:30', '18:29', '18:28', '18:28', '18:27', '18:26', '18:26', '18:25', '18:24', '18:24', '18:23', '18:23', '18:22', '18:22', '18:21', '18:21', '18:20', '18:20', '18:19', '18:19', '18:19', '18:18', '18:18'],
'junio' : ['18:18', '18:18', '18:17', '18:17', '18:17', '18:17', '18:17', '18:17', '18:17', '18:17', '18:17', '18:17', '18:17', '18:17', '18:17', '18:17', '18:17', '18:17', '18:17', '18:18', '18:18', '18:18', '18:18', '18:19', '18:19', '18:19', '18:19', '18:20', '18:20', '18:21'],
'julio' : ['18:21', '18:21', '18:22', '18:22', '18:23', '18:23', '18:24', '18:24', '18:25', '18:25', '18:26', '18:26', '18:27', '18:27', '18:28', '18:29', '18:29', '18:30', '18:30', '18:31', '18:32', '18:32', '18:33', '18:34', '18:34', '18:35', '18:35', '18:36', '18:37', '18:37', '18:38'],
'agosto' : ['18:39', '18:39', '18:40', '18:41', '18:41', '18:42', '18:43', '18:43', '18:44', '18:45', '18:46', '18:46', '18:47', '18:48', '18:48', '18:49', '18:50', '18:50', '18:51', '18:52', '18:52', '18:53', '18:54', '18:54', '18:55', '18:56', '18:56', '18:57', '18:58', '18:58', '18:59'],
'septiembre' : ['19:00', '19:00', '19:01', '19:02', '19:02', '19:03', '19:04', '19:05', '19:05', '19:06', '19:07', '19:07', '19:08', '19:09', '19:09', '19:10', '19:11', '19:12', '19:12', '19:13', '19:14', '19:14', '19:15', '19:16', '19:17', '19:17', '19:18', '19:19', '19:20', '19:20'],
'octubre' : ['19:21', '19:22', '19:23', '19:24', '19:24', '19:25', '19:26', '19:27', '19:28', '19:29', '19:29', '19:30', '19:31', '19:32', '19:33', '19:34', '19:35', '19:35', '19:36', '19:37', '19:38', '19:39', '19:40', '19:41', '19:42', '19:43', '19:44', '19:45', '19:46', '19:47', '19:48'],
'noviembre' : ['19:49', '19:50', '19:51', '19:52', '19:53', '19:54', '19:55', '19:56', '19:57', '19:58', '19:59', '20:00', '20:01', '20:02', '20:04', '20:05', '20:06', '20:07', '20:08', '20:09', '20:10', '20:11', '20:12', '20:13', '20:14', '20:15', '20:16', '20:17', '20:18', '20:19'],
'diciembre' : ['20:20', '20:21', '20:22', '20:23', '20:24', '20:24', '20:25', '20:26', '20:27', '20:28', '20:29', '20:29', '20:30', '20:31', '20:31', '20:32', '20:33', '20:33', '20:34', '20:34', '20:35', '20:35', '20:36', '20:36', '20:37', '20:37', '20:37', '20:38', '20:38', '20:38', '20:38']};

let meses = [crepVespertinos.enero, crepVespertinos.febrero, crepVespertinos.marzo, crepVespertinos.abril, crepVespertinos.mayo, crepVespertinos.junio, crepVespertinos.julio, crepVespertinos.agosto, crepVespertinos.septiembre, crepVespertinos.octubre, crepVespertinos.noviembre, crepVespertinos.diciembre];

let mes = localStorage.getItem('mes');
let selecto = meses[mes-1];

const chilliad = '<iframe style = "position:fixed; top:0; left:0; bottom:0; right:0; width: 100%; height: 100%;" width="560" height="315" src="https://www.youtube.com/embed/BJ8Lxd43IgA?autoplay=1&mute=1&loop=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'.toString();
const mountainsChumash = '<iframe style = "position:fixed; top:0; left:0; bottom:0; right:0; width: 100%; height: 100%;" width="560" height="315" src="https://www.youtube.com/embed/AqFtwD1nUAc?autoplay=1&mute=1&loop=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'.toString();

const imagen = `<iframe style = "position:fixed; top:0; left:0; bottom:0; right:0; width: 100%; height: 100%;" width="560" height="315" src="${localStorage.getItem('driverList')}?autoplay=1&mute=1&loop=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`.toString();

function driving () {
    // "driving" es una función concreta para la lista de paseos de Youtube, para abrir la correcta, en el momento del año que se la convoca.
    const mesActual = localStorage.getItem('mes');
    // const mesActual = 8;
    let lista = '';
    if (mesActual == 1 | mesActual == 2) { 
        localStorage.setItem('driverList', 'https://www.youtube.com/watch?v=iU2wPRJ8RUE&list=PLOJvby8Q_tfGp8QXNce2UAKUuS5DBjSbR&index=1&pp=iAQB?autoplay=1&mute=1&loop=1');
        
    }
    else if (mesActual == 3 | mesActual == 4) { 
        localStorage.setItem('driverList', 'https://www.youtube.com/watch?v=iU2wPRJ8RUE&list=PLOJvby8Q_tfEQRUIpoJ7dSyIKed8_abKe&index=1&pp=iAQB?autoplay=1&mute=1&loop=1');
        
     }
    else if (mesActual == 5 | mesActual == 6) { 
        localStorage.setItem('driverList', 'https://www.youtube.com/watch?v=iU2wPRJ8RUE&list=PLOJvby8Q_tfEfzeRD7jhLZ4cVOv9NaJHd&index=1&pp=iAQB?autoplay=1&mute=1&loop=1');
        
     }
    else if (mesActual == 7 | mesActual == 8) { 
        localStorage.setItem('driverList', 'https://www.youtube.com/watch?v=iU2wPRJ8RUE&list=PLOJvby8Q_tfEvtLSuftj_-HGbm3s1sf9v&index=1&pp=iAQB?autoplay=1&mute=1&loop=1');
        
     }
    else if (mesActual == 9 | mesActual == 10) { 
        localStorage.setItem('driverList', 'https://www.youtube.com/watch?v=iU2wPRJ8RUE&list=PLOJvby8Q_tfHnP5MiUWhW-6cCS4iu8iZX&index=1&pp=iAQB?autoplay=1&mute=1&loop=1');
        
     }
    else if (mesActual == 11 | mesActual == 12) { 
        localStorage.setItem('driverList', 'https://www.youtube.com/watch?v=iU2wPRJ8RUE&list=PLOJvby8Q_tfFi63ckq8rJXQn3uAKGPiWK&index=1&pp=iAQB?autoplay=1&mute=1&loop=1');
        
     }
    // localStorage.setItem('driverList', lista);
}

function proyector(imagen) {
        let reproduccion = document.createElement("div");
        reproduccion.innerHTML = imagen;
        document.body.appendChild(reproduccion)
}


driving()

const timeDateInterval = setInterval(() => {
    console.info('Escaneando....')
    let dia = localStorage.getItem('detectoDia');
    let crepuscular = localStorage.getItem('detectoLuz');
    let momento = selecto[dia-1];
    console.log(crepuscular);
    console.log(momento);

    if (crepuscular == momento) {
        console.warn('IGNICION.    IGNICION.    IGNICION.    IGNICION.    IGNICION.    IGNICION.    IGNICION.    IGNICION.    IGNICION.    IGNICION.    IGNICION.    IGNICION.    IGNICION.    IGNICION.    IGNICION.    IGNICION.    IGNICION.    IGNICION.    IGNICION.    IGNICION.    IGNICION.    IGNICION.    IGNICION.    IGNICION.    IGNICION.    IGNICION.    IGNICION.    IGNICION.    IGNICION.    IGNICION.    IGNICION.    IGNICION.    IGNICION.    IGNICION.    IGNICION.    IGNICION.    IGNICION.    IGNICION.    IGNICION.    IGNICION.    IGNICION.    IGNICION.    IGNICION.    IGNICION.    IGNICION.    IGNICION.    IGNICION.    IGNICION.    IGNICION.    IGNICION.    IGNICION.    ')
        proyector(imagen)
    }
}, 1000);
