//array declaration
const notes = ['Note 1', 'Note 2', 'Note 3'];


//TRAVERSING ARRAYS
//----------------------------------------------------------------------------------------
//forEach method:
//forEach() calls a provided callback function once for each element in an 
//array in ascending order. It is not invoked for index properties that have
//been deleted or are uninitialized (i.e. on sparse arrays).
//requites items in array
//can't be used for counting, but useful for iterating through
//all items in an array

console.log("forEach loop");
notes.forEach(function(element, index){
    console.log(index);
    console.log(element);
});

//----------------------------------------------------------------------------------------
//for loop
//useful for counting
//works like java & C 's for loop



console.log("for loop");
for (let count = 0; count <=2; count++){ //note: 'count' is locally scoped to the for statement
    console.log(count);
}

//for arrays

for (let count = 0; count < notes.length ; count++){
    console.log(notes[count]);
}