const Person = function (name) {
    this.name = name;
    this.sayName1 = function () {
        console.log(this.name);
    };
    this.sayName2 = () => {
        console.log(this.name);
    };
};

// const Person = function (name) {
//     this.name = name;
//     return {
//         sayName1() {
//             console.log(this.name);
//         },
//         sayName2: () => {
//             console.log(this.name);
//         }
//     }
// };


const john = new Person('John');
const dave = new Person('Dave');

console.log("John : ", john);
console.log("Dave : ", dave);

john.sayName1(); // John
john.sayName2(); // John

// The regular function can have its `this` value changed, but the arrow function cannot
john.sayName1.call(dave); // Dave (because `this` is now the dave object)
john.sayName2.call(dave); // John

john.sayName1.apply(dave); // Dave (because `this` is now the dave object)
john.sayName2.apply(dave); // John

john.sayName1.bind(dave)(); // Dave (because `this` is now the dave object)
john.sayName2.bind(dave)(); // John

const sayNameFromWindow1 = john.sayName1;
sayNameFromWindow1(); // undefined (because `this` is now the window object)

const sayNameFromWindow2 = john.sayName2;
sayNameFromWindow2(); // John
