# Gestor de Notas

Este va a manejar el sistema de gestiòn de unas notas sencillas, con tìtulo, y contenido.

El usuario debería entrar a la web, y ver un espacio vacío a la izquierda, y un widget de "crear nota" a la derecha...
El circuìto del flujo va a ir en tres pilares fundamentales.

# Creación

El usuario carga ese widget lateral con su nota, y esta se crea.

* En el flujo interno del código, esta va y pasa por json.stringify y localStorage.setItem, y se almacena teniendo en cuenta a un ID clandestino, que se gestiona en una relación doble de clave-valor. ({ ID: {titulo : contenido }} ) *

# Edición

Al estar todo listo, a la izquierda se ve la nota, con un botón de "editar". Se abre un label para actualizar la ediciòn, y sse sobrescribe sobre ese ID.

# Eliminaciòn.
Para eliminarlo, solo se rastrea la nota por su ID, y se elimina del JSON.