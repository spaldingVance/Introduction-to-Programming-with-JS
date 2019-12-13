function times(number1, number2) {
  let result = number1 * number2;
  //console.log(result);
  return result;
}

console.log(times(1, 1));
console.log(times(1, 2));
console.log(times(1,times(2, 3)));
console.log(times(1, times(2, times(3, 4))));
console.log(times(1, times(2, times(3, times(4, 5)))));
