describe('The hasVowels method', function() {
  var vowStr = 'ali is a boy',
      conStr = 'bcdfg';
  it('should return true if a string contains vowels', function() {
    expect(vowStr.hasVowels()).toBe(true);
  });

  it('should return false if a string does not contains a vowel', function() {
    expect(conStr.hasVowels()).toBe(false);
  });
});

describe('The toUpper method', function() {
  var lowCaseStr = 'ali is a boy',
      mixedCaseStr = 'siMbi Is a gIrl';
  it('should return a lowercase string with all the characters in uppercase', function() {
    expect(lowCaseStr.toUpper()).toBe('ALI IS A BOY');
  });

  it('should return a mixed-case string with all the characters in uppercase', function() {
    expect(mixedCaseStr.toUpper()).toBe('SIMBI IS A GIRL');
  });
});

describe('The toLower method', function() {
  var upCaseStr = 'THIS IS ANDELA',
      mixedCaseStr = 'HerBert macAulay AND amity';
  it('should return an uppercase string with all the characters in lowercase', function() {
    expect(upCaseStr.toLower()).toBe('this is andela');
  });

  it('should return a mixed-case string with all the characters in lowercase', function() {
    expect(mixedCaseStr.toLower()).toBe('herbert macaulay and amity');
  });
});

describe('The ucFirst method', function() {
  var lowCaseFirst = 'mr smith';
  it('should return a string with the first character in uppercase', function() {
    expect(lowCaseFirst.ucFirst()).toBe('Mr smith');
  });
});

describe('The isQuestion method', function() {
  var question = 'are you hungry?',
      notQuestion = 'i am not hungry';
  it('should return true if a string is a question', function() {
    expect(question.isQuestion()).toBe(true);
  });

  it('should return false if a string is nt a question', function() {
    expect(notQuestion.isQuestion()).toBe(false);
  });
});

describe('The words method', function() {
  var wordList = 'today is a good day';
  it('should return a list of words in a string as an array', function() {
    expect(wordList.words()).toEqual([ 'today', 'is', 'a', 'good', 'day' ]);
  });
});

describe('The wordCount method', function() {
  var wordNum = 'masters love to practice';
  it('should return the number of words in a string', function() {
    expect(wordNum.wordCount()).toEqual(4);
  });
});

// describe('The toCurrency method', function() {
//   var lowStr = 11111.11;
//   it('should return a string with all the characters in uppercase', function() {
//     expect(lowStr.toCurrency()).toBe('11,111.11');
//   });
// });

describe('The fromCurrency method', function() {
  var currencyStr = '11,111.11';
  it('should return a number representation of the currency string', function() {
    expect(currencyStr.fromCurrency()).toEqual(11111.11);
  });
});
