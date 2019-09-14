const {Observable} = require("rxjs")

const exampleFun = () => {
    throw new Error("Function Error !!!");
    return 20;
};

try {
    exampleFun();
} catch (err) {
    console.log(err.message);
}

const obs = Observable.create(observer => {
    observer.error('ObservableX Error!')
    observer.next(66)
    observer.next(99)
});
console.log('Before Observable');
obs.subscribe(data => {console.log(data)},
              error => {console.log(error)} );