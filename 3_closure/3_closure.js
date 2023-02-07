// 1. Create a function counter that returns a function that increments and returns a counter variable. The counter should not be accessible from outside the function.

function counter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

const increment = counter();
console.log(increment()); // 1
console.log(increment()); // 2

// Explanation: The function counter returns another function, which has access to the count variable. This inner function increments count every time it is called and returns its value, thus creating a closure that maintains state across multiple calls.

// Create a function addMaker that takes in a value and returns a function that adds that value to its input.
function addMaker(value) {
  return function (num) {
    return num + value;
  };
}

const add5 = addMaker(5);
console.log(add5(3)); // 8
console.log(add5(10)); // 15

// Explanation: The function addMaker returns another function that takes in a number and adds the value passed to addMaker to it. The inner function has access to the value variable, thus creating a closure.

// Create a function multiplier that takes in an array of numbers and returns an array of functions that, when called, return the product of the original number and the input to the function.
function multiplier(array) {
  return array.map(num => {
    return function (input) {
      return num * input;
    };
  });
}

const result = multiplier([2, 3, 5]);
console.log(result[0](4)); // 8
console.log(result[1](5)); // 15
console.log(result[2](2)); // 10

// Explanation: The function multiplier returns an array of functions, each of which takes in an input and returns the product of the original number from the array and the input. The inner functions have access to the original numbers, creating closures.


// Create a function makePassword that returns a function that takes in a password and returns a message indicating whether the input matches the original password.

function makePassword(password) {
  return function (input) {
    return input === password ? "Access granted." : "Access denied.";
  };
}

const checkPassword = makePassword("secret");
console.log(checkPassword("secret")); // "Access granted."
console.log(checkPassword("notsecret")); // "Access denied."

// Explanation: The function makePassword returns another function that takes in an input and compares it to the original password. The inner function has access to the password variable, creating a closure.

// Create a function adder that takes in a value and returns an object with two methods: add and reset. The add method takes in a number and returns the sum of the original value and the input, and the reset method resets the value back to the original value.

function adder(value) {
  let currentValue = value;

  return {
    add(num) {
      currentValue += num;
      return currentValue;
    },
    reset() {
      currentValue = value;
      return currentValue;
    }
  };
}

const myAdder = adder(10);

console.log(myAdder.add(5)); // 15
console.log(myAdder.reset()); // 10
console.log(myAdder.add(20)); // 30

