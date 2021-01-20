
// Реализуйте класс Student (Студент), который будет наследовать от класса User.
//  Этот класс должен иметь следующие свойства: name (имя, наследуется от User), 
//  surname (фамилия, наследуется от User), year (год поступления в вуз). 
//  Класс должен иметь метод getFullName() (наследуется от User), с помощью которого 
//  можно вывести одновременно имя и фамилию студента. Также класс должен иметь 
//  метод getCourse(), который будет выводить текущий курс студента (от 1 до 5). 
//  Курс вычисляется так: нужно от текущего года отнять год поступления в вуз. 
//  Текущий год получите самостоятельно.

class User {
  constructor(name, surname) {
    this._name = name;
    this._surname = surname;
  }
  set name(str) {
    if (typeof str !== 'string') {
      throw new TypeError("Name isn't a string");
    }
  }
  get name() {
    return this._name;
  }
  set surname(str) {
    if (typeof str !== 'string') {
      throw new TypeError("Surname isn't a string");
    }
  }
  get surname() {
    return this._surname;
  }

  getFullName() {
    if (typeof (this._name || this._surname) !== 'string') {
      throw new TypeError("Arguments aren't a string");
    }
    return `${this._name} ${this._surname}`
  }

};

class Student extends User {
  constructor(name, surname, yearOfAdmiss) {
    super(name, surname);
    this._yearOfAdmiss = yearOfAdmiss;
  }
  set yearOfAdmiss(v) {
    if (typeof v !== 'number') {
      throw new TypeError('Enter correctly year in digits');
    }
  }
  get yearOfAdmiss() {
    return this._yearOfAdmiss;
  }
  getCourse() {
    const whatAcourse = (new Date().getFullYear() - this._yearOfAdmiss);

    if (typeof this._yearOfAdmiss !== 'number') {
      throw new TypeError('Enter correctly year in digits')
    }
    if (whatAcourse === 0) {
      return console.log(`Student ${this.getFullName()} styduing on the ${whatAcourse + 1} course`)
    }
    if (whatAcourse <= 5) {
      return console.log(`Student ${this.getFullName()} styduing on the ${whatAcourse} course`)
    }
    return console.log(`Student ${this.getFullName()} graduated or you entered the wrong year of admission`);
  }

};

const student1 = new Student('Adam', 'Smith', 2015);
const student2 = new Student('Mary', 'Christmas', 2017);
const student3 = new Student('Dont', 'Doit', 2021);
const student4 = new Student(21, 51, 2018);
const student5 = new Student('Check', 'Year', 'jdkfj');
