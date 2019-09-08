const {Observable, of, Subscription} = require("rxjs")

const exampleFun = () => {
    return 20;
    return 20;
};
console.log('Before exampleFun');
console.log(exampleFun());
console.log('After exampleFun');


const obs = Observable.create(observer => {
    observer.next(20)
    observer.next(66)
    observer.next(99)
});
console.log('Before Observable');
obs.subscribe((data) => {
    console.log(data);
});
console.log('After Observable');

//Schemat wywołania jest taki sam sekwencyjny dla jednej i drugiej (z ta zasadnicza roznica, ze subskrypacja moze wiele danych strumieniowac)
// Before exampleFun
// 20
// After exampleFun
// Before Observable
// 20
// 66
// 99
// After Observable