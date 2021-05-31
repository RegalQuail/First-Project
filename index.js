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

    function crossOut() {
        li.classList.toggle('done');
    }

    li.addEventListener('click', crossOut);
    
    var deleteButton = document.createElement('button');
    deleteButton.appendChild(document.createTextNode('X'));
    li.appendChild(deleteButton);
    deleteButton.addEventListener('click', deleteListItem);

    function deleteListItem() {
        li.classList.add('delete');
    }
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.which === 13) {
        createListElement();
    }
}

enterButton.addEventListener('click', addListAfterClick);

input.addEventListener('keypress', addListAfterKeypress);