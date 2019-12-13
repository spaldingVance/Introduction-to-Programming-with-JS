let number = 4936
let onesPlace = number % 10
number = (number - onesPlace) / 10

let tensPlace = number % 10
num = (number - tensPlace) / 10

let hundreds = number % 10

let thousands = (number - hundreds) / 10

console.log(onesPlace)
console.log(tensPlace)
console.log(hundreds)
console.log(thousands)
