## Functions

<details >
 <summary style="font-size: medium; font-weight: bold">Function Statement vs Function Expression</summary>

`Function Statement` are also called `Function Declaration`

![img.png](img.png)

Understand this by knowing `Execution Context`
</details>

<details >
 <summary style="font-size: medium; font-weight: bold">Anonymous Functions</summary>

A function without any name are called `Anonymous Function`
![img_1.png](img_1.png)

Anonymous function are used as value like above or we get syntax error
</details>

<details >
 <summary style="font-size: medium; font-weight: bold">Named Functions Expression</summary>

![img_2.png](img_2.png)

![img_4.png](img_4.png)

Red : Argument 

Green: parameter
</details>


<details >
 <summary style="font-size: medium; font-weight: bold">First Class Function</summary>

The ability to use function as value and return it as a value is called `First Class Function`
![img_5.png](img_5.png)
</details>

Referred Video: https://youtu.be/SHINoHxvTso?si=T8jxyj-IHrnRx2tx

<details >
 <summary style="font-size: medium; font-weight: bold">Factory Functions</summary>

It is very similar to actual factory where we raw material and get finished
product.

Factory function just create `Object`'s and return them

```js
function factory() {
    return {...}
}
```

### Problems

Why we can't just create `Object` itself directly instead of using `factory` function?
1. There are lot of thing in common but few slight differences in all objects
   ![img_10.png](img_10.png)
   Because of this there is lot of code duplicaton
2. ![img_11.png](img_11.png)
   Object value can be updated like above which can again create problem


### Solution
![img_12.png](img_12.png)

![img_13.png](img_13.png)
1. Not very complex like `Class`
2. No code duplication
3. Can't inject any bug through updating any value directly

Example
![img_14.png](img_14.png)

Referred Video: https://youtu.be/lE_79wkP-1U?si=Yskr4mqmfg8Nd51r

</details>


<details >
 <summary style="font-size: medium; font-weight: bold">Pure / Impure Function</summary>

![img_6.png](img_6.png)
</details>


<details >
 <summary style="font-size: medium; font-weight: bold">Closure Questions</summary>
</details>


<details >
 <summary style="font-size: medium; font-weight: bold">Closure Questions</summary>
</details>
