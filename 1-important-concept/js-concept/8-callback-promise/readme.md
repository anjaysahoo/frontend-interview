<details >
 <summary style="font-size: x-large; font-weight: bold">Callback</summary>

Callback are used to handle asynchronous code. 
It is a function that is passed as an argument to another function. 


### Callback Hell
![img_2.png](img_2.png)

![img_3.png](img_3.png)

One function called inside another because each one need to happen
after the other. 

Like in first create order -> Proceed To payment -> show order summary

### Inversion of Control

![img_4.png](img_4.png)

Here execution of `proceedToPayment` is dependent on `createOrder` function,
hence we have lost the control over it. There code multiple issues
with `createOrder` function which will affect `proceedToPayment` function.
</details>

<details >
 <summary style="font-size: x-large; font-weight: bold">Promise</summary>

### A `Promise` is an object representing the eventual completion or failure of an asynchronous operation.

<details >
 <summary style="font-size: medium; font-weight: bold">Namaste JS</summary>

![img_5.png](img_5.png)


Alike in callback we where passing function we are attaching `proceedToPayment` function to it.
This gives more control over it.

![img_6.png](img_6.png)
![img_7.png](img_7.png)

Initially `user` will be undefined but after line 15 `user` will have `promise` object.
It has two value
1. PromiseState (pending, fulfilled, rejected)
2. PromiseResult

Solving Callback Hell
![img_8.png](img_8.png)
![img_9.png](img_9.png)

Referred Video: https://youtu.be/ap-6PPAuK1Y?si=XgXdtziWUV-JRDId

**Creating a Promise**
![img_11.png](img_11.png)

![img_12.png](img_12.png)

</details>

<details >
 <summary style="font-size: medium; font-weight: bold">Maximilian Schwarzmüller</summary>

![img.png](img.png)
![img_1.png](img_1.png)

Go through these below video for more details:
https://www.udemy.com/course/javascript-the-complete-guide-2020-beginner-advanced/learn/lecture/16329906#overview

</details>

Great follow-up question:
https://www.greatfrontend.com/questions/javascript/promise-all

Nice article by Builder.io:
https://www.builder.io/blog/promises

<details >
 <summary style="font-size: medium; font-weight: bold">Promise API's</summary>

<details >
 <summary style="font-size: small; font-weight: bold">Promise.all()</summary>

1. All success cases
![img_13.png](img_13.png)

2. Some failure cases
![img_14.png](img_14.png)

As soon we get error from any one promise error is thrown and no other 
promise will be executed.

![img_20.png](img_20.png)

</details>

<details >
 <summary style="font-size: small; font-weight: bold">Promise.allSettled()</summary>

![img_15.png](img_15.png)

![img_21.png](img_21.png)
</details>

<details >
 <summary style="font-size: small; font-weight: bold">Promise.race()</summary>

![img_16.png](img_16.png)

Value of **first settled promise** will be returned irresptive of error or failure

![img_17.png](img_17.png)

![img_22.png](img_22.png)

</details>

<details >
 <summary style="font-size: small; font-weight: bold">Promise.any()</summary>

Value of **first success settled promise** will be returned

![img_18.png](img_18.png)

![img_19.png](img_19.png)
If all error case then **aggregateError** is thrown

![img_23.png](img_23.png)
</details>

Referred Video: https://youtu.be/DlTVt1rZjIo?si=UlMdAtzKcaydIACp
</details>

</details>


<details >
 <summary style="font-size: x-large; font-weight: bold">Async / Await</summary>

![img_24.png](img_24.png)

### Async functions Always return a promise

![img_25.png](img_25.png)

If we returning Promise in async function then it will same like above and it 
return Promise of promise

**For async/await go through the Maximilian Schwarzmüller video**
</details>
