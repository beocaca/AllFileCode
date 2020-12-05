function f1(n) {
    var result = 1
    for (var i = n; i > 0; i--) {
        result = result * i
    }
    return result
}


function f2(n) {
    // 5*f2(4)=120
    // 4*f2(3)=24
    // 3*f2(2)=6
    // 2*f2(1)=2
    // 1
    if (n <= 1) {
        return 1;
    }
    return n * f2(n - 1)
}

// var users = [
//   {
//     name: "aaaaaaa",
//     dob: "2020-12-09"
//   },
//   {
//     name: "bbbbbbb",
//     dob: "2020-12-09"
//   },
//   {
//     name: "ccccccccc",
//     dob: "2020-12-09"
//   }
// ];

function addUser(user) {
    var idInput = user.id;
    var createdAtInput = user.createdAt;
    var nameInput = user.name;
    var avartarInput = user.avatar;

    var tableList = document.getElementById('list')
    var tdId = document.createElement('td')
    var tdCreat = document.createElement('td')
    var tdName = document.createElement('td')
    var tdAvatar = document.createElement('td')

    var dob = validateName(createdAtInput);
    var name = validateName(nameInput);
    if (!name) {
        //alert("sai")
        return
    }
    if (!dob) {
        //alert("saiiiii")
        return
    }

    tdId.textContent = idInput
    tdCreat.textContent = createdAtInput
    tdName.textContent = nameInput
    tdAvatar.textContent = avartarInput

    var tr = document.createElement('tr')
    tr.appendChild(tdId)
    tr.appendChild(tdCreat)
    tr.appendChild(tdName)
    tr.appendChild(tdAvatar)


    var trList = tableList.getElementsByTagName('tr')
    var lastTr = trList[trList.length - 1]
    if (lastTr.className === "even") {
        tr.className = "odd"
    } else {
        tr.className = "even"
    }

    var tdCommands = document.createElement('td')
    var editButton = document.createElement('button')
    var removeButton = document.createElement('button')
    editButton.textContent = "Edit"
    editButton.onclick = editStudent
    removeButton.textContent = "Remove"
    removeButton.onclick = (e) => {
        removeStudent(idInput, e)
    };
    tdCommands.appendChild(editButton)
    tdCommands.appendChild(removeButton)
    tr.appendChild(tdCommands)

    tableList.appendChild(tr)
}


function setColor() {
    var colorInput = document.getElementById('color')
    color = colorInput.value
    var table = document.getElementById('list')
    table.bgColor = color
}


function validateName(name) {
    if (!name || !name.trim() || name.trim().length < 3) {
        alert("Invalid Name")
        return false;
    }
    return name;
}


function validateDOB(dob) {
    if (isNaN(Date.parse(dob))) {
        alert("Invalid Date")
        return false;
    }
    return dob;
}

function addStudent() {
    var nameInput = document.getElementById('name')
    var dobInput = document.getElementById('dob')
    var tableList = document.getElementById('list')
    var tdName = document.createElement('td')
    var tdDob = document.createElement('td')
    var dob = validateName(dobInput.value);
    var name = validateName(nameInput.value);
    if (!name) {
        //alert("sai")
        nameInput.value = ""
        return
    }
    if (!dob) {
        //alert("saiiiii")
        dobInput.value = ""
        return
    }

    tdName.textContent = name
    tdDob.textContent = dob
    var tr = document.createElement('tr')
    tr.appendChild(tdName)
    tr.appendChild(tdDob)

    var trList = tableList.getElementsByTagName('tr')
    var lastTr = trList[trList.length - 1]
    if (lastTr.className === "even") {
        tr.className = "odd"
    } else {
        tr.className = "even"
    }

    var tdCommands = document.createElement('td')
    var editButton = document.createElement('button')
    var removeButton = document.createElement('button')
    editButton.textContent = "Edit"
    editButton.onclick = editStudent
    removeButton.textContent = "Remove"
    removeButton.onclick = removeStudent()
    tdCommands.appendChild(editButton)
    tdCommands.appendChild(removeButton)
    tr.appendChild(tdCommands)

    tableList.appendChild(tr)
    nameInput.value = ""
    dobInput.value = ""
}


/*function editStudent(event) {

  var vitri = event.target.parentNode.parentElement.rowIndex
  var tr = event.target.parentNode.parentNode
  var allChild = tr.childNodes
  var name = allChild[0].textContent
  var dob = allChild[1].textContent
  var nameInput = document.getElementById('name')
  var dobInput = document.getElementById('dob')
  var vitriInput = document.getElementById('vitri')
  vitriInput.value = vitri
  nameInput.value = name
  dobInput.value = dob
   */
// var nameOld = event.target.parentNode.previousSibling.previousSibling.textContent
// var nameNew = prompt("ten", nameOld)
// event.target.parentNode.previousSibling.previousSibling.textContent = nameNew


//   function editStudent(event){
//   var name = event.target.parentNode.previousSibling.previousSibling
//   var oldName = name.textContent
//   var newName = validateName(prompt("Name replace", oldName))
//   if (!newName) {
//     return;
//   }
//   name.textContent = newName
//
//   var date = event.target.parentNode.previousSibling
//   var oldDate = date.textContent
//   var newDate = validateDOB(prompt("Date replace", oldDate))
//   if (!newDate) {
//     return
//   }
//   date.textContent = newDate
//
//   console.log(event, {oldName}, {newName}, {oldDate}, {newDate})
// }

function editStudent(event) {
    var name = event.target.parentNode.previousSibling.previousSibling
    var oldName = name.textContent
    var newName = validateName(prompt("name", oldName))
    if (!newName) {
        return;
    }
    name.textContent = newName

    var date = event.target.parentNode.previousSibling
    var oldDate = date.textContent
    var newDate = validateDOB(prompt("date", oldDate))
    if (!newDate) {
        return false;
    }
    date.textContent = newDate
    console.log(event)
}


function updateStudent(event) {
    /*
      var nameInput = document.getElementById('name')
      var dobInput = document.getElementById('dob')
      var vitrInput = document.getElementById('vitri')
      var dob = dobInput.value
      var name = nameInput.value
      var viTri = vitrInput.value
      var tableList = document.getElementById('list')
      var tr = tableList.rows[viTri]
      var allChil = tr.childNodes
      allChil[0].textContent = name
      allChil[1].textContent = dob
       */
    window.xxx = event;

}


window.addStudent = addStudent;
window.setColor = setColor;
window.editStudent = editStudent;
window.updateStudent = updateStudent;
window.removeStudent = removeStudent;


function removeStudent(id, e) {
    if (!window.confirm('delete this row ?')) { return }
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            // Typical action to be performed when the document is ready:
            console.log(e)
            e.target.parentElement.parentElement.remove()
            alert('deleted ')
        }
    };
    xhr.open('DELETE', 'https://5fb3f39db6601200168f817f.mockapi.io/users/' + id);
    xhr.responseType = 'json';
    xhr.send();
    console.log(id)
}
function edit(id,e) {
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            // Typical action to be performed when the document is ready:
            console.log(e)
            e.target.parentElement.parentElement.remove()
            alert('deleted ')
        }
    };
    xhr.open('PUT', 'https://5fb3f39db6601200168f817f.mockapi.io/users/' + id);
    xhr.responseType = 'json';
    xhr.send('');
    console.log(id)
}


window.onload = function () {
    let xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://5fb3f39db6601200168f817f.mockapi.io/users');

    xhr.responseType = 'json';

    xhr.send();


// the response is {"message": "Hello, world!"}
    xhr.onload = function () {

        users = xhr.response;
        users.forEach(user => addUser(user));
        console.log(users);
    };
}
