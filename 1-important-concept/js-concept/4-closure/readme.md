## Closure

![img_18.png](img_18.png)
![img_17.png](img_17.png)

Here even though `x()` execution context is removed from
`call stack` after line _8_, but when `z()` execute it remembers the value of 
`a` because of `closure` hence print `7`

### Function with its `lexical` scope bundle together is called closure

How to create closure?

Whenever we want to create Closure then just create a function wraping
variables & functions in them


**Few more examples**
![img_19.png](img_19.png)
Here we have closure of both `x()` and `z()`

![img_36.png](img_36.png)

Using Closure to know the button clicked count without any global variable

### Closure Usecase
![img_20.png](img_20.png)

Data Privacy & Security(Encapsulation)
![img_30.png](img_30.png)
Here count can only be increased through `counter()` function
![img_31.png](img_31.png)
Here both `counter1` & `counter2` has access to its own copy of `count`

### Disadvantage of closure

1. Since it uses `Heap` memory so over use of closure can led to memory leak

Referred Video: https://youtu.be/qikxEIxsXco?si=DNd_PMIGTem9dGZM


<details >
 <summary style="font-size: x-large; font-weight: bold">`setTimeout` Closure</summary>
## 

![img_21.png](img_21.png)
Here 5 copy of `setTimeout` are referring to same copy of `i` hence will print 6
all the time
![img_22.png](img_22.png)
Here since `let` is block scoped so every copy of `setTimeout` closure will have its own 
value of `i`

How to solve this with `var` only?
![img_23.png](img_23.png)
Here using `Closure` we can solve this

Referred Video:https://youtu.be/eBTBG4nda2A?si=d1TUmSR3h1IO4CFM
</details>

<details >
 <summary style="font-size: x-large; font-weight: bold">Closure Questions</summary>

1. ![img_28.png](img_28.png)
![img_27.png](img_27.png)
Here since `a` was not there in local scope so we scope chain towards global scope
and if it is not there then we get `Reference error` of `a` not defined.
![img_29.png](img_29.png)

2. **Garbage Collector**
![img_32.png](img_32.png)
Here `x` value is garbage collected once `a()` execution is done
![img_33.png](img_33.png)
Here `x` is not garbage collected because of closure

3. **Smart Garbage Collection**
![img_35.png](img_35.png)
![img_34.png](img_34.png)
Here `z` is garbage collected once we reach line _4_, hence we get `Reference error`
</details>

<details >
 <summary style="font-size: x-large; font-weight: bold">From Fireship.io</summary>
### When ever, a function tries to access a variable which is not created in that function; then it is called as closure.

1. ![img.png](img.png)
2. ![img_1.png](img_1.png)
3. ![img_2.png](img_2.png)
4. ![img_3.png](img_3.png)
5. In closure values are stored inside heap. Stacks are shortly lived while heaps are long-lived.
![img_4.png](img_4.png)
6. It requires 
![img_5.png](img_5.png)
7. **Usecase**

a. To prevent data leakage
![img_6.png](img_6.png)
![img_7.png](img_7.png)

b. Many javascript functions are callback-based functions
![img_8.png](img_8.png)
![img_9.png](img_9.png)


### Famous Tricky Questions
1. ![img_10.png](img_10.png)
Ans. ![img_11.png](img_11.png)
![img_12.png](img_12.png)
In `let` i is not hoisted
![img_14.png](img_14.png)
![img_13.png](img_13.png)

In case `var` `i` lived in Heap while in `let` it was in Stack
![img_15.png](img_15.png)

2. ![img_16.png](img_16.png)
Referred Video: https://www.youtube.com/watch?v=3a0I8ICR1Vg


### Referred Video: https://www.youtube.com/watch?v=vKJpN5FAeF4
</details>
