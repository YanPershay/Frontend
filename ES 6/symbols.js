const symbol = Symbol('demo')
const other = Symbol('demo')

// console.log(symbol);
// console.log(other);

// console.log(symbol === other);

const obj = {
    name: 'Yan',
    demo: 'DEMO',
    [symbol] : 'meta'
}

//console.log(obj);

console.log(obj.demo);
console.log(obj[symbol]);