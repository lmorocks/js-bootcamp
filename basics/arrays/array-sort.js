const notes = [{
    title: 'My next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habits to work on',
    body: 'Exercise. Eating a bit better.'
}, {
    title: 'Office modification',
    body: 'Get a new seat'
}]

//---------------------------------------------------------------------------------------------
// To use: array.sort(compareFunction()) or array.sort()
// if compareFunction is undefined, aka array.sort(), default: convert elements into string
// and compare ASCII value, then sort accordingly. 
// if specify compareFunction,
// compareFunction(a, b) takes in 2 elements a & b in array
// and returns a value that's <0, >0, or =0.
// return return < 0 - a comes before b
// return number > 0 - b comes before a
// return 0 - no change in order

const sortNotesByTitle = function (notes) {
    notes.sort(function (a, b) {
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1;
        }
        else if (a.title.toLowerCase() > b.title.toLowerCase()) {
            return 1;
        }
        else {
            return 0;
        }
    })
}

//CHALLENGE AREA
//sort todos, put completed tasks behind
//---------------------------------------------------------------------------------------------
const todos = [{
    text: 'Order cat food',
    completed: false
}, {
    text: 'Clean kitchen',
    completed: true
}, {
    text: 'Buy food',
    completed: false
}, {
    text: 'Do work',
    completed: true
}, {
    text: 'Exercise',
    completed: false
}]

const sortTodosByCompletion = function (todos) {
    todos.sort(function (a, b) {
        if (a.completed === b.completed) {
            return 0;
        }
        else if (a.completed === true) { //b.completed = false
            return 1; //b comes before a
        }
        else { //b. completed = true
            return -1; //a comes before b
        }

    })
}

//Alternate shorter solution:
//true - true = 0
//false - false = 0
//true - false = 1 
//false - true = -1

const sortTodosByCompletion2 = function (todos) {
    todos.sort(function(a,b){
        return a.completed - b.completed; 
    })
}
sortTodosByCompletion2(todos)
console.log(todos);