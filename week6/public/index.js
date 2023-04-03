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

function deleteItem(todo) {
    fetch('http://localhost:3000/api/todos/delete', { method: 'POST',
    headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    body: JSON.stringify({
        itemName: todo
    })
    })
    .then((items) => console.log(items));
}

function addToDoItem() {
    const ul = document.querySelector('ul');
    const myInputString = input.value;
    
    if (myInputString === '') {
        return;
    }
    
    const li = document.createElement('li');
    li.onclick = function (e) {
        console.log(e.currentTarget?.textContent);
        e.currentTarget.remove();
        hasInput();
    }
    li.textContent = myInputString.trim();
    
    ul.appendChild(li);
    
    input.value = '';
}

function appendItems(todos) {
    const ul = document.querySelector('ul');

    if (!todos.length) return;

    todos.forEach(todo => {
        const li = document.createElement('li');
        li.onclick = function (e) {
            e.currentTarget.remove();
            deleteItem(e.currentTarget.textContent);
            hasInput();
        }
        li.textContent = todo;
        
        ul.appendChild(li);
    });
}

function getTodoItems() {
    fetch('http://localhost:3000/api/todos')
        .then(res => res.json())
        .then(todos => appendItems(todos))
        .catch(err => alert(err?.message));
}

document.onreadystatechange = () => {
    if (document.readyState === "complete") {
        getTodoItems();
    }   
};