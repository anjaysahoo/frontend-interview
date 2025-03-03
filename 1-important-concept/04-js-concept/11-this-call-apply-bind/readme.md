1. If we want to know the `context` of any given function then we use `this` to know.

2. What is context?
   - It is simply an `object` that can be accessed by a function using `this` keyword.
   Content changes based on different scenarios. Like we have `Window` object
   holding all browser API's and other globally defined variables.

   - It also can be `Function` which is actually a `object` only. Like in case if we write pollyfill of `call` where `this` point to function on its called etc

3. 
   1. For `Arrow Function`, it is simply context of the nearest parent function, and **we cannot
      change or add context to it by any means** 
   2. For a `Normal Function`, we have different way to `change` and `add` context to a given function. If we don't give any context, then it is `undefined` by default
      1. **Directly**: `bfObj.gfFn()`(`bfObj` is context of `gfFn`)  or `gfFn.call(bfObj)` (`gfFn` is context of `call` method)
      2. Use `call`/`apply` method with it to change its context `bfObj1.gfFn.call(bfObj2)`
      3. Use `bind` method with it to make its context permanent `bfObj1.gfFn.bind(bfObj2)`


<details >
 <summary style="font-size: large; font-weight: bold">Fireship `this`</summary>

![img_00.png](images/img_92.png)

Depends on where it is used

1. If it is used in browser, it will return a window object & if it is used in node, it will return a global object
   ![img_11.png](images/img_100.png)
   ![img_31.png](images/img_101.png)
   In `use strict` mode `this` will be undefined in browser, so always tend to use `Window` or
   `Global` directly
   ![img_9.png](images/img_99.png)
   ![img_41.png](images/img_102.png)

Referred Video: https://www.youtube.com/watch?v=YOlr79NaAtQ

</details>



<details >
 <summary style="font-size: large; font-weight: bold">.call(), .apply() & .bind() Examples</summary>

## `call()`

![img.png](images/img_91.png)
![img_1.png](images/img_93.png)
![img_2.png](images/img_94.png)


## `apply()`

![img_3.png](images/img_95.png)

#### Usecase
![img_4.png](images/img_96.png)
Keep `this` as null since it is not required and we are able to pass array for getting max value
which won't be possible without `apply()`
![img_5.png](images/img_97.png)


Useful mnemonic is "**A** for array and **C** for comma" to remember `apply()` and `call()`
## `bind()`
![img_6.png](images/img_98.png)

Referred Video: https://www.youtube.com/watch?v=rZc7_2YXbP8

</details>

Why there is sometime `undefined` and sometime `window`?

Whats the difference in output for objects created using `constructor` v/s `factor` v/s `class` function


For any object created using `new` keyword in case of `constructor Function` & `class`, 

If we have`Arrow Function` inside then execution context is set for that `Arrow Function` during the creation time only and
since we cannot change context of `Arrow Function`[through `call`, `apply`, `bind`], so `this` inside the
`Arrow Function` is always point to the `object` which is created using `new` keyword.

Whereas in case of `Normal Function` it always needs context to make `this` defined. And if we don't 
give context using any of the methods like `call`, `apply`, `bind` or executing it with given object
then it will always be `undefined`.


For normal function it really does not matter how it was created, the only thing important 
for normal function is that while we execute are we able to give context to it

For Arrow function only thing matter is how it was created. While executing it does not
matter how you want to execute it. Nothing can change context. Only way to provide context
to arrow function is through wrapping it into a normal function or or using `constructor` or `class` while creating object.



While executing `setTimeout` execution context is `Windows` for it
