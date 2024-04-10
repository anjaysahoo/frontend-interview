## Factory Function

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
![img.png](img.png)
Because of this there is lot of code duplicaton
2. ![img_1.png](img_1.png)
Object value can be updated like above which can again create problem


### Solution
![img_2.png](img_2.png)

![img_3.png](img_3.png)
1. Not very complex like `Class`
2. No code duplication
3. Can't inject any bug through updating any value directly

Example
![img_4.png](img_4.png)

Referred Video: https://youtu.be/lE_79wkP-1U?si=Yskr4mqmfg8Nd51r
