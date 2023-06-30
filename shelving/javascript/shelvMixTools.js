const tecTools = 'Shelving informa:'

function JStringify (parameter) {
    return JSON.stringify(parameter)
}

function JSparse (parameter) {
    return JSON.parse(parameter)
}


function consoleValidator (parameter) {
    let valid = false;
    if (parameter === null || parameter == null || parameter == 'null') {
        consoleWarn(`${tecTools} ERROR DE FORMATO: VARIABLE VACIA.`)
    }
    else if (parameter === undefined || parameter == undefined || parameter == 'undefined') {
        consoleWarn(`${tecTools} ERROR DE FORMATO: VARIABLE INDEFINIDA.`)
    }
    else {
        valid = true;
    }
    return valid
}

function consoleLog (parameter) {
    console.log(parameter)
}
function consoleInfo (parameter) {
    console.info(parameter)
}
function consoleWarn (parameter) {
    console.warn(parameter)
}
function consoleError (parameter) {
    console.error(parameter)
}

function consoleLogSecure (parameter) {
    if (consoleValidator(parameter)) {
        consoleInfo(`${tecTools} Parametro evaluado, y validado exitosamente.`)
        consoleLog(parameter)
    }
}

function nullUndefined (parameter) {
    let charged = false;
    if (parameter === null || parameter === undefined || parameter == null || parameter == undefined || parameter == 'null' || parameter == 'undefined') {
        charged = true;
        consoleLog(`${tecTools} La variable es vacia o indefinida.`)
    }
    return charged
}

function localSet (key, value) {
    localStorage.setItem(key, value)
}

function localGet (key) {
    return localStorage.getItem(key)
}

function localClear () {
    return localStorage.clear()
}

function refresh (parameter) {
    if (parameter == 'STOP') {
        clearInterval()
        consoleWarn(`${tecTools} Deteniendo.`);
    } else {
    setInterval(() => {
    location.reload()
    }, parameter);
    consoleWarn(`${tecTools} Pagina recargada.`);
    }
}
