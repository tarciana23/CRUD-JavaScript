var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["curso"] = document.getElementById("curso").value;
    formData["numero"] = document.getElementById("numero").value;
    formData["descricao"] = document.getElementById("descricao").value;
    formData["nome_professor"] = document.getElementById("nome_professor").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.curso;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.numero;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.descricao;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.nome_professor;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("curso").value = "";
    document.getElementById("numero").value = "";
    document.getElementById("descricao").value = "";
    document.getElementById("nome_profesor").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("curso").value = selectedRow.cells[0].innerHTML;
    document.getElementById("numero").value = selectedRow.cells[1].innerHTML;
    document.getElementById("descricao").value = selectedRow.cells[2].innerHTML;
    document.getElementById("nome_professor").value = selectedRow.cells[3].innerHTML;
}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.curso;
    selectedRow.cells[1].innerHTML = formData.numero;
    selectedRow.cells[2].innerHTML = formData.descricao;
    selectedRow.cells[3].innerHTML = formData.nome_professor;
}

function onDelete(td) {
    if (confirm('Tem certeza que deseja apagar ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}

function validate() {
    isValid = true;
    if (document.getElementById("curso").value == "") {
        isValid = false;
        document.getElementById("cursoValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("cursoValidationError").classList.contains("hide"))
            document.getElementById("cursoValidationError").classList.add("hide");
    }
    return isValid;
}