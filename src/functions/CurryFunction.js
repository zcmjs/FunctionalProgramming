const {compose, curry} = require("ramda")

// funkcja przyjmujaca 2 elem
const multiply = curry((x, y) => x * y);
const add = curry((x, y) => x + y);

//wywolanie funkcji curry (2 akceptowalne zapisy)
console.log(multiply(3)(2));
console.log(multiply(3,2));


const result = compose(
    add(3),
    multiply(3)

);
//8

console.log(result(3));