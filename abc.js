consovar nameInput = document.getElementById('name')
var dobInput = document.getElementById('dob')
var tableList = document.getElementById("list")

var tdName = document.createElement("td")
tdName.innerText = nameInput.value;

var tdDOB = document.createElement("td")
tdDOB.innerText = dobInput.value;

var tr = document.createElement("tr")

var trList = tableList.getElementsByTagName("tr")
var lastTr = trList[trList.length - 1]

if (lastTr.className === "even") {
    tr.className = "odd"
} else {
    tr.className = "even"
}

tr.appendChild(tdName)
tr.appendChild(tdDOB)
tableList.appendChild(tr)
lsd