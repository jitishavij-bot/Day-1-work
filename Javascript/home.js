// Variable and data types
let name = "John";
const age = 25;
let isStudent = true;

console.log(name, age, isStudent);
//Operators
let a = 10;
let b = 3;

console.log(a + b); 
console.log(a - b); 
console.log(a * b); 
console.log(a / b); 
console.log(a % b); 
// Conditional Statements
let number = 7;

if (number % 2 === 0) {
    console.log("Even number");
  } else {
    console.log("Odd number");
  }
//Loops
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}
// Arrays
let numbers = [1, 2, 3, 4];

numbers.push(5);     // add
numbers.pop();       // remove last

console.log(numbers);
//Objects
let person = {
    name: "Alice",
    age: 30,
    greet: function () {
      return "Hello, " + this.name;
    }
  };
  
  console.log(person.name);
  console.log(person.greet());
//Constructors
class Car {
    constructor(brand) {
      this.brand = brand;
    }
  
    drive() {
      return this.brand + " is driving";
    }
  }
  
  const car1 = new Car("Toyota");
  console.log(car1.drive());
//DOM Manupilation
document.getElementById("btn").addEventListener("click", function () {
    alert("Button clicked!");
  });
//Events
document.getElementById("btn").addEventListener("click", function () {
    alert("Button clicked!");
  
//

