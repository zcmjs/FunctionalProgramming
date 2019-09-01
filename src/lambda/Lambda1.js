const product = {
    id: 1,
    name: 'Product #1',
    price: 100,
    category: "Category #1"
};

//Funckja anonimowa z przypisaniem do zmiennej
//Stara wersja
// const getName = function (product) {
//     return product.name;
// };

//Funckja anonimowa z przypisaniem do zmiennej
const getName = product => product.name;
console.log(getName(product));

const getSmallObjectCopy = function (product) {
    return {id: product.id, name: product.name}
};

//musielismy opakowac w nawiasy (), bo interpreter zaczął te {} nawiazy, interpretowac jako klamry funkcji
const getSmallObjectCopy2 = (product) => ({id: product.id, name: product.name});

console.log(getSmallObjectCopy2(product));


//inny sposob przekazywania danych do funkcji
const addition = (x, y) => x + y;
const addition2 = x => y => x + y;

console.log(addition(6,8));
console.log(addition2(12)( 11));