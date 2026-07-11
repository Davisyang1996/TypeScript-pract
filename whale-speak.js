// Whale Speak
const input = 'Wubba Lubba Dub Dub'.toLowerCase();
const vowels = ['a', 'e', 'i', 'o', 'u'];
const resultArray = [];

for (let char of input) {
  for (let vowel of vowels) {
    if (char === vowel) {
      resultArray.push(char.toUpperCase());

      if (char === 'e' || char === 'u') {
        resultArray.push(char.toUpperCase());
      }
    }
    else if (char === ' ') {
        resultArray.push(' ');
    }
  }
}

console.log(resultArray.join(''));