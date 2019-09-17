let isRaining = true;

isRaining = false;

console.log(isRaining);


//const based variable can't be changed
const isRaining2 = true;
isRaining2 = false; //error!

//const 'objects'

const person = {
    age: 27
}

//person = {} - error!
person.age = 28 //valid!!

//PURPOSE:
//Code readability
//Allows us to understand whether a variable will change or remain constant

//EG.

const getGrade = function (studentScore, totalScore) {
    let validInput = true;
    let grade;

    if (0 <= studentScore && studentScore <= 59) {
        grade = 'F';
    }
    else if (60 <= studentScore && studentScore <= 69) {
        grade = 'D';
    }

    else if (70 <= studentScore && studentScore <= 79) {
        grade = 'C';
    }

    else if (80 <= studentScore && studentScore <= 89) {
        grade = 'B';
    }

    else if (90 <= studentScore && studentScore <= 100) {
        grade = 'A';
    }
    else {
        validInput = false;
    }

    if (validInput) {
        const percent = studentScore / totalScore * 100;
        return `You got a ${grade} (${percent}%)!`;
    }

    else {
        return 'Invalid input! Student\'s score has to be between 0 and 100!';
    }
}

console.log(getGrade(100, 100));

//ANOTHER EXAMPLE
const gradeCalc = function (score, totalScore) {
    const percent = (score / totalScore) * 100;
    let letterGrade = '';

    if (percent >=90){
        letterGrade = 'A';
    } else if (percent >=80) {
        letterGrade = 'B';
    } else if (percent >=70) {
        letterGrade = 'C';
    } else if (percent >=60) {
        letterGrade = 'D';
    } else {
        letterGrade = 'F';
    }

    return `You got a ${letterGrade} (${percent}%)!`;

}

const result = gradeCalc(9, 20);
console.log(result);