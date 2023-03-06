const input = document.querySelector('input');
input.addEventListener('keyup', onKeyUp);

function onKeyUp(e) {
    if (e.code === 'Enter') {
        addToDoItem();
    }
}

function addToDoItem() {
    const ul = document.querySelector('ul');
    const myInputString = input.value;
    
    if (myInputString === '') {
        return;
    }
    
    const li = document.createElement('li');
    li.textContent = myInputString.trim();
    
    ul.appendChild(li);
    
    input.value = '';
}
// Кога е зареден DOM-a? 'DOMContentLoaded' === тогава.
document.addEventListener('DOMContentLoaded', function () {
});