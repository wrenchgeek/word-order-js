var wordOrder = function(phrase) {
  var phraseArray = phrase.split(" ");
  phraseArray.sort();
  var wordArray = [];
  var finalArray = [];
  while (phraseArray.length !== 0) {
    var word = phraseArray.shift();
    var counter = 1;
    // wordArray.push(word);

    while (word === phraseArray[0]) {
      counter += 1;
      phraseArray.shift();
    }
    wordArray.push(counter);
    wordArray.push(word);
    finalArray.push(wordArray);
    wordArray = [];
  }

  finalArray.sort();
  finalArray.reverse();
  return finalArray;
}

$(document).ready(function() {
  $("form#phrases").submit(function(event) {
    var phrase = ($("input#phrase2").val());
    var sorted = wordOrder(phrase);

    $(".output").text(sorted);

    $("#result").show();
    event.preventDefault();
  });
});
