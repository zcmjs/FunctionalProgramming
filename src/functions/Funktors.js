//Dla pojedynczej wartosci
const data = 50;

const multiple = x => x * 2;
const add = x => x + 1;

const result = [50]
    .map(multiple)
    .map(add);

console.log('result : ' + result);
console.log(result.length); //1


//funktor to kontener, który jest mapowalny do
//1 zadasa zasada kompozycji. (aby mapowanie było rozbijalne w 2 strony) F(multiple(add(data)) <> F(data).map(add).map(multiple)
//2
const F = x => ({
    map: fn => F(fn(x)),
    inspect: () => `F(${x})`
});

console.log(F(add(multiple(data))));
console.log(F(data).map(multiple).map(add));


class Funktor {
    constructor(x) {
        this.x = x
    }

    map(fn) {
        return new Funktor(fn(this.x));
    }
}

//wywołanie dla tego
console.log("Dla klasy");
// console.log(new F(add(multiple(data))));
console.log(new Funktor(data).map(multiple));