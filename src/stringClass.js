// this method checks for vowels in a string and returns the appropriate boolean
String.prototype.hasVowels = function() {
  var vowRegex = /[aeiou]/gi;
  if (this.match(vowRegex)) {
    return true;
  }
  else {
    return false;
  }
};

// this method returns a string with all characters in uppercase
String.prototype.toUpper = function() {
  var lowRegex = /[a-z]/g;
  return this.replace(lowRegex, function(argument) {
    return String.fromCharCode(argument.charCodeAt() - 32);
  });
};

// this method returns a string with all characters in lowercase
String.prototype.toLower = function() {
  var upRegex = /[A-Z]/g;
  return this.replace(upRegex, function(argument) {
    return String.fromCharCode(argument.charCodeAt() + 32);
  });
};

// this method returns a string with the first character in uppercase
String.prototype.ucFirst = function() {
  var ucfRegex = /^[a-z]/;
  return this.replace(ucfRegex, function(argument) {
    return String.fromCharCode(argument.charCodeAt() - 32);
  });
};

// this method returns the appropriate boolean whether or not a string is a question
String.prototype.isQuestion = function() {
  var queRegex = /\?$/;
  if (this.match(queRegex)) {
    return true;
  }
  else {
    return false;
  }
};

// this method returns a list of words in the string as an array
String.prototype.words = function() {
  return this.replace(/[^\w\s]/g, '').split(/[\s]/);
};

// this method returns the number of words in a string
String.prototype.wordCount = function() {
  return this.words().length;
};

// String.prototype.toCurrency = function() {
// this.replace(/\d$.../g, ','); 
// };

// this method returns a number representation of the currency string
String.prototype.fromCurrency = function() {
  var currencyStr = this.replace(',', '');
  return +currencyStr;
};
