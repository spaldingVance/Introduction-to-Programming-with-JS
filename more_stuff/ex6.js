let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

function logMatch(words, pattern) {
  let matches = [];
  for(word in words) {
    if(pattern.test(words[word])) {
      matches.push(words[word]);
    }
  }
  return matches;
}

console.log(logMatch(words, /lab/));
