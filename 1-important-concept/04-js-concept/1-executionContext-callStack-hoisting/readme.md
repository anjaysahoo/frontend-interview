## Execution Context & Call Stack
![img_4.png](images/img_4.png)

![img_6.png](images/img_6.png)
![img_7.png](images/img_7.png)

Below is how every code run on javascript engine, we create
`Execution Context` which is maintained by `Call Stack`

First we have **Memory Creation Phase** 👇🏻
<br>
`square` function has exact code stored in `Memory`
![img.png](img.png)

Second we have **Code Execution Phase**
<br>
Here we allocate value to `n` & for `square2` function is invoked
and again we start with `Memory Creation Phase` for `square2`
![img_1.png](img_1.png)

Once `square2` function is done executing, we assign return value to `square2`
and `Execution context` of `square2` is removed from `call stack`
![img_2.png](img_2.png)


Final state when everything is done👇🏻
![img_1.png](images/img_1.png)
![img_2.png](images/img_2.png)
Other names of `call stack`
![img_3.png](images/img_3.png)

Referred Video: https://youtu.be/iLWTnMzWtj4?si=p4HnXVWvBMZVNnf-

## Hoisting

Hoisting can be easily explained once we understand 
`Execution Context` and `Call Stack`

Hoisting is very good example to understand `Execution Context` and `Call Stack`

Referred Video: https://youtu.be/Fnlnw8uY6jo?si=OhllLmcreDPizLTg

## How `function` works & `Variable Environment`

![img_8.png](images/img_8.png)

![img_10.png](images/img_10.png)

![img_9.png](images/img_9.png)

Referred Video: https://youtu.be/gSDncyuGw0s?si=HEtpY-xlWwKfQBgJ

## `window` & `this`
![img_12.png](images/img_12.png)
![img_11.png](images/img_11.png)

Referred Video: https://youtu.be/QCRpVw2KXf8?si=TWgw76S-loHhUkoQ
