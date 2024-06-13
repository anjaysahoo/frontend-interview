
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


Function.prototype.myBind = function(context = {}, ...args){
    if(typeof this !== 'function'){
        throw new TypeError(this + 'cannot be bound as its not callable');
    }

    context.fn = this;
    return function(...newArgs){
        return context.fn(...args, ...newArgs);
    }
}

const obj = {"name": "hello"};

function test(){console.log("THIS : ", this)};

const temp = test.myBind(obj);

temp();
