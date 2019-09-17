let num = 103.941;

//Precision = 2dp
console.log(num.toFixed(2));

console.log(Math.round(num));
console.log(Math.floor(num));
console.log(Math.ceil(num));


//Generate random number between 10 & 20
let min = 10;
let max = 20;

//0 - 0.99999 - Math.random()
//0 - 9.99999 - Math.random() * (max-min)
//0 - 10.99999 - Math.random() * (max- min +1)
//10 - 20.99999 - Math.random() * (max-min+1) + min
//10 - 20 - Math.floor( Math.random()* (max-min+1) +min )
let randomNum = Math.floor(Math.random() * (max - min + 1) + min)

console.log(randomNum);

//Challenge area
// guess within 1-5 : true, else false
let guessANumber = function (guess) {
    let min = 1;
    let max = 5;
    let randomNum = Math.floor(Math.random() * (max - min + 1) + min)
    
    console.log(`Your guess is: ${guess} The correct answer is: ${randomNum}`);
    return guess === randomNum;
}

console.log(guessANumber(5));

