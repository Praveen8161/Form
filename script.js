

let form1 = document.getElementById("form-field");

form1.addEventListener("submit",function addTableData(e){
    e.preventDefault();
    let fName = document.getElementById("first-name").value;
    let lName = document.getElementById("last-name").value;
    let address = document.getElementById("address").value;
    let state = document.getElementById("state").value;
    let country = document.getElementById("country").value;
    let pincode = document.getElementById("pincode").value;

    var selectedRadio = document.querySelector('input[name="gender"]:checked');
    var gender = selectedRadio ? selectedRadio.value : null;

    let foods = Array.from(document.querySelectorAll("#food-choice option:checked")).map(opt => opt.value);

    let table = document.getElementById("table");
    let row = table.insertRow(-1);

    let fNameCell = row.insertCell(0);
    let lNameCell = row.insertCell(1);
    let addressCell = row.insertCell(2);
    let stateCell = row.insertCell(3);
    let countryCell = row.insertCell(4);
    let pincodeCell = row.insertCell(5);
    let genderCell = row.insertCell(6);
    let foodsCell = row.insertCell(7);
    
    fNameCell.innerText = fName ? fName : "-";
    lNameCell.innerText = lName ? lName : "-";
    addressCell.innerText = address ? address : "-";
    stateCell.innerText = state ? state : "-";
    countryCell.innerText = country ? country : "-";
    pincodeCell.innerText = pincode ? pincode : "-";
    genderCell.innerText = gender ? gender : "-";
    foodsCell.innerText = foods.length > 1 ? foods.join(', ') : "-";

    resetAll();
});

function resetAll(){
    form1.reset();
}

