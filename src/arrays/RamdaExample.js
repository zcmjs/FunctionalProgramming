const {pipe, compose} = require("ramda");

const increment = x => x + 1;
const double = x => x * 2;

console.log(pipe(increment, double) (2) ); //6
console.log(compose(increment, double) (2) ); //5