function evenOrOdd(num) {
  if (Number.isInteger(num)) {
    Number(num)%2 === 0 ? console.log('even') : console.log('odd');
  } else {
    console.log('This is not a number')
  }
}

evenOrOdd(3)
evenOrOdd(40)
evenOrOdd('meep')
