

let tipo = "";

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
    if (console.log(tipoPacientes.children[0].value)) {
        tipo = "A";
        } 
    else if 
        (console.log(tipoPacientes.children[1].value)) {
            tipo = "B";
        } 
    else if 
        (console.log(tipoPacientes.children[2].value)) {
            tipo = "C";
        }
        
    else if
        (console.log(tipoPacientes.children[3].value)) {
            tipo = "D";
        }
turnoID = Math.round(Math.random() * 1000);
retorno = tipo + turnoID;

document.write(`<br /><br /><h1>Su turno es ${retorno}.</h1><br /><h3>Y recuerde lavarse los dientes :)</h3>`);
}
