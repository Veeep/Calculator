function add(number1, number2) {
  return number1 + number2;
}
function subtract(number1, number2) {
  return number1 - number2;
}
function multiply(number1, number2) {
  return number1 * number2;
}
function divide(number1, number2) {
  return number1 / number2;
}

const number1 = parseInt(prompt("Enter a number:"));
const number2 = parseInt(prompt("Enter another number:"));
const result = multiply(number1, number2);
alert(result);

function temp(farenh) {
  return ((farenh - 32)*5)/9;
}

const farenh = parseInt(prompt("Enter a temperature in Farenheit"));
const celsius = temp(farenh).toFixed(2);
alert("That temperature in Celsius is " + celsius +" degrees"); 

function tbsToMl(tablespoon) {
  return (tablespoon * 14.7868)
} 

const tablespoon = parseInt(prompt("Enter tablespoon amount"));
const ml = tbsToMl(tablespoon);
alert("tablespoon in ml is " + ml + "ml");

function answer(age, name, faveFood) {
  alert("Hello " + name + ", I hope you got to eat " + faveFood + " when you turned " + age + "!")
}

const age = prompt("What is your age?");
const name = prompt("And What is your name, stranger?");
const faveFood = prompt("Oh, and by chance, what is your favorite food?");

answer(age, name, faveFood);