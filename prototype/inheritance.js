function Person(name) {
  this.name = name;
  this.type = 'person';
}

Person.prototype.greet = function () {
  console.log(`[${this.type}]: Greeting from ${this.name}`);
};

function Student(name, grade) {
  Person.call(this, name);
  this.type = 'student';
  this.grade = grade;
}

Student.prototype = Object.create(Person.prototype); // use Object.create to separate concern to Person's prototype
Student.prototype.study = function (subject) {
  console.log(`[${this.type}]: ${this.name} is studying ${subject}...`);
};

const p = new Person('John');
p.greet(); // [person]: Greeting from John

const s = new Student('Phat', 12);
s.greet(); // [student]: Greeting from Phat
s.study('Math'); // [student]: Phat is studying Math...
