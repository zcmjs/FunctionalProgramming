const F = x => ({
    map: fn => F(fn(x)),
    flatMap: fn => fn(x)
});

const I = x => x;

const half = val => F(val)
                    .map(x => x / 2)
                    .flatMap(I); //kombinator słuzy do sterowania przepływem
console.log(half(1332));

//Przyklad uzycia monady
const product = {
    id: 12,
    name: 'Product #1'
};

const Sticker = prop => ({
    map: fn => Sticker(fn(prop)),
    flatMap: fn => fn(prop)
});

const getValueByProp = prop => product[prop] ? Sticker(product[prop]): Sticker('No Found');

console.log(getValueByProp('name')
                           .flatMap(I)
                           .toUpperCase());
