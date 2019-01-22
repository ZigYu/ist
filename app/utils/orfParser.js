const fs = require('fs');
const path = require('path');

const text = fs
  .readFileSync(path.join(__dirname, '../static/orf.txt'))
  .toString();

function parse() {
  const arr = text.split('\n');
  const result = {};

  arr.forEach((line, i) => {
    const word = line.split('|');

    if (word[0] === ' \r') {
      const nextLine = arr[i + 1];
      if (nextLine) {
        const words = nextLine.split('|');
        result[words[0].trim()] = getAccent(words[1]);
      }
    }

    if (i % 1000 === 0) console.log(i);
  });

  return result;
}

function getAccent(word) {
  const strArr = word.split('');
  return strArr
    .map((letter, i) => (letter === "'" ? strArr[i - 1] : false))
    .filter(l => l);
}

function saveDictionary(dictionary) {
  fs.writeFileSync(
    path.join(__dirname, '../static/orfDictionary.json'),
    JSON.stringify(dictionary, null, 2)
  );
}

saveDictionary(parse());
