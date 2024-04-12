![img_2.png](img_2.png)
![img_1.png](img_1.png)

![img_4.png](img_4.png)

All `Async Callback` is executed wrt global scope therefore
it give **crush in non-strict** mode and **`undefined` in strict mode**

![img_3.png](img_3.png)

Here `setTimeOut()` is async callback, hence `Arrow Function`
behave differently in regular and async callabck.
In async callback child marriage is done by arrow function

Referred Video: https://www.youtube.com/watch?v=hwoU8NCICSE
