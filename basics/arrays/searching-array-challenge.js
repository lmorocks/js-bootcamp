const todosOld = ['Order cat food', 'Clean kitchen', 'Buy food', 'Do work', 'Exercise'];


const todos = [{
    text: 'Order cat food',
    completed: false
}, {
    text: 'Clean kitchen',
    completed: false
}, {
    text: 'Buy food',
    completed: false
}, {
    text: 'Do work',
    completed: false
}, {
    text: 'Exercise',
    completed: false
}, {
    text: 'order cat food',
    completed: false
}]


//CHALLENGE AREA
//searching array
//----------------------------------------------------------------------------------------
//using forEach
console.log('\n\nUsing forEach method... \n')
console.log('before:.. ');
console.log(todos);
const deleteTodo = function (todos, text) {
    todos.forEach(function (item, index){
        if (item.text.toLowerCase() === text.toLowerCase()){
            todos.splice(index, 1);
            
        }
        if (index === todos.length - 1) {
            console.log('text doesn\'t exist!' );
        }
    })
}
console.log('\nafter...');
deleteTodo(todos, 'orderr cat food');
console.log(todos);

//----------------------------------------------------------------------------------------
//using find()
console.log('\n\nUsing find method... \n')
console.log('before:.. ');
console.log(todos);

const deleteTodo2 = function (todos, text) {
    const todo = todos.find(function(item, index){
        if( item.text.toLowerCase() === text.toLowerCase()){
            todos.splice(index, 1);
            return true;
        }
        else {
            console.log('text doesn\'t exist!');
            return false;
        }        
    })
}

console.log('\nafter...');
deleteTodo2(todos, 'clean kitchen');
console.log(todos);

//----------------------------------------------------------------------------------------
//using findIndex()
console.log('\n\nUsing findIndex method... \n')
console.log('before:.. ');
console.log(todos);

const deleteTodo3 = function(todos, text){
    const index = todos.findIndex(function (element, index){
        if (element.text.toLowerCase() === text.toLowerCase()){
            return true;
        }
    })
    //NOTE: findIndex returns -1 if it is not found! 
    //splice will still work: .splice(-1, 1) (wraparound like python)
    //need to check if index returned is != -1
    if (index === -1){
        console.log('Text doesn\'t exist!');
    } else {
        todos.splice(index, 1);
    }
}

console.log('\nafter...');
deleteTodo3(todos, 'exercise');
console.log(todos);

