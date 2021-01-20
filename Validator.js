// Реализовать класс RangeValidator, со следующими свойствами:
//     ■  from (number);
//     ■  to (number);
// Реализовать getter'ы и setter'ы для обоих свойств
// Реализовать getter range, который будет возвращать массив с двумя числами диапазона
// Реализовать метод validate, который будет принимать число и проверить входит ли число
// в указанный диапазон. Возвращает число, если оно входит в диапазон. Выкидывает ошибку, если не входит в диапазон

class RangeValidator {
  constructor(from = 0, to = 0) {
    this.from = from;
    this.to = to;
  }

  get from() {
    return this._from;
  }

  set from(v) {
    if (typeof v !== 'number') {
      throw new TypeError('Data must be a number');
    }
    if (v > this._to) {
      throw new RangeError(`The number must not be more than ${this._to}`);
    }
    this._from = v;
  }

  get to() {
    return this._to;
  }

  set to(v) {
    if (typeof v !== 'number') {
      throw new TypeError('Data must be a number');
    }
    if (v < this._from) {
      throw new RangeError(`The number must not be less than ${this._from}`);
    }
    this._to = v;
  }

  get range() {
    return [this._from, this._to];
  }

  validate(number) {
    if (typeof number !== 'number') {
      throw new TypeError('Data must be a number');
    }
    if (number >= this._from && number <= this._to) {
      return number;
    }
    throw new RangeError('The number is out of range');
  }

}

const range = new RangeValidator(0, 80);
const validNum = 77;
console.log(range.validate(validNum));
