//toggleSidebar es, para en ambos sentidos, usar el toggle para escondee las barras laterales.

function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('hidden');
}

function toggleSidebarR() {
  document.getElementById('sidebarR').classList.toggle('hidden');
}

// "caligrafo" es la nomina del àrea a pintar del canvas.

const caligrafo = document.getElementById('paintArea')


// definimos sus dimensiones...

const canvas = document.createElement('canvas');
canvas.id = 'canvas-caligrafia';
canvas.width = 800;
canvas.height = 400;
canvas.style.border = '1px solid #ccc';

//... y hacemos merge al caligrafo.

caligrafo.appendChild(canvas);

// Definimos el contexto del canvas.

const ctx = canvas.getContext('2d');
let dibujando = false;

// Usamos el tèrmino "grosor" para esas variables que usan los botones, que ajustan el ancho grosor.

let grosorActual = 2;
const grosorValor = document.getElementById('grosorValor');
const btnMenos = document.getElementById('grosorMenos');
const btnMas = document.getElementById('grosorMas');

btnMenos.addEventListener('click', () => {
  if (grosorActual > 1) {
    grosorActual--;
    grosorValor.textContent = grosorActual;
  }
});

btnMas.addEventListener('click', () => {
  if (grosorActual < 20) {
    grosorActual++;
    grosorValor.textContent = grosorActual;
  }
});

// colorPicker para que el usuario elija los colores.

const colorPicker = document.getElementById('colorPicker');

// "mousedown" y el trazo comenzo.

canvas.addEventListener('mousedown', (e) => {
  dibujando = true;
  ctx.beginPath();
});

// "mouseup", y el trazo termino.

canvas.addEventListener('mouseup', () => {
  dibujando = false;
  ctx.beginPath(); 
  // "source-over" para indicar el tipo de trazo. De cursor habituàl.
  ctx.globalCompositeOperation = 'source-over';
});

// "mousemove" y se define todo lo que el usuario va a realizar en el trazo.
canvas.addEventListener('mousemove', (e) => {
  if (dibujando) {
    const { x, y } = getCoordenadas(e);
    ctx.lineWidth = grosorActual;
    ctx.lineCap = 'round';
    ctx.globalCompositeOperation = modoGoma ? 'destination-out' : 'source-over';
    ctx.strokeStyle = modoGoma ? 'rgba(0,0,0,1)' : colorPicker.value;
    ctx.lineTo(x, y);
    ctx.stroke();
  }
});

canvas.addEventListener('mouseup', (e) => {
  dibujando = false;
  ctx.beginPath();
  ctx.globalCompositeOperation = 'source-over';
});


canvas.addEventListener('touchstart', comenzarTrazo, { passive: false });
canvas.addEventListener('touchmove', dibujar, { passive: false });
canvas.addEventListener('touchend', terminarTrazo);

function comenzarTrazo(e) {
  e.preventDefault();
  dibujando = true;
  ctx.beginPath();
}

function dibujar(e) {
  e.preventDefault();
  if (!dibujando) return;
  const { x, y } = getCoordenadas(e);
  ctx.lineWidth = grosorActual;
  ctx.lineCap = 'round';
  ctx.globalCompositeOperation = modoGoma ? 'destination-out' : 'source-over';
  ctx.lineTo(x, y);
  ctx.stroke();
}

function terminarTrazo(e) {
  e.preventDefault();
  dibujando = false;
  ctx.beginPath();
  ctx.globalCompositeOperation = 'source-over';
}



let modoGoma = false;

const btnGoma = document.getElementById('gomaToggle');
btnGoma.addEventListener('click', () => {
  modoGoma = !modoGoma;
  btnGoma.textContent = modoGoma ? 'Goma: ON' : 'Goma: OFF';
  if (modoGoma) {
    grosorActual = 10;
  } else {
    grosorActual = 2;
  }
  grosorValor.textContent = grosorActual;
});

function getCoordenadas(e) {
  // Nos encargamos de medir la ubicacion de pulso de trazo del usuario en la vista, comparandola con la dimension del canvas.
  const rect = canvas.getBoundingClientRect();
  const scaleX = canvas.width / rect.width;
  const scaleY = canvas.height / rect.height;

  if (e.touches) {
    // Tanto en superficies tactiles...
    return {
      x: (e.touches[0].clientX - rect.left) * scaleX,
      y: (e.touches[0].clientY - rect.top) * scaleY
    };
  } else {
    return {
      // ... Como en el navegador.
      x: (e.clientX - rect.left) * scaleX,
      y: (e.clientY - rect.top) * scaleY
    };
  }
}

// se va a validar que plantillas elige el usuario.
let plantillaEnUso = null;

document.querySelectorAll('.planks').forEach(img => {
  img.addEventListener('click', () => {
    // Tomando en cuenta, el uso del evento de cualquiera de los botones, se va a proyectar el diseño de la plantilla en el canvas.
    plantillaEnUso = new Image();
    plantillaEnUso.src = img.src;
    plantillaEnUso.onload = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(plantillaEnUso, 0, 0, canvas.width, canvas.height);
    };
  });
});

// Hay muchas plantillas a elegir...
function aplicarPlantillaDesdeID(idDiv) {
  // Como el primer ID no cuenta con numero, insertamos esta validaciòn para confirmar que es ese, y marcarlo con un "1" provisorio.
  const numero = idDiv === 'plantilla' ? '1' : idDiv.replace('plantilla', '');
  // ... Para asì, definir luego este ID en la ruta, que la imagen posee el mismo numero.
  const ruta = `./Plantillas/${numero}.jpg`;

  // Se crea la imagen a partir de la ruta.
  const img = new Image();
  img.src = ruta;
  img.crossOrigin = 'anonymous';
  img.onload = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const canvasAspect = canvas.width / canvas.height;
  const imgAspect = img.width / img.height;

  let drawWidth, drawHeight;

  if (imgAspect > canvasAspect) {
    drawWidth = canvas.width;
    drawHeight = canvas.width / imgAspect;
  } else {
    drawHeight = canvas.height;
    drawWidth = canvas.height * imgAspect;
  }

  const x = (canvas.width - drawWidth) / 2;
  const y = (canvas.height - drawHeight) / 2;

  // El usuario tiene la posibilidad de invertir la plantilla, para escribir del reves.
  if (modoEspejo) {
    ctx.save();
    ctx.translate(canvas.width, 0);
    ctx.scale(-1, 1);
    ctx.drawImage(img, x, y, drawWidth, drawHeight);
    ctx.restore();
  } else {
    ctx.drawImage(img, x, y, drawWidth, drawHeight);
  }
};

};

let modoEspejo = false;

document.getElementById('modoEspejoToggle').addEventListener('click', () => {
  modoEspejo = !modoEspejo;
  document.getElementById('modoEspejoToggle').textContent = modoEspejo ? "Modo Espejo: ON" : "Modo Espejo: OFF";
});

// Asignar eventos a cada plantilla visible en el HTML
['plantilla', 'plantilla2', 'plantilla3', 'plantilla4'].forEach(id => {
  const el = document.getElementById(id);
  if (el) {
    // Aca se llama a aplicarPlantillaDesdeID para la insercion,
    el.addEventListener('click', () => aplicarPlantillaDesdeID(id));
  }
});

// Se puede borrar la plantilla.
document.getElementById('borrarTodo').addEventListener('click', () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

// Y se puede guardar.
document.getElementById('guardarCanvas').addEventListener('click', () => {
  const enlace = document.createElement('a');
  enlace.download = 'mi-plantilla.png';
  enlace.href = canvas.toDataURL('image/png');
  enlace.click();
});
