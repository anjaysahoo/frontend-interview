
// function once(func, context){
//     let ran;
//
//     return function() {
//         if(func) {
//             ran = func.apply(context || this, arguments);
//             func = null;
//         }
//
//         return ran;
//     };
// }
//
// const hello = once((a,b) => console.log("hello", a, b));
//
// hello(1,2);
// hello(2,3);


// Function.prototype.myBind = function(context = {}, ...args){
//     if(typeof this !== 'function'){
//         throw new TypeError(this + 'cannot be bound as its not callable');
//     }
//
//     context.fn = this;
//     return function(...newArgs){
//         return context.fn(...args, ...newArgs);
//     }
// }
//
// const obj = {"name": "hello"};
//
// function test(){console.log("THIS : ", this)};
//
// const temp = test.myBind(obj);
//
// temp();


function myMemoize(func, context){
    const res = {};

    return function(...args){
        console.log("args : ", ...args);
        const key = JSON.stringify(args);
        console.log("key : ", key);
        if(!res[key]){
            res[key] = func(...args);
        }

        return res[key]
    }
}


const clumsyProduct = (num1, num2) => {
    console.log("clumsy called")
    for(let i = 1; i <= 10000000; i++){}

    return num1 * num2;
}

const memoizedClumzyProduct = myMemoize(clumsyProduct);

console.log(memoizedClumzyProduct(2, 3));
console.log(memoizedClumzyProduct(2, 3));
console.log(memoizedClumzyProduct(2, 4));
