var wordOrder = function(phrase) {
  var phraseArray = phrase.split(" ");
  debugger;
  var finalArray = [];
    var counter = 1;
    var word = phraseArray[0]
    for (word = 0; word < phraseArray.length; word += 1) {
    wordToCompare = PhraseArray.shift();
      for (var wordPosition = 0; wordPosition < phraseArray.length; wordPosition += 1) {
        if wordToCompare === phraseArray[wordPosition] {
          counter+=1;
          wordToRemove
        }


      var word = phraseArray[wordPosition2];
      if (word === phraseArray[wordPosition]) {
        counter+= 1;
      }
      var wordArray = [word, counter];
    }
    phraseArray.shift();
    finalArray.push(wordArray);
  }
  return finalArray;
}



for (var wordPosition2 = 0; wordPosition2 < phraseArray.length; wordPosition2 += 1) {
