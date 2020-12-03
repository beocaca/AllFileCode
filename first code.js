function f1(n) {
    var result = 1;
    for (var i = n; i > 0; i--) {
        result = result * i;
    }
    return result;
}

function f11(n) {
    var result = 1;
    for (var i = n; i > 0; i--) {
        result = result * i;
    }
    return result;
}

function f22(n) {
    if (n <= 1) {
        return 1;
    }
    return n * f
    f22(n - 1)
}

function f2(n) {
    // 4 * f2(3)
    // 3 * f2(2)
    // 2 * f2(1)
    // 1
    if (n <= 1) {
        return 1;
    }
    return n * f2(n - 1)
}


function setColor() {
    var input = document.getElementById('color');
    var color = input.value;
    var table = document.getElementById('list')
    table.bgColor = color;
}


function addStudent() {
    var nameInput = document.getElementById('name')
    var dobInput = document.getElementById('dob')
    var tableList = document.getElementById('list')

    var tdName = document.createElement('td')
    if (!nameInput.value || !nameInput.value.trim()) {
        nameInput.value = "";
        return alert("Please enter student's Name");
    }
    if (!dobInput.value) {
        return alert("Please enter student's birthday");
    }
    tdName.innerText = nameInput.value;
    var tdDob = document.createElement('td')
    tdDob.innerText = dobInput.value;
    var tr = document.createElement('tr')
    tr.appendChild(tdName)
    tr.appendChild(tdDob)

    var tdCommands = document.createElement('td')
    var editButton = document.createElement("button")
    editButton.innerText = "Edit"
    editButton.onclick = editStudent;

    var removeButton = document.createElement("button")
    removeButton.innerText = "Remove"
    removeButton.onclick = removeStudent;

    tdCommands.appendChild(editButton)
    tdCommands.appendChild(removeButton)
    tr.appendChild(tdCommands);


    var trList = tableList.getElementsByTagName('tr')
    var lastTr = trList[trList.length - 1]
    if (lastTr.className === "even") {
        tr.className = "odd"
    } else {
        tr.className = "even"
    }
    tableList.appendChild(tr)


}

//students.push(student)
//

function editStudent() {
    console.log("edit")
}

function removeStudent(event) {
    console.log(event)
    event.target.parentElement.parentElement.remove()
}

window.addStudent = addStudent;
window.setColor = setColor;
window.editStudent = editStudent;
window.removeStudent = removeStudent;

