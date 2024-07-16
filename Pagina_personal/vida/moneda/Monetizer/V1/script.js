function fetcher (coin, action) {
    if (action == 0){
        fetch(`https://dolarapi.com/v1/dolares/${coin}`)
            .then( function(data) {return data.json()})
            .then( function(data) { localStorage.setItem( 'coin', `${data.compra}`) })
    } else {
        fetch(`https://dolarapi.com/v1/dolares/${coin}`)
            .then( function(data) {return data.json()})
            .then( function(data) { localStorage.setItem( 'coin', `${data.venta}`) })}
  }

let calc = document.querySelector('#calc');
let peso = document.querySelector('#valuePesos');
let compra = document.querySelector('#buy');
let venta = document.querySelector('#sale');

let oficial = 'oficial';
let blue = 'blue';
let bolsa = 'bolsa';
let liqui = 'contadoconliqui';
let solidario = 'solidario';
let mayorista = 'mayorista';

function media(value, coin, action, operation) {
    fetcher(coin, action)
    operation(value)
    return operation(value)
}

function pesoaX(value) {
    console.log(value, parseFloat(localStorage.getItem('coin')))
    return total = [value/parseFloat(localStorage.getItem('coin')), localStorage.getItem('coin')];
}

function launching (event) {
    event.preventDefault();
    let change;
    let coin;
    let priceValue = peso.value;
    let buy = compra.value;
    let sale = venta.value;
    console.log(priceValue, buy, sale)
    if (buy.length > 0) 
    {console.log(buy.length, 'es buy')
    change = 0;
    coin = buy;}
    else if (sale.length > 0)
    {console.log(sale.length, 'es sale')
    change = 1
    coin = sale}
    console.log('resultado:',media(priceValue, coin, change, pesoaX))
    print(media(priceValue, coin, change, pesoaX))
}

function secureLaunching(event) {
    //location.reload()
    localStorage.clear();
    launching(event);
}

calc.addEventListener("submit", launching)

function print(parameter) {
    let answer = document.createElement('div')
    answer.classList.add('area')
    answer.innerHTML = `<h1>Resultado: ${parameter[0]}. Valor de moneda: ${parameter[1]}.</h1>`
    document.body.appendChild(answer)
}