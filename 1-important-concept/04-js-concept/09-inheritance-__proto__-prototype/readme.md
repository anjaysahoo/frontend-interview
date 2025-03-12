
<details >
 <summary style="font-size: x-large; font-weight: bold">Inheritance</summary>


1. #### Inheritance using `Classes`

```javascript
class Person {
  talk() {
    return 'Talking';
  }
}

const me = new Person();
const you = new Person();
me.talk(); // Talking
you.talk(); // Talking

// To update the function for both instances you only have to do it once:
Person.prototype.talk = function () {
  return 'New and improved Talking';
}; 
```

2. Inheritance using a `Constructor Function`

```javascript
function Person() {};
Person.prototype.talk = function () {
  return 'Talking';
}

const me = new Person();
const you = new Person();
me.talk(); // Talking
you.talk(); // Talking
```

3. **Prototypal Inheritance:** Inheritance using `pure objects with Object.create`

```javascript
const person = {
  talk() {
    return 'Talking';
  }
}
const me = Object.create(person);
me.talk(); // Talking
```
Note: Using Object.create to build the inheritance chain is no longer recommended. Use Object.setPrototypeOf instead.

4. Inheritance using `pure objects with Object.setPrototypeOf`

```javascript
const person = {}
person.__proto__.talk = function (){
  return 'Talking';
}
const me = {};
Object.setPrototypeOf(me, person);
me.talk(); // Talking
```

5. Extending a Class using `extends`
```javascript
class Person {
  talk() {
    return 'talking';
  }
}

class SuperHuman extends Person {
  fly() {
    return 'flying';
  }
}
const me = new Person();
console.log(me.talk); // talk exists
console.log(me.fly); // fly does NOT exists

const you = new SuperHuman();
console.log(you.fly); // fly exists
console.log(you.talk); // talk also exists!
```

Important caveat

1. `Properties vs. Methods`

![img.png](images/img.png)

Anything that is not defined as `method` will not change for child instances
even if we change it in the parent. Like in above example property `age` is not changed even
after changing `age` of parent `person`

![img_1.png](images/img_1.png)

_**`Property` is what a parent have and `Method` are what they do**_

Referred Video: https://youtu.be/1UTqFAjYx1k?si=FHSI15TwIILvqMIs


---
</details>



<details >
 <summary style="font-size: x-large; font-weight: bold">`prototype` Vs `__proto__`</summary>

### `__proto__`

Creating an Object

```javascript
//1.
const me = {};

//2.
const me = new Object();

//3. 
const me = Object.create({});
```

![img_3.png](images/img_3.png)

Every `Object` has an `__proto__` property.
![img_4.png](images/img_4.png)

1. `__proto__` in `Array`
   ![img_6.png](images/img_6.png)

2. `__proto__` in `String`
   ![img_7.png](images/img_7.png)

3. `__proto__` in `Chain of Object`
   ![img_8.png](images/img_8.png)

Creating instance of `ben` from `sina` object
![img_9.png](images/img_9.png)
![img_12.png](images/img_12.png)

![img_13.png](images/img_13.png)


### `prototype`

![img_14.png](images/img_14.png)
![img_16.png](images/img_16.png)

`prototype` does not belong to any `Object` or instances but only to `Constructor functions` or
`Classes`

![img_17.png](images/img_17.png)
![img_18.png](images/img_18.png)
![img_19.png](images/img_19.png)

![img_20.png](images/img_20.png)

We are creating instances of `me` constructor function of Object
![img_21.png](images/img_21.png)


Referred Video: https://youtu.be/1UTqFAjYx1k?si=_rYdylQi8aK3zaO6


---
</details>


