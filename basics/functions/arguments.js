//Multiple arguments
let add = function(a,b,c){
    return a + b + c;
}

//default arguments
let getScoreText = function (name = 'Anonymous', score = 0){
    return 'Name: ' +name+ '- Score: ' +score;

}

console.log(getScoreText());



//working with default arguments
//1st arg default, 2nd arg custom
scoreText = getScoreText(undefined, 99)
console.log(scoreText)
//1st arg custom, 2nd arg default
scoreText = getScoreText('Andrew')
console.log(scoreText)


//challenge area 1

let getTip = function (total, tipPercent = 0.2) {
    return total * tipPercent;
}
console.log(getTip(100, 0.25));


//template string using '`' and ${}
let name1 = 'Andrew'
let name2 = 'Bob'
console.log(`My name is ${name1}, not ${name2}!`); //easier
console.log('My name is '+name1+ ', not ' +name2 +'!');


let getMsg = function(name1, name2){
    return `My name is ${name1}, not ${name2}!`;
}
console.log(getMsg(name1, name2));

//challenge area 2
let total = 100, tipPercent = 0.25;
 console.log(`A ${tipPercent*100}% tip on $${total} would be $${getTip(total, tipPercent)}`);

 let getTipWithMsg = function(total, tipPercent = 0.25) {
     let percent = tipPercent * 100;
     let tip = total* tipPercent;
     return `A ${percent}% tip on $${total} would be $${tip}`;
 }

 console.log(getTipWithMsg(10, 0.40));