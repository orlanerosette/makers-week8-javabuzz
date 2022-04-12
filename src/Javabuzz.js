class Javabuzz {
  isDivisibleByThree(number) {
    return this._isDivisibleBy(number, 3);
  }

  isDivisibleByFive(number) {
    return this._isDivisibleBy(number, 5);
  }

  isDivisibleByFifteen(number) {
    return this._isDivisibleBy(number, 15);
  }

  _isDivisibleBy(number, divisor) {
    return (number % divisor === 0);
  }

  says(number) {
    if (this._isDivisibleBy(number, 15)) {
      return "JavaBuzz";
    }

    if (this._isDivisibleBy(number, 3)) {
      return "Java";
    }

    if (this._isDivisibleBy(number, 5)) {
      return "Buzz";
    }
    return number;
  }
}

let javabuzz = new Javabuzz();

for (let i = 1; i <= 100; i++) {
  console.log(javabuzz.says(i));
  // return javabuzz.says(i);
}