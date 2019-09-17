//this way of variable declaration isn't reccommended


var firstName = 'Andrew';

//can reassign its value
firstName = 'Mike';

console.log(firstName);

//problem 1
//can redeclare a variable that has already declared
//unlike let or const!! PROBLEMATIC

var firstName = 'Jen' //easy to create a variable that has already been used 

//problem 2
//function scope, not block scope
if (10 === 10) {
    var firstName = 'Bob';
}

console.log(firstName); //Can access firstName! This variable is exposed outside of if statement.


if (10 === 10) {
    let firstName = 'Jen'
}
console.log(firstName); //Jen is 'forgotten'!

//var based variables are function scope. A new scope is created
//only when var variable is declared within a function.
//If var is decleared in a block, a new scope is NOT created

const setName = function () {
    var firstName = 'Terry'
}

setName();
console.log(firstName); //Terry is 'forgotten!' firstName is not defined