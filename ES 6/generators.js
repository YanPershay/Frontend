const array = [1,2,3,4]
const str = 'Hello'

//console.log(array[Symbol.iterator]);
//console.log(str[Symbol.iterator]);

// const iter = array[Symbol.iterator]()

// console.log(iter.next());

// for (let item of array) {
//     console.log(item);
// }

// const countries = {
//     values: ['Bel', 'Kz', 'Rus'],
//     [Symbol.iterator]() {
//         let i = 0;
//         return {
//             next: () => {
//                 const value = this.values[i]
//                 i++
//                 return {
//                     done: i > this.values.length,
//                     value
//                 }
//             }
//         }
//     }
// }

// for (let item of countries) {
//     console.log(item);
// }

//Generator
function *gen(num = 4) {
    for (let i=0; i < num; i++) {
        yield i
    }
}

const iterator = gen(3)
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

for (let i of gen(4)) {
    console.log(i);
}
