//DOM Document Object Model

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


// Challenge 7
//---------------------------------------------------------------------------------------------
// 1. Create a checkbox and setup event listener -> "Hide completed"
// 2. Create new hideCompleted filter (default false)
// 3. Update hideCompleted a re-render list on checkbox change
// 4. Setup renderTodos to remove completed items

document.querySelector('#hide-completed').addEventListener('change', function (e) {
    filters.hideCompleted = e.target.checked;
    renderTodosLeft(todos, filters);
})


// Challenge 6
//---------------------------------------------------------------------------------------------
// 1. Create a form with a single input for todo text
// 2. Setup a submit handler and cancel the default action
// 3. Add a new item to the todos array with that text data (completed value of false)
// 4. Re-rendere the application
// 5. Clear the input field value

document.querySelector('form#create-todo').addEventListener('submit', function (e) {
    e.preventDefault();
    const inputText = e.target.elements.todoText.value;
    if (inputText !== "") {
        todos.push({ text: inputText, completed: false });
        console.log('todo created!');
    }
    else {
        console.log('empty input!');
    }
    renderTodosLeft(todos, filters);
    e.target.elements.todoText.value = ''; //clear input field value
})

// Challenge 5
//---------------------------------------------------------------------------------------------
// 1. Setup a div contain for todos
// 2. Setup filters (searchText) and wire up a new filter input to change it
// 3. Create a renderTodos function to render and re-render the latest filtered data

// search filter feature
const renderTodosLeft = function (todos, filterText) {
    const divTodoListElt = document.querySelector('div#todo-list')

    divTodoListElt.innerHTML = ''; //clear list contents

    //get Number of uncompleted todos left
    const todosLeft = todos.filter(function (item) {
        return !item.completed;
    })
    //print number of uncompleted todos
    const newLine = document.createElement('h3');
    newLine.textContent = `You have ${todosLeft.length} todos left.`
    document.querySelector('div#todo-list').appendChild(newLine);

    //filter output:
    //get matched todos
    const matchedTodos = todos.filter(function (item) {
        console.log(filters.filterText);
        const matched = item.text.toLowerCase().includes(filters.filterText.toLowerCase());
        //const showUncompleted = item.completed;//filters.hideCompleted && !item.completed;
        if (filters.hideCompleted){
            return matched && !item.completed;
        }
        else {
            return matched;
        }
    })
    console.log(matchedTodos);

    //render matched todos
    matchedTodos.forEach(function (item) {
        const newPara = document.createElement('p');
        newPara.textContent = item.text;
        divTodoListElt.appendChild(newPara);

    })

}
let filters = {
    searchText: '',
    hideCompleted: false
}

renderTodosLeft(todos, filters.filterText);

//add eventListener to input element
document.querySelector('#search-todos').addEventListener('input', function (e) {
    filters.filterText = e.target.value;

    renderTodosLeft(todos, filters.filterText);

})

//---------------------------------------------------------------------------------------------
// Challenge 4
// create input field and print contents to console in realtime
// document.querySelector('#search-todos').addEventListener('input', function(e){
//     console.log(e.target.value);
// })

//---------------------------------------------------------------------------------------------
// Challenge 3
//---------------------------------------------------------------------------------------------
// button listener
// document.querySelector('#bttn-todo').addEventListener('click', function (e) {
//     console.log('Adding a new todo...');
// })


//---------------------------------------------------------------------------------------------
// CHALLENGE 2
//---------------------------------------------------------------------------------------------
// Print number of todos to do left (incomplete ones). You have 2 todos left (p element)
// Add a p for each todo above (text attribute content)


// Challenge 2 attempt 1
//---------------------------------------------------------------------------------------------
// code evaluation: less efficient mtd. Scan through whole of the same array twice!!
// using .filter would've cut the array size for second iteration 
// let numOfTodos = 0;
// todos.forEach(function (item) {
//     if (item.completed === false) {
//         numOfTodos++;
//     }
// })

// const newPara1 = document.createElement('p');
// newPara1.textContent = `You have ${numOfTodos} todo(s) left.`;
// document.querySelector('body').appendChild(newPara1);

// todos.forEach(function (item) {
//     if (item.completed === false) {
//         const newParagraph = document.createElement('p');
//         newParagraph.textContent = item.text;
//         document.querySelector('body').appendChild(newParagraph);
//     }
// })

// // Challenge 2's <<ANSWER>>: More efficient to use array.filter!!
// //---------------------------------------------------------------------------------------------
// const uncompletedTodos = todos.filter(function (item) {
//     return !item.completed;
// })

// const newPara = document.createElement('h2');
// newPara.textContent = `You have ${uncompletedTodos.length} todo(s) left.`
// document.querySelector('body').appendChild(newPara);

// uncompletedTodos.forEach(function (item) {
//     const newPara = document.createElement('p');
//     newPara.textContent = item.text;
//     document.querySelector('body').appendChild(newPara);
// })

//CHALLENGE 1
//---------------------------------------------------------------------------------------------
// Delete all paragraphs containing the word 'the'

// const ps = document.querySelectorAll('p');

// ps.forEach(function (p) {
//     if (p.textContent.includes('the')) {
//         p.remove()
//     }
// })