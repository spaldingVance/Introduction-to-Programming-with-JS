let rlSync = require('readline-sync')

let firstName = getName("What is your first name?\n");
let lastName = getName("What is your last name?\n");
console.log(`Hello, ${firstName} ${lastName}!`)

function getName(prompt) {
  let name = rlSync.question(prompt);
  return name;
}
