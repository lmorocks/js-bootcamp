//undefined for variables

//Exception: variable undefined
//console.log(name);

//can use to check if variable is undefined
let name; //variable not assigned anything

if(name === undefined){
    console.log("Please provide a name.");
}

else {
    console.log(name);
}

//undefined for functions
//undefined as function default value
let square = function(input){
    console.log(input);
}

let result = square(2);
console.log(result);

//null as assigned value
//use null instead of undefined when representing 'empty' variable

let age = 27;
//want to clear age value:
age = null;
console.log(age);