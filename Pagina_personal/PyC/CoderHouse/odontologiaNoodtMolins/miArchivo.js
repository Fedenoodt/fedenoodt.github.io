// Variables Generales
listaA = {'general': 'Juan Perez', 'ondodoncia': 'Agustina Morón', 'ortodoncia': 'Lucía Ferrera', 'radiografias': 'Lucas Vinicius'};
listaB = {'general': 'Facundo García', 'ondodoncia': 'Soledad Rodriguez', 'ortodoncia': 'Maria Valtazar', 'radiografias': 'Carlos Pereyra'};

const DateTime = luxon.DateTime
const dt = DateTime.now();

document.write(`<center><h1>Swiss Medical Caballito</h1><br /></center>`);
// Este es el primer segmento constructor del turno del usuario.
document.write(`<center><h2>Ticket del Centro Odontológico</h2><br /><h3>Ingrese los datos</h3></center>`);
credencial = document.createElement("div");
credencial.innerHTML = `
<form id="numero">
    <label for = "cred">Ingrese el número de credencial de 8 números</label>
    <input type = "number" id = "cred" required minlength = "8" maxlength = "8" size = "8">
    <input type = "submit" value = "Submit" />
</form>
`;
// Se crea el incondicional espacio de ingreso de el número de credencial.
document.body.appendChild(credencial);
let validez = document.getElementById("numero").required;
numero.addEventListener("submit", validar);

function validar (valor) {
//     "Validar" toma la labor de revisar que el usuario halla ingresado bien la credencial.
    valor.preventDefault();
    let tipoPacientes = valor.target;
    numero = (tipoPacientes.children[1].value)
    if (numero.length == 8){
        console.log(`*La credencial número ${numero} fue enviada a una base de datos para revisión...*`)
        credencial = localStorage.setItem('valor', numero);}
    else {
        alert(`Ingrese un número de credencial válido.`)
    }
}
// Se arma el interrogante sobre que tipo de consulta se trata.
turno = document.createElement("div");
turno.innerHTML = `
<div><center>
<form id="tipoPacientes">
    <label for="tur">Turno</label><br />
    <select name = "turno" id = "tur" multiple>
        <option value = "general">Odontología General</option>
        <option value = "ondodoncia">Ondodoncia</option>
        <option value = "ortodoncia">Ortodoncia</option>
        <option value = "radiografias">Radiografías</option>
    </select>
    <input type = "submit" value = "Submit" />
</form>
</center></div>`;

document.body.appendChild(turno);
// Y se registra lo que haya devuelto.
let tomaTurno = document.getElementById("tipoPacientes");
tomaTurno.addEventListener("submit", registrar);

function registrar (valor) {
//     "Registrar" tiene la tarea de ver que opción seleccionó un usuario, y darle su turno.
    valor.preventDefault();
    let tipoPacientes = valor.target
    objetivo = (tipoPacientes.children[2].value)
    console.log(`Valor de C: ${(objetivo)}.`);
//     De que valor tome el paciente, va a depender el tipo de turno.
    if (objetivo == 'general') {
        tipo = "A";
            console.log(`Pasó por ${tipo}.<br />${(tipoPacientes.children[0].value)}`);
        } 
    else if 
        (objetivo == 'ondodoncia') {
            tipo = "B";
            console.log(`Pasó por ${tipo}.<br />${(tipoPacientes.children[1].value)}`);
        } 
    else if 
        (objetivo == 'ortodoncia') {
            tipo = "C";
            console.log(`Pasó por ${tipo}.<br />${(tipoPacientes.children[2].value)}`);
        }
        
    else if
        (objetivo == 'radiografias') {
            tipo = "D";
            console.log(`Pasó por ${tipo}.<br />${(tipoPacientes.children[3].value)}`);
        }
    
// Como este programa no va a ser usado por 999 pacientes, o más al dia, turnoID es la variable que genera un número aleatorio durante la ejecución
turnoID = Math.round(Math.random() * 1000);
// retorno es la "reunión" entre la especialidad del turno, con el número aleatorio generado.
retorno = tipo + turnoID;
//  Guardamos el retorno con el nombre de "Turno" en caso de necesitarlo más tarde.
localStorage.setItem('turno', retorno);
console.log(localStorage.getItem('turno'));
    
let personal = tipo >= 500 ? listaA[objetivo] : listaB[objetivo] 
//    "personal" difiere entre el Grupo A y B de profesionales. Se encarga de ordenar, dependiendo del turno, al personal que corresponde a el turno.
    
//     /// Acá yo tomo el valor de retorno, y si el numero es mayor a 500, lo mando a un "grupo B" de profesionales especializados, y viceversa. ///
    
// Breve mensaje que muestra el turno.
imagen = `<br /><br /><h1>Su turno es ${retorno}.</h1><br /><h1>Será llamado por apellido, por el profesional ${personal} de ${objetivo}.</h1><br /><h3>Y recuerde lavarse los dientes :)</h3><br /><br /><h4>El turno fue solicitado a las ${parseInt(dt.second)/60}:${parseInt(dt.second)%60}hs.</h4>`;
document.write(imagen);
localStorage.setItem('mensaje', imagen);
}