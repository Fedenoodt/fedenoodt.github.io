fetch('https://dolarapi.com/v1/dolares/blue')
.then((data) => data.json())
.then(console.log(data))
.catch(console.error('No se ha podido extraer informaciòn del dolar'))
