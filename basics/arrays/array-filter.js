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
// array.filter()
// filter() calls a provided callback function once for each element in an array, 
// and constructs a new array of all the values for which callback returns a value 
// that coerces to true. Array elements which do not pass the callback test are simply
// skipped, and are not included in the new array.

const findNotes = function (notes, query) {
    return filteredNotes = notes.filter(function (note, index) {
        const isTitleMatched = note.title.toLowerCase().includes(query);
        const isBodyMatched = note.title.toLowerCase().includes(query);
        return isTitleMatched || isBodyMatched;
    })
}

console.log(findNotes(notes, 'none'));

//CHALLENGE AREA
//----------------------------------------------------------------------------------------------
console.log('\nCHALLENGE AREA:....\n');

const todos = [{
    text: 'Order cat food',
    completed: true
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

console.log('\nfilter constraint: uncompleted todo + query');
//filter = uncompleted todo + query constraint
const getThingsToDo = function (todos, query) {
    return todos.filter(function (todo) {
        if (todo.completed === false) {
            return todo.text.toLowerCase().includes(query);
        }
        else {
            return false;
        }
    })
}

console.log(getThingsToDo(todos, 'work'));

console.log('\nfilter constraint: uncompleted todo');
//filter = 'uncompleted' constraint
const getThingsToDo2 = function (todos) {
    return todos.filter(function (todo) {
        return !todo.completed;
    })
}
console.log(getThingsToDo2(todos));