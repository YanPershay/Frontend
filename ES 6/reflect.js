class Student {
    constructor(name) {
        this.name = name
    }

    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

class ProtoStudent {
    university = "Oxford"
}

const student = Reflect.construct(Student, ['Yan']) //, ProtoStudent)

//console.log(student.__proto__ === ProtoStudent.prototype);

//Reflect.apply(student.greet, {name: 'Fullstack'}, [])

//console.log(Reflect.ownKeys(student));

Reflect.preventExtensions(student)

student.age = 21

//console.log(Reflect.isExtensible(student));

//console.log(student);