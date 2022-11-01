// var button = document.getElementsByTagName("button")[0];

// button.addEventListener("click", function() {
//     console.log("CLICK!!!!");
// })

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
// document.querySelectorAll("li").className("done");

function inputLength() {
    return input.value.length;
}

function createListElement() {
    var div = document.createElement("div");
    var delButton = document.createElement("button");
    var li = document.createElement("li");
    div.classList.add("wrapper");
    ul.appendChild(div);
    div.append(li, delButton);
    li.appendChild(document.createTextNode(input.value));
    input.value = "";
    delButton.classList.add("delClass");
    delButton.innerHTML = 'Del';
}

function addListAfterClick() {
    // console.log("click is working");
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.which === 13) {
        createListElement();
    }
}

function doneTask(task) {
    if (task.target.tagName === "LI") {
        task.target.classList.toggle("done");
    }
}

function deleteListElement(element) {
    if (element.target.className === "delClass") {
        element.target.parentElement.remove();
    }
}

function handleUIClick(element) {
    doneTask(element);
    deleteListElement(element);
}

ul.addEventListener("click", handleUIClick);
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);