function capsIfLarge(str) {
  if (str.length > 10) {
    return str.toUpperCase();
  } else {
    return str;
  }
}

console.log(capsIfLarge('hello world'))
console.log(capsIfLarge('goodbye'))
