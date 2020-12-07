function editStudent(event) {
    // 1. get student
    var vitri = event.target.parentNode.parentElement.rowIndex
    /*1.1: lay ra row hien tai*/
    var tr = event.target.parentNode.parentNode
    /*1.2: lay ra tat ca child (td) cua row hien tai*/
    var allChild = tr.childNodes
    /*1.3: lay ra name, dob tu child hien tai*/
    var name = allChild[0].textContent
    var dob = allChild[1].textContent
    // 2. do du lieu ra form
    // 2.1 get element form
    var nameInput = document.getElementById('name')
    var dobInput = document.getElementById('dob')
    var rowIndexInput = document.getElementById('vitri')
    // 2.2 gan du lieu cho form
    rowIndexInput.value = rowIndex
    nameInput.value = name
    dobInput.value = dob
    console.log(event, {name, dob, rowIndex})
}

function updateStudent() {
    // 1. get element form
    var nameInput = document.getElementById('name')
    var dobInput = document.getElementById('dob')
    var vitriInput = document.getElementById('vitri')

    // var name = nameInput.value
    var dob = dobInput.value
    var rowIndex = vitriInput.value

    // lay ra list
    var tableList = document.getElementById('list')
    // lay row edit
    var tr = tableList.rows[rowIndex]
    // lay all child
    var allChild = tr.childNodes
    // set gia tri
    // allChild[0].innerText = name
    allChild[0].innerText = nameInput.value
    allChild[1].innerText = dob
}