const data = [2,4,6,8,10];
//Uzycie mapy, powoduje, ze nie mutujemy danych
const multiple = x => x*2;
const result = data.map(multiple);
console.log(result);

