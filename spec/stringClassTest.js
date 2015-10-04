describe('The hasVowels method', function() {
  var vowStr = 'ali is a boy',
      conStr = 'bcdfg',
      output = vowStr.hasVowels();
  it('should return true if a string contains vowels', function() {
    expect(vowStr.hasVowels()).toBe(true);
  });

  it('should return false if a string does not contains a vowel', function() {
    expect(conStr.hasVowels()).toBe(false);
  });

  it('should have a return data-type of Boolean', function() {
    expect(typeof output).toBe('boolean');
  });
});

describe('The toUpper method', function() {
  var lowCaseStr = 'ali is a boy',
      mixedCaseStr = 'siMbi Is a gIrl',
      output = lowCaseStr.toUpper();
  it('should return a lowercase string with all the characters in uppercase', function() {
    expect(lowCaseStr.toUpper()).toBe('ALI IS A BOY');
  });

  it('should return a mixed-case string with all the characters in uppercase', function() {
    expect(mixedCaseStr.toUpper()).toBe('SIMBI IS A GIRL');
  });

  it('should have a return data-type of String', function() {
    expect(output).toEqual(jasmine.any(String));
  });
});

describe('The toLower method', function() {
  var upCaseStr = 'THIS IS ANDELA',
      mixedCaseStr = 'HerBert macAulay AND amity',
      output = upCaseStr.toLower();
  it('should return an uppercase string with all the characters in lowercase', function() {
    expect(upCaseStr.toLower()).toBe('this is andela');
  });

  it('should return a mixed-case string with all the characters in lowercase', function() {
    expect(mixedCaseStr.toLower()).toBe('herbert macaulay and amity');
  });

  it('should have a return data-type of String', function() {
    expect(output).toEqual(jasmine.any(String));
  });
});

describe('The ucFirst method', function() {
  var lowCaseFirst = 'mr smith',
      output = lowCaseFirst.ucFirst();
  it('should return a string with the first character in uppercase', function() {
    expect(lowCaseFirst.ucFirst()).toBe('Mr smith');
  });

  it('should have a return data-type of String', function() {
    expect(output).toEqual(jasmine.any(String));
  });
});

describe('The isQuestion method', function() {
  var question = 'are you hungry?',
      notQuestion = 'i am not hungry',
      output = question.isQuestion();
  it('should return true if a string is a question', function() {
    expect(question.isQuestion()).toBe(true);
  });

  it('should return false if a string is nt a question', function() {
    expect(notQuestion.isQuestion()).toBe(false);
  });

  it('should have a return data-type of Boolean', function() {
    expect(typeof output).toBe('boolean');
  });
});

describe('The words method', function() {
  var wordList = 'today is a good day',  
      output = wordList.words();
  it('should return a list of words in a string as an array', function() {
    expect(wordList.words()).toEqual([ 'today', 'is', 'a', 'good', 'day' ]);
  });

  it('should have a return data-type of Object', function() {
    expect(output).toEqual(jasmine.any(Object));
  });

  it('should have a return instance of Array', function() {
    expect(output instanceof Array).toBe(true);
  });
});

describe('The wordCount method', function() {
  var wordNum = 'masters love to practice',
      output = wordNum.wordCount();
  it('should return the number of words in a string', function() {
    expect(wordNum.wordCount()).toEqual(4);
  });

  it('should have a return data-type of Number', function() {
    expect(output).toEqual(jasmine.any(Number));
  });
});

describe('The toCurrency method', function() {
  var currency = '11111.11',
      output = currency.toCurrency();
  it('should return a currency representation of a string', function() {
    expect(currency.toCurrency()).toBe('11,111.11');
  });

  it('should have a return data-type of String', function() {
    expect(output).toEqual(jasmine.any(String));
  });
});

describe('The fromCurrency method', function() {
  var currencyStr = '11,111.11',
      output = currencyStr.fromCurrency();
  it('should return a number representation of the currency string', function() {
    expect(currencyStr.fromCurrency()).toEqual(11111.11);
  });

  it('should have a return data-type of Number', function() {
    expect(output).toEqual(jasmine.any(Number));
  });
});
