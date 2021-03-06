describe('Javabuzz', function() {
  let javabuzz;
  beforeEach(function() {
    javabuzz = new Javabuzz();
  });
  
  describe('knows when a number is', function() {
    
    it('divisible by 3', function() {
      expect(javabuzz.isDivisibleByThree(3)).toBe(true);
    });

    it('divisible by 5', function() {
      expect(javabuzz.isDivisibleByFive(5)).toBe(true);
    });

    it('divisible by 3 and 5', function() {
      expect(javabuzz.isDivisibleByFifteen(15)).toBe(true);
    });

  });

  describe('knows when a number is NOT', function() {

    it('divisible by 3', function() {
      expect(javabuzz.isDivisibleByThree(1)).toBe(false);
    });

    it('divisible by 5', function() {
      expect(javabuzz.isDivisibleByFive(4)).toBe(false);
    });
    
    it('divisible by 3 and 5', function() {
      expect(javabuzz.isDivisibleByFifteen(7)).toBe(false);
    });

  });

  describe('when playing, says', function() {
    
    it('"Java" when a number is divisible by 3', function() {
      expect(javabuzz.says(3)).toEqual("Java");
    });

    it('"Java" when a number is divisible by 3', function() {
      expect(javabuzz.says(6)).toEqual("Java");
    });

    it('"Buzz" when a number is divisible by 5', function() {
      expect(javabuzz.says(5)).toEqual("Buzz");
    });

    it('"Buzz" when a number is divisible by 5', function() {
      expect(javabuzz.says(10)).toEqual("Buzz");
    });

    it('"JavaBuzz" when a number is divisible by 3 and 5', function() {
      expect(javabuzz.says(15)).toEqual("JavaBuzz");
    });

    it('"JavaBuzz" when a number is divisible by 3 and 5', function() {
      expect(javabuzz.says(30)).toEqual("JavaBuzz");
    });

    it('returns the number if not divisible by 3 or 5', function() {
      expect(javabuzz.says(1)).toEqual(1);
    });

    it('returns the number if not divisible by 3 or 5', function() {
      expect(javabuzz.says(14)).toEqual(14);
    });

  });

});

