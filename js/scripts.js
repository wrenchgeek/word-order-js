var wordOrder = function(phrase) {
  var phraseArray = phrase.split(" ");
  phraseArray.sort();
  var finalArray = [];

  while (phraseArray.length !== 0) {
    var word = phraseArray.shift();
    var counter = 1;
    finalArray.push(word);

    while (word === phraseArray[0]) {
      counter += 1;
      phraseArray.shift();
    }
    finalArray.push(counter);
  }
  return finalArray;
}
