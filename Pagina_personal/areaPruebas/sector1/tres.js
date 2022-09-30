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
let valor = document.getElementById("numero");
numero.addEventListener("submit", validar);

function validar (valor) {
    valor.preventDefault();
    let tipoPacientes = valor.target;
    (tipoPacientes.children[0].value);
    console.log(`*La credencial número ${numero.children[0].value} fue enviada a una base de datos para revisión...*`);

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
    if (tipoPacientes.children[0].value) {
        tipo = "A";
        } 
    else if 
        (tipoPacientes.children[1].value) {
            tipo = "B";
        } 
    else if 
        (tipoPacientes.children[2].value) {
            tipo = "C";
        }
        
    else if
        (tipoPacientes.children[3].value) {
            tipo = "D";
        }
turnoID = Math.round(Math.random() * 1000);
retorno = tipo + turnoID;

document.write(`<br /><br /><h1>Su turno es ${retorno}.</h1><br /><h3>Y recuerde lavarse los dientes :)</h3>`);
}
