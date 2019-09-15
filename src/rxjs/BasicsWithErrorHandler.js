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
obs.subscribe(data => {
        console.log(data)
    },
    error => {
        console.log(error)
    });

//ostatnie rozszerzenie observable o funkcje complete. JEli w trakcie wykonywania wystapi blad to saie nie wywola funkcja complete
const obs3 = Observable.create(observer => {
    observer.next(2137)
    observer.next(111)
    observer.complete()
});
console.log('Before Observable');
obs3.subscribe(
    data => {
        console.log(data)
    },
    error => {
        console.log(error)
    },
    () => console.log('Wykonanie funkcji complete')
);