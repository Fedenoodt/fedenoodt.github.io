const productos = [{ id: 1, nombre: "Arroz", precio: 125 },
                   { id: 2, nombre: "Nesquik", precio: 433 },
                   { id: 3, nombre: "Zanahoria dorada", precio: 134309 }];

for (const producto of productos) {
    let contenedor = document.createElement("div");
    contenedor.innerHTML = `<h3> ID: ${producto.id}</h3>;
                            <p> Producto: ${producto.nombre}</p>;
                            <b> $ ${producto.precio}</b>;`;
    document.body.appendChild(contenedor);
}
