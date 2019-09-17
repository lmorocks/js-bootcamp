let name = ' Andrew Mead  '

//Length property
console.log(name.length);

//Convert to upper case
console.log(name.toUpperCase());

//documentation : mdn strings

//Convert to lower case
console.log(name.toLowerCase());

//includes method
//returns true/false
let password = 'abc123asdf098'
console.log(password.includes('password'));
console.log(password.includes('abc'));

//Trim (removes whitespace from string) from ' Andrew Mead ', both ends of string
console.log(name.trim());

//Challenge area

//isValidPassword 
//length > 8, doesn't contain word 'password'

let isValidPassword = function (password) {
    if (password.length > 8 && !password.includes('password')) {
        return true;
    }
    else {
        return false;
    }
}

console.log(isValidPassword('12345678passwor'));

//simplified
let isValidPasswordSimplified = function (password){
    return (password.length > 8 && !password.includes('password'));
}

console.log(isValidPasswordSimplified('1234568password'));