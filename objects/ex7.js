function copyObj(objToCopy, arr = Object.keys(objToCopy)) {
  let newObj = {}
  for (val in arr) {
    newObj[arr[val]] = objToCopy[arr[val]];
  }
  return newObj;
}

let objToCopy = {
  foo: 1,
  bar: 2,
};

let newObj = copyObj(objToCopy);
console.log(newObj.foo);    // => 1
console.log(newObj.bar);    // => 2

let newObj2 = copyObj(objToCopy, [ 'foo' ]);
console.log(newObj2.foo);   // => 1
console.log(newObj2.bar);   // => undefined
