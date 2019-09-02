const increment = x => x + 1;
const decrement = x => x - 1;
const double = x => x * 2;
const halve = x => x / 2;

const result = halve(increment(double(increment(2))));
console.log(result);

//funckja komponujaca 2 funkcje
const compose2 = (f, g) => x => f(g(x));
const resultCompose2 = compose2(increment, double)(2);
console.log('resultCompose2: ' + resultCompose2);

//Za pomoca operatora reduce

const compose = (...functions) => args => functions.reduceRight((arg, fn) => fn(arg), args);

const reduceCompost = (...fns) => fns.reduce(
    (f,g) => (...args) => f(g(...args))
);

console.log('Cudo na patyku ::' + reduceCompost(increment, decrement, double, double)(2));