const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function getGrade(score) {
    if (score >= 90) {
        return 'A+';
    } else if (score >= 80) {
        return 'A';
    } else if (score >= 70) {
        return 'B';
    } else if (score >= 60) {
        return 'C';
    } else if (score >= 50) {
        return 'D';
    } else {
        return 'F';
    }
}

rl.question("Enter the student's score: ", (input) => {
    let Score = parseInt(input); 
    let grade = getGrade(Score);
    console.log(`Grade: ${grade}`);
    rl.close();
});


