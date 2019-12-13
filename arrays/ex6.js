

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]

function oddLengths(arr) {
  arr = arr.map(str => str.length);
  return arr.filter(num => num % 2 === 1);
}
