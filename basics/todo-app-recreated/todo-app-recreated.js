// data

const todos = [{
    text: 'Order cat food',
    completed: false
}, {
    text: 'Clean kitchen',
    completed: false
}, {
    text: 'Buy food',
    completed: true
}, {
    text: 'Do work',
    completed: false
}, {
    text: 'Exercise',
    completed: true
}]

const filters = {
    hideCompleted: false,
    filterText: ''
}



// Create a todo 
document.querySelector('form#create-todo').addEventListener('submit', function (e) {
    e.preventDefault();
    const txt = e.target.elements.todoText.value;

    if (txt === '') {
        console.log('empty input!')
        
    }
    else {
        const todo = { text: txt, completed: false }
        todos.push(todo);
        e.target.elements.todoText.value = ''; // clear input field
    }
    renderList(todos, filters); // re-render todo list
})

// filter todos: get array of todos that matches filter criteria
const getFilteredTodos = function (todos, filters){
    return todos.filter(function(item){

        // filterText filter
        const keyword = filters.filterText.toLowerCase();
        const isMatched = item.text.toLowerCase().includes(keyword);

        // hide completed filter 
        let dontDisplayThisTodo = true;
        if (filters.hideCompleted === true) {
            if (item.completed === false) {
                dontDisplayThisTodo = true;
            }
            else {
                dontDisplayThisTodo = false;
            }
            
        }

        return isMatched && dontDisplayThisTodo;
    })
}

// filter todos: get hide-completed status
document.querySelector('input#hide-completed').addEventListener('change', function(e){
    filters.hideCompleted = e.target.checked; // get input 
    renderList(todos, filters);
})

// filter todos: get filter keyword status
document.querySelector('input#filter-todo').addEventListener('input', function(e){
    filters.filterText = e.target.value; // get & update filter text
    renderList(todos, filters);
})

// render all todos
const renderList = function (todos, filters) {
    const divTodoList = document.querySelector('div#todo-list');

    divTodoList.innerHTML = ''; // clear list content

    const filteredTodos = getFilteredTodos(todos, filters);

    // print # of todos
    const newTxt = document.createElement('h3');
    newTxt.textContent = `You have a total of ${todos.length} todo(s) and ${filteredTodos.length} uncompleted todo(s)`;
    divTodoList.appendChild(newTxt);


    // print individual todo line by line
    filteredTodos.forEach(function (item) {
        const newTxt = document.createElement('p');
        newTxt.textContent = item.text;
        divTodoList.appendChild((newTxt));
    })
}

renderList(todos, filters);