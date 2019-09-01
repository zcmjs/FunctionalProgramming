const beforeUpdate = 5;

//Nie mutowalne np typy proste
const increment = state => {
    state = state + 1;
    return state;
};

const afterUpdate = increment(beforeUpdate);
console.log(beforeUpdate, afterUpdate); //5 6

//typy złozone obiekty, tablice
const beforeUpdate2 = {x: 5};

const increment2 = state => {
    state.x = state.x + 1;
    return state;
};

const afterUpdate2 = increment2(beforeUpdate2);
console.log(beforeUpdate2, afterUpdate2); //{ x: 6 } { x: 6 }


//Przyklad ominiecie mutowalnosci obiketu + wykorzystanie rest
const beforeUpdate3 = {x: 3, y: 6, z: 9};

const increment3 = state => {
    return {
        ...state, //rest z ecma 6
        x: state.x + 1
    };
};

const afterUpdate3 = increment3(beforeUpdate3);
console.log(beforeUpdate3, afterUpdate3); //{ x: 6 } { x: 6 }

//Pure functions -> zmienne nie powinny wykonywac operacji na obiektach po za zasięgiem swojej funkcji