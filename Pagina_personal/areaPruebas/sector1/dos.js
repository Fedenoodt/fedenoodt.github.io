

function dolar (parameter) {
  return fetch(`https://dolarapi.com/v1/dolares/${parameter}`)
    .then(response => response.json())
    .then(data => console.log(data));
}

dolar('oficial')
dolar('blue')
dolar('bolsa')
dolar('contadoconliqui')
dolar('solidario')
dolar('mayorista')

const compraBlue = dolar('blue').keys('compra');
console.log(compraBlue)
