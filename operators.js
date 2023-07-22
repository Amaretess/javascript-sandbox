// ------> arithmetic operators

let x = 15;
let y = 6;

// console.log(x + y)
// console.log(y - x)
// console.log(y * x)
// console.log(x / y)
// console.log(x % y) //remainder (modulus %)
// console.log(x ** y) // (exponetial)


// increment

console.log(++x) //increment immediately after log (16)
console.log(y++) //logs y and then increments (7)
console.log(y) // (6 => 7)

// decrement

console.log(x--) // will decrement what was currently incremented, not the original num
console.log(y--) // logs current num first
console.log(y) // will decrement if logged because of the previous decrement
console.log(x)

console.log("x is currently:", x) 
console.log("x received decrement", x--)
console.log(x)
console.log("x received decrement", x--)
console.log(x)


// -----> assignment operator

console.log("<------ ASSIGNMENT OPERATORS ------->")

// addition

// x = x + 5
x += 5 // same thing as coding (x = x + 5)
console.log("(x = x + 5) === (x += 5):", x)

// multiplication

// x = x * 5
console.log("x is currently:", x)
x *= 5
console.log("(x = x * 5) === (x *= 5): ", x)

// even modulus
console.log("y is currently:", y)
// y = y % 6

console.log("(y %= 6):", y)

// -----> comparison operators
console.log("<--------- COMPARISON OPERATORS --------->")

let num = 1;

// Relational
console.log(num > 0); // true
console.log(num >= 1); // true
console.log(num < 1); // false
console.log(num <= 1); // true

// Equality
console.log(num === 1) // true
console.log(num !== 1) // false

// ----> Equality operators
console.log("<--------- EQUALITY OPERATORS --------->")

// Strict equality ~ both data types need to be the same. Use this over loose equality
console.log(1 === 1); // true
console.log("1" === 1) // false

// Loose equality ~ type coercion

console.log(1 == 1)
console.log("1" == 1)
console.log(2 == 1)
console.log(true == 1) // true for 1, false for 2

// ------> TERNERARY OPERATOR
console.log("<--------- TERNERARY OPERATORS --------->")

// ? === true, : === otherwise
let points = 110
let type = points > 100 ? "gold" : "silver"; // "gold"

console.log(type)

// ------> LOGICAL OPERATOR
console.log("<--------- LOGICAL OPERATORS --------->")

// Logial AND && (both must be true
// Logical OR || (either can be true)
// logical NOT ! (not true)

let highIncome = true;
let goodCreditScore = false;

let eligibleForLoan = highIncome || goodCreditScore;
let applicationRefused = !eligibleForLoan;

console.log("eligible for loan?", eligibleForLoan)
console.log("application denied", applicationRefused)

// Falsy values
// undefined
// null
// 0
// false
// NaN
// ""

// this example is SHORT CIRCUITING will stop until one of the values is not falsy
let userColor = undefined;
let defaultColor = "blue";
let currentColor = userColor || defaultColor || true;
console.log("users color is:", currentColor)

// ------> OPERATOR PRECEDENCE
console.log("<--------- OPERATORS PRECEDENCE --------->")

num = 2 + 3 * 4;
console.log(num)

// exercise 1
let r = "red"
let b = "blue"

let c = r;
b = r;
c = b




console.log(r)
console.log(b)

console.log()