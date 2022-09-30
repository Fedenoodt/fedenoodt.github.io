let tipo = "";


document.write(`<center><h1>Ticket del Centro Odontológico</h1><br /><h2>Ingrese los datos</h2></center>`);
credencial = document.createElement("div");
credencial.innerHTML = `
<form id="numero">
    <label for = "cred">Ingrese el número de credencial de 8 números</label>
    <input type = "number" id = "cred" required minlength = "8" maxlength = "8" size = "8">
    <input type = "submit" value = "Submit" />
</form>
`;
document.body.appendChild(credencial);
let validez = document.getElementById("numero").required;
numero.addEventListener("submit", validar);

function validar (valor) {
    valor.preventDefault();
    let tipoPacientes = valor.target;
    numero = (tipoPacientes.children[1].value)
    if (numero.length == 8){
        console.log(`*La credencial número ${numero} fue enviada a una base de datos para revisión...*`)}
    else {
        document.write(`<h3 style= "color: red;">Ingrese un número de credencial válido.</h3>`)
    }
}
    
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

let tomaTurno = document.getElementById("tipoPacientes");
tomaTurno.addEventListener("submit", registrar);

function registrar (valor) {
    valor.preventDefault();
    let tipoPacientes = valor.target
    a = tipoPacientes.children[0].value;
    b = tipoPacientes.children[1].value;
    c = tipoPacientes.children[2].value;
    d = tipoPacientes.children[3].value;
    sub = tipoPacientes.children[4].value;
    
    if (sub == a) {
        tipo = "A";
        } 
    else if 
        (sub == b) {
            tipo = "B";
        } 
    else if 
        (sub == c) {
            tipo = "C";
        }
        
    else if
        (sub == d) {
            tipo = "D";
        }
turnoID = Math.round(Math.random() * 1000);
retorno = tipo + turnoID;

document.write(`<br /><br /><h1>Su turno es ${retorno}.</h1><br /><h3>Y recuerde lavarse los dientes :)</h3>`);
}
