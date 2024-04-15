## Polyfills

<details >
 <summary style="font-size: large; font-weight: bold">map()</summary>

```js
// arr.map((num, i, arr) => {})
Array.prototype.myMap = function(cb) {
    let temp = [];
    
    for(let i = 0; i < this.length; i++){
        temp.push(cb(this[i], i, this));
    }
    
    return temp;
}
```

Usage
```js
const nums = [1,2,3,4];

const multiplyThree = nums.myMap((num, i, arr) => {
    return num * 3;
})

console.log(multiplyThree);
```
</details>

<details >
 <summary style="font-size: large; font-weight: bold">filter()</summary>

```js
Array.prototype.myFilter = function(cb) {
    let temp = [];
    for(let i = 0; i < this.length; i++){
        if(cb(this[i], i, this)){
            temp.push(this[i]);
        }
    }
    
    return temp;
}
```
</details>

<details >
 <summary style="font-size: large; font-weight: bold">reduce()</summary>

```js
// arr.reduce((accumulator, curr, i, arr) => {}, initialValue)
Array.prototype.myReduce = function(cb, initialValue){
    var accumulator = initialValue;
    
    for(let i = 0; i < this.length; i++){
        accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
    }
    
    return accumulator;
}
```
</details>

<details >
 <summary style="font-size: large; font-weight: bold">call()</summary>

```js
Function.prototype.myCall = function (context = {}, ...args){
    if(typeof this !== 'function'){
        throw new TypeError('Its not callable');
    }
    
    context.fn = this;
    context.fn(...args);
}
```
</details>

<details >
 <summary style="font-size: large; font-weight: bold">apply()</summary>

```js
Function.prototype.myApply = function (context = {}, args=[]){
    if(typeof this !== 'function'){
        throw new TypeError('Its not callable');
    }
    
    if(!Array.isArray(args)){
        throw new TypeError('Its not an array');
    }
    
    context.fn = this;
    context.fn(...args);
}
```
</details>

<details >
 <summary style="font-size: large; font-weight: bold">bind()</summary>

```js
Function.prototype.myBind = function(context = {}, ...args){
    if(typeof this !== 'function'){
        throw new TypeError(this + 'cannot be bound as its not callable');
    }
    
    context.fn = this;
    return function(...newArgs){
        return context.fn(...args, ...newArgs);
    }
}
```
</details>

<details >
 <summary style="font-size: large; font-weight: bold">once()</summary>

```js
function once(func, context){
    let ran;
    
    return function() {
        if(func) {
            ran = func.apply(context || this, arguments);
            func = null;
        }
        
        return ran;
    };
}
```

Usage
```js
const hello = once((a,b) => console.log("hello", a, b));

hello(1,2);
hello(2,3);
```
</details>

<details >
 <summary style="font-size: large; font-weight: bold">memoize()</summary>

```js
function myMemoize(fn, context){
    const res = {};
    
    return function (...args){
       var argsCache = JSON.stringify(args);
       if(!res[argsCache]){
           res[argsCache] = fn.call(context || this, ...args);
       }
       return res[argsCache];
    }
}
```

Usage
```js
const clumsyProduct = (num1, num2) => {
    for(let i = 1; i <= 10000000; i++){}
    
    return num1 * num2;
}

const memoizedClumzyProduct = myMemioze(clumsyProduct);

console.log(memoizedClumzyProduct(2, 3));
console.log(memoizedClumzyProduct(2, 3));
```
</details>

<details >
 <summary style="font-size: large; font-weight: bold">map()</summary>
</details>
