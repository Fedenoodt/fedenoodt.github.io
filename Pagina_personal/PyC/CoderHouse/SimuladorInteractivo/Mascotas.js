
Document.write(`<h1>Tienda de mascotas</h1>`);
Document.write(`<h2>Esta api permite calcular tu compra de productos, en base a posibles descuentos.</h2>`);

perrosLittle = 945;
perrosMid = 970;
perrosBig = 1015;

gatosLittle = 874;
gatosMid = 896;
perrosBig = 921;

verduraPeces = 878;
carnePeces = 881;

//(Toda la comida de bebé cuesta +%5)

perrosBebeLittle = ((perrosLittle * 100) / 5) + perrosLittle;
perrosBebeMid =  ((perrosMid * 100) / 5) + perrosMid;
perrosBebeBig = ((perrosBig * 100) / 5) + perrosBig;

gatosBebeLittle = ((gatosLittle * 100) / 5) + gatosLittle;
gatosBebeMid =  ((gatosMid * 100) / 5) + gatosMid;
gatosBebeBig = ((gatosBig * 100) / 5) + gatosBig;

document.write(`<div><h2>Lista de productos:</h2>
<ul>
    <li>Comida de gato chico: $${gatosLittle}</li>
    <li>Comida de gato mediano: $${gatosMid}</li>
    <li>Comida de gato grande $${gatosBig}</li>`)

// Descuento = (productoActual * 100 ) / valorDescuento
