const products = require("./products")

const dataRed = [10, 20, 30, 40, 50];
const reducer = (previousValue, currentValue) => {
    return previousValue + currentValue};
const reduceResult = dataRed.reduce(reducer);
// dla pierwszego obiegu,ze nie mamy zdefiniowanego previousValue,
// to bierze pierwszy element + drugi element. W nastepnym kroku sume wcxzesniejsza plus nastepny.
// previousValue :: 10 currentValue ::20
// previousValue :: 30 currentValue ::30
// previousValue :: 60 currentValue ::40
// previousValue :: 100 currentValue ::50
console.log(reduceResult);

//druga czesc. Zdestrukturolizowalismy obiekt
// dla uzycia
// !!!const categoryStatsReducer = (accumulator, {category}) => { ..
// dostajemy
// { id: 1, name: 'Category3' }
// { id: 3, name: 'Category1' }
// { id: 3, name: 'Category3' }
// { id: 1, name: 'Category1' }
// { id: 1, name: 'Category1' }
// { id: 1, name: 'Category1' }
// { id: 2, name: 'Category2' }
// { id: 4, name: 'Category4' }
//Dlatego dodamy nizej name jeszcze name, aby sie do tego odwolywac za pomoca category.name
const categoryStatsReducer = (accumulator, {category: {name}}) => {
    if (accumulator[name]) accumulator[name] += + 1
    else accumulator[name] = 1;
    return accumulator;
};
const categoryStats = products.reduce(categoryStatsReducer, {});

//Ponizej znajduje sie zapis reduktora funkcyjnie
const categoryStatsReducerFunkcyjny = (accumulator, {category: {name}}) => ({
    ...accumulator,
        [name]: accumulator[name] ? accumulator[name] + 1 : 1
});


//drugi parametr, to stan poczatkowy reducera
const categoryStatsFunkcyjnie = products.reduce(categoryStatsReducerFunkcyjny, {});
console.log(categoryStatsFunkcyjnie);