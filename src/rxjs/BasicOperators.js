const {products} = require("./products");
const {Rx, Observable, Subscription, of, from} = require("rxjs");

//Cos nie lapie Observavle.of, tylko samo off
const obs = of(12, 31, 'LL');
obs.subscribe(
    data => console.log(data),
    error => console.log(error),
    () => console.log('Complete #1')
);

console.log('Roznica pomiedzy of a from jest taka, ze from przyjmuje tablice elementow i przeksztalca na stram');
const obs2 = from([12, 31, 'LL']);
obs.subscribe(
    data => console.log(data),
    error => console.log(error),
    () => console.log('Complete #2')
);

console.log(products);
//PRzyklad przetwarzania products
// console.log('DAXtilo ::: ');
const processing1 = from(products)
    .filter(product => product.active)
    .map(product => product.name)
    .subscribe(product => console.log(product));