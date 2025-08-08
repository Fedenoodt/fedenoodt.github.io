const Canvas = document.getElementById('canvas');
const ctx = Canvas.getContext("2d");
let particles = [];
let isHoveringText = false;
let resizeTimeout;
let animating = false;

let hoverMetrics = {};

function updateHoverMetrics() {
  // Esta función hace que el remplazo de color del texto, se ajustara correctamente a la escala del título en si.
  const scaleFactor = Canvas.offsetWidth / 1920;

  const fontSize = Math.floor(140 * scaleFactor);

  ctx.font = `${fontSize}px 'Segoe UI', sans-serif`;
  const textWidth = ctx.measureText("¡Felices Fiestas!").width;

  hoverMetrics = {
    x: 140 * scaleFactor,
    y: 120 * scaleFactor,
    fontSize,
    textWidth,
  };
}


function resizeCanvasProperly() {
  // Ajusta el tamaño del canvas al dispositivo y actualiza la zona de interacción (hover).

  Canvas.style.width = '100%';
  Canvas.style.height = '100%';
  Canvas.width = Canvas.offsetWidth;
  Canvas.height = Canvas.offsetHeight;
  updateHoverMetrics(); 
}

function updateBackgroundImage() {
  // El innerWidth que recibimos de la ventana, es la comparacion suficiente para adaptar la pantalla, con fondo de celular, o computadora.
  const isMobile = window.innerWidth <= 768;
  const newSrc = isMobile
    ? "./images/mobileBackground.jpg"
    : "./images/lastBackground.jpg";

  if (backgroundImage.src !== newSrc) {
    backgroundImage.src = newSrc;

    backgroundImage.onload = function () {
      updateParticles(); // reactiva animación cuando cambia imagen
    };
  }
}



Canvas.addEventListener('mousemove', (e) => {
  // Es la funcion que se encarga de ubicar la posicion del mouse, y en base a eso establecer el hover en esa posicion.
  const rect = Canvas.getBoundingClientRect();
  const mouseX = e.clientX - rect.left;
  const mouseY = e.clientY - rect.top;

  const { x, y, fontSize, textWidth } = hoverMetrics;

  isHoveringText =
    mouseX >= x &&
    mouseX <= x + textWidth &&
    mouseY >= y &&
    mouseY <= y + fontSize;
  requestAnimationFrame(updateParticles);
  if (isHoveringText) {
  Canvas.style.cursor = "pointer";
} else {
  Canvas.style.cursor = "default";
}


});

const backgroundImage = new Image();
backgroundImage.src = window.innerWidth <= 768 
    ? "./images/mobileBackground.jpg" 
    : "./images/lastBackground.jpg";

backgroundImage.onload = function () {
    updateParticles();
};

function drawBackgroundCoverStyle() {
  // Calcula el tamaño de la imagen para cubrir todo el canvas manteniendo la proporción (estilo CSS `background-size: cover`)
  const canvasRatio = Canvas.width / Canvas.height;
  const imageRatio = backgroundImage.width / backgroundImage.height;

  let drawWidth, drawHeight;

  if (canvasRatio > imageRatio) {
    // El canvas es más ancho que la imagen
    drawWidth = Canvas.width;
    drawHeight = Canvas.width / imageRatio;
  } else {
    // El canvas es más alto que la imagen
    drawHeight = Canvas.height;
    drawWidth = Canvas.height * imageRatio;
  }

  const offsetX = (Canvas.width - drawWidth) / 2;
  const offsetY = (Canvas.height - drawHeight) / 2;

  ctx.drawImage(backgroundImage, offsetX, offsetY, drawWidth, drawHeight);
}

function drawFallbackBackground() {
  // Crea de forma auxiliar, un fondo "negro" previamente a la generacion de imagen.
  ctx.fillStyle = "#000";
  ctx.fillRect(0, 0, Canvas.width, Canvas.height);
}


function drawTitle() {
  // Dibuja el título \"¡Felices Fiestas!\" ajustado a la escala de pantalla y estilo interactivo.
  const scaleFactor = Canvas.offsetWidth / 1920;


  ctx.font = `${Math.floor(140 * scaleFactor)}px 'Segoe UI', sans-serif`;
  ctx.fillStyle = isHoveringText ? "#fff8b0" : "#fff";
  //const x = Canvas.width / 2;
  const x = 140 * scaleFactor; // Ejemplo: margen izquierdo controlado
  const y = 120 * scaleFactor;
  //ctx.textAlign = "center";
  ctx.textAlign = "start"; // neutral


  ctx.textBaseline = "top";


  ctx.fillText("¡Felices Fiestas!", x, y);
  
}


function createParticle(x, y, angle) {
  // Esta función crea, desde las particulas diversas variaciones, formatos, y proporciones que forman a la explosión.
  const isMobile = window.innerWidth <= 768;

  if (isMobile) {
  const variation = Math.random() * 1.5 + 0.6; // dispersión moderada
  return {
    x,
    y,
    size: Math.random() * 3 + 1.5, // chispas más discretas
    speedX: Math.cos(angle) * variation * 2.2, // impulso con escala variable
    speedY: Math.sin(angle) * variation * 2.2,
    color: `hsla(${Math.random() * 360}, 100%, 50%, 0.85)`, // vibrantes pero no invasivas
    life: Math.floor(Math.random() * 50 + 60)
  };
}


  // Desktop: lo que ya venías usando
  const scaleFactor = Canvas.offsetWidth / 1920;

  return {
    x,
    y,
    size: (Math.random() * 3 + 1.5) * scaleFactor,
    speedX: Math.cos(angle) * (Math.random() * 3.7 + 0.5),
    speedY: Math.sin(angle) * (Math.random() * 3.7 + 0.5),
    color: `hsl(${Math.random() * 360}, 100%, 50%)`,
    life: 100
  };
}
const particleCount = window.innerWidth <= 768 ? 80 : 150;



// Tanto clic, como en la función touch similares, son responsables de leer las coordenadas donde el usuario tocó, y en 
// base a eso, y al ángulo, leer la lista de partículas y dispararlas ahí.

function triggerExplosion(x, y) {
  for (let i = 0; i < particleCount; i++) {
    const angle = (Math.PI * 2 / particleCount) * i;
    particles.push(createParticle(x, y, angle));
  }

  if (!animating) {
    animating = true;
    requestAnimationFrame(updateParticles);
  }
}


Canvas.addEventListener('click', (e) => {
  triggerExplosion(e.clientX, e.clientY);
});

Canvas.addEventListener('touchstart', (e) => {
  const touch = e.touches[0];
  triggerExplosion(touch.clientX, touch.clientY);
});


function updateParticles() {
  // Dibuja fondo, título y partículas activas. Elimina las que agotaron su vida útil. Repite si aún hay en pantalla.
  drawBackgroundCoverStyle();
  drawTitle();

  particles.forEach((p, i) => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fillStyle = p.color;
    ctx.fill();

    p.x += p.speedX;
    p.y += p.speedY;
    p.life--;
  });

  // Eliminar partículas muertas de una vez
  particles = particles.filter(p => p.life > 0);

  if (particles.length > 0) {
    requestAnimationFrame(updateParticles);
  } else {
    animating = false;
  }
}


window.addEventListener('load', () => {
  drawFallbackBackground();
  resizeCanvasProperly();   // ajusta el tamaño real del canvas
  updateParticles();        // empieza a dibujar la animación
});

window.addEventListener('resize', () => {
  clearTimeout(resizeTimeout); // cancela intentos previos
  resizeTimeout = setTimeout(() => {
    updateBackgroundImage();   // si la imagen depende del ancho
    resizeCanvasProperly();    // ajuste suave
    // si querés: reiniciar animación o ajustar partículas aquí
  }, 250); // tiempo de espera entre eventos (ajustable)
}); // Debounce para evitar múltiples ejecuciones durante resize


window.addEventListener('orientationchange', () => {
  // Esperamos un poquito para que el navegador estabilice dimensiones
  setTimeout(() => {
  updateBackgroundImage();
    resizeCanvasProperly();
  }, 200);
});
