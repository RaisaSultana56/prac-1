const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Enter a number: ", (input) => {
    const number = parseInt(input);

     if (number % 2 === 0) 
        {
        console.log(`The number ${number} is even.`);
    } 
    else
     {
        console.log(`The number ${number} is odd.`);
    }

   
    rl.close();
});
