
document.write(`<h1>Tienda de mascotas</h1>`);
document.write(`<h2>Esta api permite calcular tu compra de productos, en base a posibles descuentos.</h2>`);

perrosLittle = 945;
perrosMid = 970;
perrosBig = 1015;

gatosLittle = 874;
gatosMid = 896;
gatosBig = 921;

//(Toda la comida de bebé cuesta +%5)
gatosBebeLittle = ((gatosLittle * 5) / 100) + gatosLittle;
gatosBebeMid =  ((gatosMid * 5) / 100) + gatosMid;
gatosBebeBig = ((gatosBig * 5) / 100) + gatosBig;

perrosBebeLittle = ((perrosLittle * 5) / 100) + perrosLittle;
perrosBebeMid =  ((perrosMid * 5) / 100) + perrosMid;
perrosBebeBig = ((perrosBig * 5) / 100) + perrosBig;

verduraPeces = 878;
carnePeces = 881;

listaProductos = {gatosLittle, gatosMid, gatosBig, perrosLittle, perrosMid, perrosBig, gatosBebeLittle, gatosBebeMid, gatosBebeBig, perrosBebeLittle, perrosBebeMid, perrosBebeBig, verduraPeces, carnePeces};

listaCompras = `
<div class = "in-flex"><h2>Lista de productos:</h2>
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

document.write(listaCompras);

// Descuento = (productoActual * 100 ) / valorDescuento
