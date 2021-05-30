var first = document.getElementById('first');
console.log(first);

var input = document.getElementById('userInput');
var enterButton = document.getElementById('enter');
var item = document.getElementsByTagName('li');
var ul = document.querySelector('ul');

function inputLength() {
    return input.value.length;
}

function listLength() {
    return item.length;
}

function createListElement() {
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}