const canvas = document.getElementById('eje');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const centroX = canvas.width / 2;
const centroZ = canvas.height / 2;
const escala = 0.1; // px = 1 bloque de Minecraft (ajustable)

ctx.fillStyle = 'black'; // o cualquier color
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.strokeStyle = '#ffffff';
ctx.fillStyle = '#00ff03'; // Rellena el círculo.
ctx.font = '14px monospace';




// Ejes
ctx.beginPath();
ctx.moveTo(0, centroZ); ctx.lineTo(canvas.width, centroZ); // X
ctx.moveTo(centroX, 0); ctx.lineTo(centroX, canvas.height); // Z
ctx.stroke();

// Puntos de muestra (coordenadas en bloques)
const puntos = [
  { x: -375, z: -2148, titulo: "Cuartel General" },
  { x: -857, z: 1639, titulo: "Ciudad Capital" },
  { x: 255, z: 37, titulo: "Complejo de Minería #0" },
  { x: -347, z: -124, titulo: "Puesto de Avanzada #0" },
  { x: -423, z: -1276, titulo: "Puesto de Avanzada #1" },
  { x: -376, z: -2153, titulo: "Puesto de Avanzada #2" },
  { x: -472, z: -4058, titulo: "Puesto de Avanzada #3" },
  { x: -1496, z: -4023, titulo: "Puesto de Avanzada #4" },
  { x: -1532, z: -2781, titulo: "Puesto de Avanzada #5" },
  { x: -1589, z: -1418, titulo: "Puesto de Avanzada #6" },
  { x: -1400, z: -842, titulo: "Puesto de Avanzada #7" },
  { x: 707, z: 1311, titulo: "Puesto de Avanzada #8" },
];


puntos.forEach(p => {
  const px = centroX + p.x * escala;
  const pz = centroZ + p.z * escala;

  // Dibuja el punto
  ctx.beginPath();
  ctx.arc(px, pz, 4, 0, Math.PI * 2);
  ctx.fill();

  // Etiqueta con coordenadas
  ctx.fillText(`(${p.x}, ${p.z})`, px + 8, pz - 8);

  // Título del lugar debajo o al costado
  if (p.titulo) {
    ctx.fillText(p.titulo, px + 8, pz + 12);
  }
});
