let arsXusd = document.querySelector('#arsXusd');
let usdXars = document.querySelector('#usdXars');
let arsXusdValue = document.querySelector('#arsXusdValue');
let usdXarsValue = document.querySelector('#usdXarsValue');
let compra = document.querySelector('#buy');
let venta = document.querySelector('#sale');
let aComprar = document.querySelector('#toBuy');
let aVender = document.querySelector('#toSale');

let oficial = 'oficial';
let blue = 'blue';
let bolsa = 'bolsa';
let liqui = 'contadoconliqui';
let solidario = 'solidario';
let mayorista = 'mayorista';
let tarjeta = 'tarjeta';
let cripto = 'cripto';

function print(parameter) {
    let answer = document.createElement('div')
    answer.classList.add('area')
    answer.innerHTML = `<h1>Resultado: ${parameter[0]}. Valor de moneda: ${parameter[1]}.</h1>`
    document.body.appendChild(answer)
}

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
  
  function tasaCambio(exchange, operation) {
    return consultor(exchange, operation)
  };

function launching (event) {
    event.preventDefault();
    let arsXusd = arsXusdValue.value;
    let usdXars = usdXarsValue.value;
    let buy = compra.value;
    let sale = venta.value;
    let tobuy = aComprar.value;
    let tosale = aVender.value;
    if (sale.length > 0) {
        tasaCambio(sale, 1).then((exchangeRate) => {
          result = pesoDolar(arsXusd, exchangeRate);
          print([result, exchangeRate]);
        });
    }
    else if (buy.length > 0) {
        tasaCambio(buy, 0).then((exchangeRate) => {
            result = pesoDolar(arsXusd, exchangeRate);
            print([result, exchangeRate]);
        });
    }
    else if (tosale.length > 0) {
        tasaCambio(tosale, 1).then((exchangeRate) => {
          result = dolarPeso(usdXars, exchangeRate);
          print([result, exchangeRate]);
        });
    }
    else if (tobuy.length > 0) {
        tasaCambio(tobuy, 0).then((exchangeRate) => {
            result = dolarPeso(usdXars, exchangeRate);
            print([result, exchangeRate]);
        });
    }

};

function pesoDolar(peso, dolar) {
    return peso/parseFloat(dolar);
} 

function dolarPeso(dolar, valor) {
    return parseFloat(dolar) * parseFloat(valor);
} 

arsXusd.addEventListener("submit", launching)
usdXars.addEventListener("submit", launching)
