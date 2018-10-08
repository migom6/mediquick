var speller = require("./speller");

class searchTool {
  train(string1) {
    speller.train(string1);
  }
  predict(input) {
    let output = [];
    for (var key in speller.correct(input)) {
      if (key !== "isEmpty") {
        output.push(key);
      }
    }
    return output.filter(function(item, index, inputArray) {
      return inputArray.indexOf(item) === index;
    });
  }
}

var search = new searchTool();
module.exports = search;
