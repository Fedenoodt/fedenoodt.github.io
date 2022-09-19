validez = false;

document.write(`<h1>Tienda de mascotas</h1>`);
document.write(`<h2>Esta api permite calcular tu compra de productos, en base a posibles descuentos.</h2>`);

perrosLittle = 945;
perrosMid = 970;
perrosBig = 1015;

gatosLittle = 874;
gatosMid = 896;
gatosBig = 921;

//(Toda la comida de bebé cuesta +%5)

function animalBebe (animal, porcentaje) {
    // "animalBebe" calcula dicho aumento.
    let aumento = ((animal * porcentaje) / 100) + animal;
    let aumento = Math.round(aumento);
    return aumento;
}

// function ordenanza (listaProductos) {
//     validez = validar(producto, listaProductos);
//     if validez:
//         let item = listaProoductos[`${seleccion[producto]}`];
//         let precio = seleccion[producto];
// }

function validar (producto, listaProoductos) {
    let largo = listaProductos.length;
    let producto = parseint(producto);
    if producto >== 1 & producto ==< largo:
        devolucion = true;
    else:
        alert(`Ingrese el producto por orden de pedido, por favir.`);
        let devolucion = false;
    return devolucion
}

let perrosBebeLittle = animalBebe(perrosLittle, 5);
let perrosBebeMid = animalBebe(perrosMid, 5);
let perrosBebeBig = animalBebe(perrosBig, 5);

gatosBebeLittle = animalBebe(gatosLittle, 5);
let let gatosBebeMid = animalBebe(gatosMid, 5);
let gatosBebeBig = animalBebe(gatosBig, 5);

let verduraPeces = 878;
let carnePeces = 881;

let seleccion = {`gatosLittle`, `gatosMid`, `gatosBig`, `perrosLittle`, `perrosMid`, `perrosBig`, `gatosBebeLittle`, `gatosBebeMid`, `gatosBebeBig`, `perrosBebeLittle`, `perrosBebeMid`, `perrosBebeBig`, `verduraPeces`, `carnePeces`};
let listaProductos = {`gatosLittle`: gatosLittle, `gatosMid` : gatosMid, `gatosBig` : gatosBig, `perrosLittle` : perrosLittle, `perrosMid` : perrosMid, `perrosBig` : perrosBig, `gatosBebeLittle` : gatosBebeLittle, `gatosBebeMid` : gatosBebeMid, `gatosBebeBig` : gatosBebeBig, `perrosBebeLittle` : perrosBebeLittle, `perrosBebeMid` : perrosBebeMid, `perrosBebeBig` : perrosBebeBig, `verduraPeces` : verduraPeces, `carnePeces` : carnePeces};

listaCompras = `
<div class = "in-flex">
    <div><h2>Lista de productos:</h2>
        <ol>
            <li>Comida de gato chico: $${gatosLittle}</li>
            <li>Comida de gato mediano: $${gatosMid}</li>
            <li>Comida de gato grande $${gatosBig}</li>
            <li>Comida de perro chico: $${perrosLittle}</li>
            <li>Comida de perro mediano: $${perrosMid}</li>
            <li>Comida de perro grande $${perrosBig}</li>
            <li>Comida de gato bebe chico: $${gatosBebeLittle}</li>
            <li>Comida de gato bebe mediano: $${gatosBebeMid}</li>
            <li>Comida de gato bebe grande $${gatosBebeBig}</li>
            <li>Comida de perro bebe chico: $${perrosBebeLittle}</li>
            <li>Comida de perro bebe mediano: $${perrosBebeMid}</li>
            <li>Comida de perro bebe grande $${perrosBebeBig}</li>
             <li>Comida de verduras para peces $${verduraPeces}</li>
            <li>Comida de carne para peces $${carnePeces}</li>
        </ol>
        <a class = "boton1" href = "">Comprar un producto</a>
     </div>
`;

let articulo = `<input type = "number" class = "producto">  </input>;
<label>Ingrese número del pedido</label>;
let producto = querySelector(".producto");
<input type = "button" class = "accionador" onclick = "validar(producto, listaProoductos)"> Elegir producto </input>`;
let item = listaProoductos[`${seleccion[producto]}`];
let precio = seleccion[producto];


document.write(listaCompras, articulo);
// Descuento = (productoActual * 100 ) / valorDescuento
