let rlSync = require('readline-sync');

multiply();


function multiply() {
  let firstNum = Number(rlSync.question('What is the first number?\n'));
  let secondNum = Number(rlSync.question('What is the second number?\n'));
  let product = firstNum * secondNum;
  console.log(`The product of ${firstNum} and ${secondNum} is ${product}.`);
}
