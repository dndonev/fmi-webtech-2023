const todoModule = (function () {

const input = document.querySelector('input');
input.addEventListener('keyup', onKeyUp);

function hasInput() {
    const button = document.querySelector('button');
    if (!button) return;

    if (input.value === '') {
        button.setAttribute('disabled', 'true');
    } else if (button.hasAttribute('disabled')) {
        button.removeAttribute('disabled');
    }
}

function onKeyUp(e) {
    hasInput();
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
    li.onclick = function (e) {
        e.currentTarget.remove();
        hasInput();
    }
    li.textContent = myInputString.trim();
    
    ul.appendChild(li);
    
    input.value = '';
}

document.onreadystatechange = () => {
    if (document.readyState === "complete") {
        hasInput();
    }   
};

return {
    addToDoItem
}
})();

todoModule.addToDoItem();