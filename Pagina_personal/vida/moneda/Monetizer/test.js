// exchange = "blue";
// operation = 0;
// 
// const value = fetch(`https://dolarapi.com/v1/dolares/${exchange}`)
//   .then((response) => response.json())
//   .then((coin) => {
//     if (operation == 1) {
//         return coin.venta;
//     } else if (operation == 0) {
//         return coin.compra;
//     }
//   });
// 
// const printvalue = () => {
//   value.then((a) => {
//     console.log(a);
//   });
// };
// 
// printvalue();

function consultor(exchange, operation) {
  const value = fetch(`https://dolarapi.com/v1/dolares/${exchange}`)
    .then((response) => response.json())
    .then((coin) => {
      if (operation === 1) {
        return coin.venta;
      } else if (operation === 0) {
        return coin.compra;
      }
    });

  // Devuelve la promesa del resultado de la operación fetch
  return value;
}

// Ejemplo de uso:
const exchangeRatePromise = consultor('blue', 1); // Obtiene la tasa de venta para USD
exchangeRatePromise.then((exchangeRate) => {
  console.log('Tasa de cambio:', exchangeRate);
});

function tasaCambio() {
  return consultor("blue", 1)
};

tasaCambio().then((exchangeRate) => {
  console.log(exchangeRate)
});

