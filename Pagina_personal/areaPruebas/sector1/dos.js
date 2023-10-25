

function dolar (parameter) {
fetch('https://dolarapi.com/v1/dolares/${parameter}')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(console.error('No se ha podido extraer informaciòn del dolar'));
}

dolar('blue')
