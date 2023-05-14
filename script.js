let selectedRow = null;
function onFormSubmit(e){
    event.preventDefault();
    let formData = readFormData();
    if(selectedRow === null){
        insertNewRecord(formData);
    }else{
        updateRecord(formData)
    }
    resetForm();
    }
// Read operation using this function
function readFormData(){
    let formData = {};
    formData["fullName"] = document.getElementById("fullName").value;
    formData["idNumber"] = document.getElementById("idNumber").value;
    formData["country"] = document.getElementById("country").value;
    formData["language"] = document.getElementById("language").value;
    return formData;
}

// Create operation
function insertNewRecord(data){
    let table = document.getElementById("user-registration-management").getElementsByTagName('tbody')[0];
    let newRow = table.insertRow(table.length);
    let cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.fullName;
    let cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.idNumber;
    let cell3 = newRow.insertCell(2);
        cell3.innerHTML = data.country;
    let cell4 = newRow.insertCell(3);
        cell4.innerHTML = data.language;
    let cell5 = newRow.insertCell(4);
        cell5.innerHTML = `<a href="#" onClick='onEdit(this)'>Edit</a>
                        <a href="#" onClick='onDelete(this)'>Delete</a>`;
}

// To Reset the data of fill input
function resetForm(){
    document.getElementById('fullName').value = '';
    document.getElementById('idNumber').value = '';
    document.getElementById('country').value = '';
    document.getElementById('language').value = '';
    selectedRow = null;
}

// For Edit operation
function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById('fullName').value = selectedRow.cells[0].innerHTML;
    document.getElementById('idNumber').value = selectedRow.cells[1].innerHTML;
    document.getElementById('country').value = selectedRow.cells[2].innerHTML;
    document.getElementById('language').value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.fullName;
    selectedRow.cells[1].innerHTML = formData.idNumber;
    selectedRow.cells[2].innerHTML = formData.country;
    selectedRow.cells[3].innerHTML = formData.language;
}
function onDelete(td){
    if(confirm('Are you sure you want to delete this record?')){
        row = td.parentElement.parentElement;
        document.getElementById('user-registration-management').deleteRow(row.rowIndex);
        resetForm();
    }    
}
