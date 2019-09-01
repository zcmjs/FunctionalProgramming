const product = {
    id: 1,
    name: 'Product #1',
    price: 100,
    category: "Category #1"
};

// const name = product.name;
// const price = product.price;
// const category= product.category;
// console.log(name, price, category);

// !!! PONIZSZY ZAPIS JEST ROWNY POWYZSZEMU ZAPISOWI
const {name, price, category} = product;
console.log(name);

// jesli pola i wartosci obiektu maja taka sama nazwe, to mozna uzyc sktroconego zapisu
const short = {name, price};
console.log(short);

