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

notes2 = ['bob', 'name'];

//functions - traversing array of objects


//----------------------------------------------------------------------------------------
//searching array + findIndex() example
//The findIndex method executes the callback function once for every index 0..length-1 
//(inclusive) in the array until it finds the one where callback returns a truthy value 
//(a value that coerces to true).

//findIndex() mtd returns index that was found
console.log('\n\nUsing custom function findNote - findIndex()...\n\n');
const findNote = function (notes, noteTitle) {
    const index = notes.findIndex(function (notes, index) { //using findIndex
        return notes.title.toLowerCase() === noteTitle.toLowerCase(); //callback gotta return true/false
    })
    return notes[index]; //
}


const aNote = findNote(notes, 'My next trip');
console.log(aNote);


//----------------------------------------------------------------------------------------
//searching array + find() example
//The find method executes the callback function once for each index of the array 
//until it finds one where callback returns a true value. 
//find() mtd returns the object that was found
console.log('\n\nUsing custom function findNote - find()...\n\n');
const findNote2 = function (notes, noteTitle) {
    return notes.find(function(notes) {
        return notes.title.toLowerCase() === noteTitle.toLowerCase(); //gotta return true/false
    })
}

const anotherNote = findNote2(notes, 'my next trip');
console.log(anotherNote);

console.log('\n\nUsing indexOf...\n\n');





//----------------------------------------------------------------------------------------
//array.findIndex usage

console.log('\n\nUsing findIndex...\n\n');
const index = notes.findIndex(function (notes, index){
    console.log(index);
    return notes.title === 'Office modification';
})

console.log(`index is: ${index}`);




//----------------------------------------------------------------------------------------
//array.indexof('some val'), returns index. -1 = not in array
console.log(notes2.indexOf('bob'));

//PROBLEMS:
//indexOf() mtd NOT suitable for arrays containing objects

//using === , or checking for equality
//objects haveing the exact same contents - traits, are stored in different memory locations
//is {} === {} ? no, because they aren't the exact same object that's stored in the same location
// whereas: 
// let anObject =  {}
// let anotherObject = anObject - both reference point to same object
// anotherObject === anObject is TRUE


//let notes = [{}, {title: 'My next trip}]
//in the method notes.indexOf({}) , it scans the whole array and uses this
//=== operater to check whether the argument exists.
// notes.indexOf({}) will return -1, aka doesn't exist, for the reason mentioned above