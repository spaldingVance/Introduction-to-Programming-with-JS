let array = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
let newArray = removeNonInteger(array);
console.log(newArray); // => [1, 3, -4]

function removeNonInteger(arr) {
  array = arr.filter(value => Number.isInteger(value));
  return array;
}
