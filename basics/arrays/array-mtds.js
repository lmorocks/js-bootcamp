//array declaration

const notes = ['Note 1', 'Note 2', 'Note 3'];

console.log(notes);


console.log(notes.length);

console.log(notes[notes.length-1]);


//push - add element to end of array
notes.push('Todo 6');

//pop, returns item popped
console.log(notes.pop());


//shift, remove first item and returns item removed
console.log(notes.shift());

//unshift, add item to first index , return new length aft new elt added
console.log(notes.unshift('New note 1'));


//splice
notes.splice(1,0, 'This is the new item at position 1.'); //"0" for 2nd arg, cos i want remove nth. 

notes.splice(1,1); //remove item at position 1

notes.splice(1,1, 'New item'); //replace item at pos 1 w 'New item'


console.log(`You have ${notes.length} todos!`);
console.log(notes)
