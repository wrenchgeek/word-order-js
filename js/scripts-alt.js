var wordOrder = function(phrase) {
  var phraseArray = phrase.split(" ");
  phraseArray.sort();
  var finalArray = [];
  for (var wordPosition2 = 0; wordPosition2 < phraseArray.length; wordPosition2 += 1) {
    var counter = 0;
    for (var wordPosition = 0; wordPosition < phraseArray.length; wordPosition += 1 ) {
      var word = phraseArray[wordPosition2];
      if (word === phraseArray[wordPosition]) {
        counter+= 1;
      }
      var wordArray = [word, counter];
      }
    finalArray.push(wordArray);
  }
  finalArray.forEach(function() {
    finalArray.slice(finalArray[1] - 1);
  })

  debugger;
  return finalArray;
}
