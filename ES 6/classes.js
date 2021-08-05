class Person {
    type = 'NPC'

    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(this.name + ' say Hello');
    }

    get job() {
        return this._job.toUpperCase()
    }

    set job(job) {
        if (job.length < 2) {
            throw new Error('Too short job')
        } else{
            this._job = job
        }
        
    }
}

const max = new Person('Max')

//console.log(max)
//max.greet()
//console.log(max.type);

//console.log(max.__proto__ === Person.prototype);

class Programmer extends Person {
    constructor(name, job) {
        super(name)
        this._job = job
    }

    greet() {
        super.greet()
        console.log('Rewrited greet()')
    }
}

const fullstack = new Programmer('Max', 'Fullstack')
//console.log(fullstack);
//fullstack.greet()
// console.log(fullstack.job)
// fullstack.job = 'Backend'
// console.log(fullstack.job)

//Static
class Util {
    static average(...args) {
        return args.reduce((acc, i) => acc += i, 0) / args.length
    }
}

//if static
console.log(Util.average(1, 1, 2, 3, 5, 8, 13));

//if no static
// const util = new Util()
// console.log(util.average(1, 1, 2, 3, 5, 8, 13))