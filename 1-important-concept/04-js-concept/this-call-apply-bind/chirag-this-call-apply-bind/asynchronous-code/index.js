// "use strict";

console.log('Direct Strict mode log:', typeof this === 'undefined')

function myFunction() {
    console.log('Strict mode:', typeof this === 'undefined'); // Logs true
}

myFunction();

let bfSyncObject = {
    name: "Ranbir Kapoor",
    age: 41,
    gfFnInnerFn: function() {
        function inner() {
            console.log("Normal Function with Normal Inner Function : ", this)
        }
        inner();
    },
    gfFnArrowInnerFn: function() {
        const inner = () => {
            console.log("Normal Function with Arrow Inner Function : ", this)
        }
        inner();
    },
    gfArrowFnInnerFn: () => {
        function inner() {
            console.log("Arrow Function with Normal Inner Function : ", this)
        }
        inner();
    },
    gfArrowFnArrowInnerFn: () => {
        const inner = () => {
            console.log("Arrow Function with Arrow Inner Function : ", this)
        }
        inner();
    }
}

let bfAsynObject = {
    name: "Ranbir Kapoor",
    age: 41,
    gfFnAsyncInnerFn: function() {
        setTimeout(function() {
            console.log("Normal Function with Async Normal Inner Function : ", this)
        }, 1000)
    },
    gfFnAsyncArrowInnerFn: function() {
        setTimeout(() => {
            console.log("Normal Function with Async Arrow Inner Function : ", this)
        }, 1000)
    },
    gfArrowFnAsyncInnerFn: () => {
        setTimeout(function() {
            console.log("Arrow Function with Async Normal Inner Function : ", this)
        }, 1000)
    },
    gfArrowFnAsyncArrowInnerFn: () => {
        setTimeout(() => {
            console.log("Arrow Function with Async Arrow Inner Function : ", this)
        }, 1000)
    }
}

//With BF Synchronous Calls

console.log("With BF Synchronous Calls :-");

//Case-1

bfSyncObject.gfFnInnerFn();

//Case-2
bfSyncObject.gfFnArrowInnerFn();

//Case-3
bfSyncObject.gfArrowFnInnerFn();

//Case-4
bfSyncObject.gfArrowFnArrowInnerFn();



//With BF Asynchronous Calls

console.log("With BF Asynchronous Calls :-");

//Case-1
bfAsynObject.gfFnAsyncInnerFn();

//Case-2
bfAsynObject.gfFnAsyncArrowInnerFn();

//Case-3
bfAsynObject.gfArrowFnAsyncInnerFn();

//Case-4
bfAsynObject.gfArrowFnAsyncArrowInnerFn();


// //Without BF Synchronous Calls
//
// console.log("Without BF Synchronous Calls :-");
//
// //Case-1
//
// const withoutBfGfFnInnerFn = bfSyncObject.gfFnInnerFn;
// withoutBfGfFnInnerFn();
//
// //Case-2
// const withoutBfGfFnArrowInnerFn = bfSyncObject.gfFnArrowInnerFn;
// withoutBfGfFnArrowInnerFn();
//
// //Case-3
// const withoutBfGfArrowFnInnerFn = bfSyncObject.gfArrowFnInnerFn;
// withoutBfGfArrowFnInnerFn();
//
// //Case-4
// const withoutBfGfArrowFnArrowInnerFn = bfSyncObject.gfArrowFnArrowInnerFn;
// withoutBfGfArrowFnArrowInnerFn();
//
//
//
// //Without BF Asynchronous Calls
//
// console.log("Without BF Asynchronous Calls :-");
//
// //Case-1
// const withoutBfGfFnAsyncInnerFn = bfAsynObject.gfFnAsyncInnerFn;
// withoutBfGfFnAsyncInnerFn();
//
// //Case-2
// const withoutBfGfFnAsyncArrowInnerFn = bfAsynObject.gfFnAsyncArrowInnerFn;
// withoutBfGfFnAsyncArrowInnerFn();
//
// //Case-3
// const withoutBfGfArrowFnAsyncInnerFn = bfAsynObject.gfArrowFnAsyncInnerFn;
// withoutBfGfArrowFnAsyncInnerFn();
//
// //Case-4
// const withoutBfGfArrowFnAsyncArrowInnerFn = bfAsynObject.gfArrowFnAsyncArrowInnerFn;
// withoutBfGfArrowFnAsyncArrowInnerFn();
