

function dolar (parameter) {
fetch(`https://dolarapi.com/v1/dolares/${parameter}`)
  .then(response => response.json())
  .then(data => console.log(data))
}

dolar('oficial')
dolar('blue')
dolar('bolsa')
dolar('contadoconliqui')
dolar('solidario')
dolar('mayorista')
