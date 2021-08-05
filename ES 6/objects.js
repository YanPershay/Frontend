const cityKey = 'Minsk'

const job = 'Fullstack developer'

const person = {
    age: 21,
    [cityKey + Date.now()]: 'Monterey',
    name: "Yan",
    job,
    'someKeyStr': "someValue",
    print: () => 'Person',
    toString: function() {
        return Object
          .keys(this)
          .filter(key => key !== 'toString')
          .map(key => this[key])
          .join(' ')
    }
}

//console.log(person.toString())
//console.log(person.print())
//console.log(person)

//Methods
const first = {a: 1}
const second = {b: 2}

//console.log(Object.is(20, 20))

//console.log(Object.assign(first, second))
//console.log(first)
//console.log(Object.assign({}, first, second))
//console.log(first)

//console.log(Object.assign({}, first, {c: 10, d: 20}))

const obj = Object.assign({}, first, {c: 10, d: 20})
//console.log(obj)

// console.log(Object.entries(obj));
// console.log(Object.keys(obj));
// console.log(Object.values(obj));

