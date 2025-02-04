
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
    const necesidades = 0;
    const mercado = 0;
    const salud = 0;
    const deudas = 0;

    const gastos = 0;
    const gustos = 0;
    const donacion =0;

    const ahorros = 100;
    const ahorrado = 23.33;
    const jubilacion = 26.67;
    const riesgo = 16.67;
    const refuerzo = 33.33;

    const number = quantity.value;


    balances(['necesidades', 'gastos', 'ahorros'], [porcent(number, necesidades), porcent(number, gastos), porcent(number, ahorros)])
    
    const answer = `Fedenoodt, según la disposición vigente de la ley, corresponden porcentajes del Capital general, únicamente para el sistema de ahorros. <br />
    Esta sería la cuenta: <br />
    Capital: ${number} <br />
        
        ${speacher(ahorrado, 'banca de ahorro estático', 'ahorros', ahorros, number)}
        ${speacher(jubilacion, 'banca de ahorro jubilatorio', 'ahorros', ahorros, number)}
        ${speacher(riesgo, 'banca de ahorro inversionista', 'ahorros', ahorros, number)}
        ${speacher(refuerzo, 'dirección múltiple', 'ahorros', ahorros, number)}<br />
        En el caso de que las deudas hayan ido a mayores, este ${refuerzo}% (${porcent (refuerzo, number)}) del ahorro de "dirección múltiple" está dispuesto a brindar esa 
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
    
