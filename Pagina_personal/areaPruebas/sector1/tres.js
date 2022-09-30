turno = document.createElement("div");
turno.innerHTML = `
<form id="tipoPacientes">
    <label for="tur">Turno</label>
    <select name = "turno" id = "tur" multiple>
        <option value = "general">Odontología General</option>
        <option value = "ondodoncia">Ondodoncia</option>
        <option value = "ortodoncia">Ortodoncia</option>
        <option value = "radiografias">Radiografías</option>
    </select>
    <input type = "submit" value = "Submit" />
</form>`;

document.body.appendChild(turno);
