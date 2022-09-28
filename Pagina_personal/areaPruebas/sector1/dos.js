// Precios y entes reguladores de comidas de animales, valuadas por kilo.

perrosLittle = 945;
perrosMid = 970;
perrosBig = 1015;

gatosLittle = 874;
gatosMid = 896;
gatosBig = 921;

//(Toda la comida de bebé cuesta +%5)

function animalBebe (animal, porcentaje) {
    // "animalBebe" calcula dicho aumento.
    let aumento = Math.round(((animal * porcentaje) / 100) + animal);
    return aumento;
}

let perrosBebeLittle = animalBebe(perrosLittle, 5);
let perrosBebeMid = animalBebe(perrosMid, 5);
let perrosBebeBig = animalBebe(perrosBig, 5);

let gatosBebeLittle = animalBebe(gatosLittle, 5);
let gatosBebeMid = animalBebe(gatosMid, 5);
let gatosBebeBig = animalBebe(gatosBig, 5);

let verduraPeces = 878;
let carnePeces = 881;

const productos = [{ id: 1, nombre: "perrosLittle", precio: 125 },
                   { id: 2, nombre: "perrosMid", precio: 970 },
                   { id: 3, nombre: "perrosBig", precio: 1015 },
                   { id: 4, nombre: "gatosLittle", precio: 874 },
                   { id: 5, nombre: "gatosMid", precio: 896 },
                   { id: 6, nombre: "gatosBig", precio: 921 },
                   { id: 7, nombre: "perrosBebeLittle", precio: animalBebe(perrosLittle, 5) },
                   { id: 8, nombre: "perrosBebeMid", precio: animalBebe(perrosLittle, 5) },
                   { id: 9, nombre: "perrosBebeBig", precio: animalBebe(perrosLittle, 5) },
                   { id: 10, nombre: "gatosBebeLittle", precio: animalBebe(perrosLittle, 5) },
                   { id: 11, nombre: "gatosBebeMid", precio: animalBebe(perrosLittle, 5) },
                   { id: 12, nombre: "gatosBebeBig", precio: animalBebe(perrosLittle, 5) },
                   { id: 13, nombre: "verduraPeces", precio: 878 },
                   { id: 14, nombre: "carnePeces", precio: 881 }];

// "Ordenador" tiene la tarea de mostrar los productos en orden.
function ordenador () {
    for (const producto of productos) {
        let articulo = document.createElement("div");
        articulo.innerHTML = `<h3> ID: ${producto.id}</h3>
                                <p> Producto: ${producto.nombre}</p>
                                <b> $ ${producto.precio}</b>`;
        document.body.appendChild(articulo);
    }
}

ordenador()

// const productos = document.createElement("div");
// productos.innerHTML = `<div>${ordenador()}</div>`;
// document.body.appendChild(productos);
