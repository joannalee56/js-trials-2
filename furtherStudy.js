'use strict';

function wordsInCommon(words1, words2) {
  const words1Set = new Set(words1);
  const words2Set = new Set(words2);

  const result = new Set();

  for (const word of words1Set){
    if (words2Set.has(word)){
      result.add(word);
    }
  }
  return Array.from(result);
}

console.log(wordsInCommon([2, 3, 4], [3, 4, 5]))

function kidsGame(names) {
  const output = [names.shift()];
  const firstLettertoWords = {};

  for (const name of names){
    if (!firstLettertoWords.hasOwnProperty(name[0])){
      firstLettertoWords[name[0]] = [name];
    } else {
      firstLettertoWords[name[0]].push(name);
    }
  }
  while (true) {
    let lastWord = output[(output.length)-1];
    let startLetter = output[(output.length)-1][(lastWord.length)-1];

    if (!firstLettertoWords.hasOwnProperty(startLetter)){
      break;
    }
    let word = firstLettertoWords[startLetter].shift();
    output.push(word);
  }
  return output

}

// console.log(kidsGame(["apple", "berry", "cherry"]));
console.log(kidsGame(["bagon", "baltoy", "yamask", "starly", "nosepass", "kalob", "nicky", "booger"]));