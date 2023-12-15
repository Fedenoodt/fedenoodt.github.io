
let quantity = document.querySelector('#quantity');

function porcent (number, operator) {
    return (parseFloat(number) * parseFloat(operator)) / 100
}

function balances (listNames, list) {
    for(let i = 0; i < list.length; i++){
        localSet(`${listNames[i]}`, list[i])
    }
}

function speacher (fraction, what, nameGroup, group, number){


    let temp = localGet(nameGroup);
    localSet(nameGroup, temp - porcent(number, fraction))

    return `  •  De es@s ${(nameGroup)}, un total de ${fraction}% corresponde a dinero para cubrir ${what}, quitando ${porcent(number, fraction)} 
    de la banca, dejando a esta en un valor de ${localGet(nameGroup)}.<br /><br />`
}


function launching (event) {
    event.preventDefault();
    const necesidades = 50;
    const mercado = 13;
    const salud = 13;
    const deudas = 24;

    const gastos = 20;
    const gustos = 15;
    const donacion = 5;

    const ahorros = 30;
    const ahorrado = 7;
    const jubilacion = 8;
    const riesgo = 5;
    const refuerzo = 10;

    const number = quantity.value;


    balances(['necesidades', 'gastos', 'ahorros'], [porcent(number, necesidades), porcent(number, gastos), porcent(number, ahorros)])
    
    const answer = `Fedenoodt, según la disposición vigente de la ley, corresponden porcentajes para necesidades, gastos, y ahorros. <br />
    Esta sería la cuenta: <br />
    Total: ${number} <br />
      •  Necesidades (${necesidades}%): ${porcent(number, necesidades)}. <br />
      •  Gastos (${gastos}%): ${porcent(number, gastos)}. <br />
      •  Ahorros (${ahorros}%): ${porcent(number, ahorros)}.<br /><br />
        
        ${speacher(mercado, 'insumos de mercado', 'necesidades', necesidades, number)}
        ${speacher(salud, 'insumos de salud y obra social', 'necesidades', necesidades, number)}
        ${speacher(deudas, 'deudas y cuotas adicionales', 'necesidades', necesidades, number)}
        
        ${speacher(gustos, 'gustos variados', 'gastos', gastos, number)}
        ${speacher(donacion, 'donaciones benéficas', 'gastos', gastos, number)}
        En el caso de que las deudas necesiten un refuerzo, este ${gastos}% total (${porcent(quantity, gastos)), está a su dispocisión.<br /><br />
        
        ${speacher(ahorrado, 'banca de ahorro estático', 'ahorros', ahorros, number)}
        ${speacher(jubilacion, 'banca de ahorro jubilatorio', 'ahorros', ahorros, number)}
        ${speacher(riesgo, 'banca de ahorro inversionista', 'ahorros', ahorros, number)}
        ${speacher(refuerzo, 'dirección múltiple', 'ahorros', ahorros, number)}<br />
        En el caso de que las deudas hayan ido a mayores, este ${refuerzo}% (${porcent(quantity, refuerzo)) del ahorro de "dirección múltiple" está dispuesto a brindar esa 
        última ayuda limitada (que no debería suceder). Caso contrario, se ingresan en la banca de ahorro estático.`

    print(answer, 'area')
}

function secureLaunching(event) {
    //location.reload()
    localStorage.clear();
    launching(event);
}

calc.addEventListener("submit", launching)

// function print(parameter) {
//     try{
//         document.body.removeChild(mainBox)
//         mainBox = document.createElement('div');
//         mainBox.classList.add('mainBox')
//         mainBox.innerHTML = `<div class="container area">${parameter}</div>`
//         document.body.appendChild(mainBox)
//     }
//     catch {
//         mainBox = document.createElement('div');
//         mainBox.classList.add('mainBox')
//         mainBox.innerHTML = `<div class="container area">${parameter}</div>`
//         document.body.appendChild(mainBox)
//     }
// }
    
