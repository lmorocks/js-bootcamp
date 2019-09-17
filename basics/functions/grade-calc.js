let getGrade = function (studentScore, totalScore) {
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
        percent = studentScore / totalScore * 100;
        return `You got a ${grade} (${percent}%)!`;
    }

    else {
        return 'Invalid input! Student\'s score has to be between 0 and 100!';
    }
}

console.log(getGrade(100, 100));