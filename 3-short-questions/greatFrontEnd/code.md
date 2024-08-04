<details >
 <summary style="font-size: small; font-weight: bold">01. Flatten [Apple, Amazon, Lyft, Salesforce]</summary>

###### 01

Question:
```js
// Single-level arrays are unaffected.
flatten([1, 2, 3]); // [1, 2, 3]

// Inner arrays are flattened into a single level.
flatten([1, [2, 3]]); // [1, 2, 3]
flatten([
  [1, 2],
  [3, 4],
]); // [1, 2, 3, 4]

// Flattens recursively.
flatten([1, [2, [3, [4, [5]]]]]); // [1, 2, 3, 4, 5]
```


<details >
 <summary style="font-size: medium; font-weight: bold">Solution</summary>

https://www.greatfrontend.com/questions/javascript/flatten

https://www.figma.com/board/whorUkUBWml2oad0gAJSy5/DSA-Summary?node-id=511-596&t=oq234ThQe08ssNUv-4
![img.png](img.png)
![img_1.png](img_1.png)
![img_2.png](img_2.png)


![img_3.png](img_3.png)

Since here we have Tree not graph that too not with any adjacency list, 
we need to use the above exact approach but take an idea from the same
<details >
 <summary style="font-size: small; font-weight: bold">Recursive(DFS)</summary>


My Solution - 1:

Using DFS
```js
export default function flatten(value) {
  let res = [];


  const flattenedChild = (arr) => {
    if(!arr)
      return;

    for(let a of arr){
      if(Array.isArray(a)){
        flattenedChild(a);
      }
      else{
        res.push(a);
      }
    }
  }

  flattenedChild(value);

  console.log("res : ", res);

  return res;
}
```


Solution-2:
```js
/**
 * @param {Array<*|Array>} value
 * @return {Array}
 */
export default function flatten(value) {
  return value.reduce(
    (acc, curr) => acc.concat(Array.isArray(curr) ? flatten(curr) : curr),
    [],
  );
}

```
</details>


<details >
 <summary style="font-size: small; font-weight: bold">Iterative</summary>

❌My BFS Solution:
<br>
This will yield wrong result 
```js
export default function flatten(value) {
  let queue = [...value];

  let res = [];

  while(queue.length > 0){
    let element = queue.shift();


    if(Array.isArray(element)){
        /**Using here spread operator is very important
         * as we might end-up in infinite loop
         */
      queue.push(...element);
      // queue = [...queue, ...element]
    }
    else{
      res.push(element);
    }

    console.log("queue : ", queue.length);
    console.log("element : ", element);
  }

  return res;
}
```
❌ `queue.push(element);`
<br>
The code will be running into an infinite loop because when an element is identified as an array, you are pushing the entire array (element) back onto the queue without flattening it. This causes the same array to be repeatedly processed, leading to an infinite loop.
<br>
✅ `queue.push(...element);`
<br>
Using here spread operator is very important as we might end-up in infinite loop


✅My Modified Solution:
```js
export default function flatten(value) {
  let queue = [...value];

  let res = [];

  while(queue.length > 0){
    let element = queue.shift();

    if(Array.isArray(element)){
        /**Here we are adding element at start of queue
         * instead of pushing it at the end
         */
      queue.unshift(...element);
    }
    else{
      res.push(element);
    }

    console.log("queue : ", queue.length);
    console.log("element : ", element);
  }

  return res;
}
```
</details>

</details>


</details>



<details >
 <summary style="font-size: small; font-weight: bold">02. Deep Equal</summary>

###### 02

<details >
 <summary style="font-size: small; font-weight: bold">Question</summary>

Implement a function `deepEqual` that performs a deep comparison between two values. It returns `true` if two input values are deemed equal, and returns `false` if not.

- You can assume there are only JSON-serializable values (numbers, strings, boolean, `null`, objects, arrays).
- There wouldn't be cyclic objects, i.e. objects with circular references.
```js
deepEqual('foo', 'foo'); // true
deepEqual({ id: 1 }, { id: 1 }); // true
deepEqual([1, 2, 3], [1, 2, 3]); // true
deepEqual([{ id: '1' }], [{ id: '2' }]); // false
```
</details>

<details >
 <summary style="font-size: small; font-weight: bold">Solution</summary>

<details >
 <summary style="font-size: small; font-weight: bold">`typeof()`</summary>

![img.png](img_4.png)

```javascript
typeof([])
// "object"

//Check if an object is an array
Array.isArray([])
```

Referred Article: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#bigint_type

</details>

My Solution:

**Note:** Read all comments very carefully, this problem looks simple, but because
so many edge case it might become tricky to understand.
```js
export default function deepEqual(valueA, valueB) {

  /**
   * This will cover all value comparison of below data type
   * 1. Undefined
   * 2. Boolean
   * 3. String
   * 4. Number
   * 
   * Also, this is the only condition that can return "true",
   * rest everything is trying to see for "false" case
   */
  if(valueA === valueB) 
      return true;

  if(typeof valueA !== typeof valueB)
    return false;

  /** 
   * In Object type check for below things because all of them
   * return "object" as their type 
   * 1. null
   * 2. Array
   * 3. Object
   */
  if(typeof valueA === 'object' && typeof valueB === 'object'){

    /**
     * One super important thing to note is that, since every
     * if statement is returning some value in every situation
     * hence we don't need else statement
     */

    if(valueA === null || valueB === null)
      return false;

    if(Array.isArray(valueA) && Array.isArray(valueB)){
      const lenA = valueA.length;
      const lenB = valueB.length

      if(lenA !== lenB)
        return false;

      for(let i = 0; i < lenA; i++){
        if(!deepEqual(valueA[i], valueB[i]))
          return false;
      }

      return true;
    }

    if(Array.isArray(valueA) || Array.isArray(valueB)){
      return false
    }

    const keysArrA = Object.keys(valueA);
    const keysArrB = Object.keys(valueB);

    const lenA = keysArrA.length;
    const lenB = keysArrB.length;

    if(lenA !== lenB)
      return false;

    for(let i = 0; i < lenA; i++){
      if(keysArrA[i] !== keysArrB[i])
        return false;

      if(!deepEqual(valueA[keysArrA[i]], valueB[keysArrB[i]]))
        return false;
    }

    return true;   
  }
}
```

For more solution and explaination on edge case refer:
https://www.greatfrontend.com/questions/javascript/deep-equal?list=one-week
</details>
</details>




<details >
 <summary style="font-size: small; font-weight: bold">03. List Format</summary>

###### 03

https://www.greatfrontend.com/questions/javascript/list-format?list=one-week
<details >
 <summary style="font-size: small; font-weight: bold">Question</summary>

![img_5.png](img_5.png)

```js
listFormat([]); // ''

listFormat(['Bob']); // 'Bob'
listFormat(['Bob', 'Alice']); // 'Bob and Alice'

listFormat(['Bob', 'Ben', 'Tim', 'Jane', 'John']);
// 'Bob, Ben, Tim, Jane and John'

listFormat(['Bob', 'Ben', 'Tim', 'Jane', 'John'], {
  length: 3,
}); // 'Bob, Ben, Tim and 2 others'

listFormat(['Bob', 'Ben', 'Tim', 'Jane', 'John'], {
  length: 4,
}); // 'Bob, Ben, Tim, Jane and 1 other'

listFormat(['Bob', 'Ben', 'Tim', 'Jane', 'John'], {
  length: 3,
  sorted: true,
}); // 'Ben, Bob, Jane and 2 others'

listFormat(['Bob', 'Ben', 'Tim', 'Jane', 'John', 'Bob'], {
  length: 3,
  unique: true,
}); // 'Bob, Ben, Tim and 2 others'

listFormat(['Bob', 'Ben', 'Tim', 'Jane', 'John'], {
  length: 3,
  unique: true,
}); // 'Bob, Ben, Tim and 2 others'

listFormat(['Bob', 'Ben', '', '', 'John']); // 'Bob, Ben and John'

```
</details>

<details >
 <summary style="font-size: small; font-weight: bold">Solution</summary>

```js
export default function listFormat(items, options) {
  let res = " and ";
  let remainCount = 0;

  // for(let i = 0; i < modifiedItems.length; i++){
  //   if(modifiedItems[i].length === 0){
  //     modifiedItems.splice(i,1);
  //     i--;
  //   }
  // }

  /* Remove falsey value such as '' */
  let modifiedItems = items.filter((item) => item);


  if(options?.unique){
    modifiedItems = Array.from(new Set(modifiedItems));
  }

  if(modifiedItems.length === 0)
    return '';

  if(modifiedItems.length === 1)
    return modifiedItems[0];

  if(options?.sorted){
    modifiedItems = [...modifiedItems.sort()];
  }

  

  if(options?.length && options?.length > 0  && modifiedItems.length > options?.length){
    remainCount = modifiedItems.length - options?.length;
  
    modifiedItems = [...modifiedItems.slice(0, options?.length)]
  }

  

  if(remainCount > 0){
    res += remainCount;
    res += remainCount > 1 ? " others" : " other"

    let initialPortion = "";
    const len = modifiedItems.length;
    for(let i = 0; i < len; i++){
      initialPortion += modifiedItems[i];
      initialPortion += i < len - 1 ? ', ' : '';
    }

    return initialPortion + res;
  }
  else{
    const lastItem = modifiedItems.pop();

    let initialPortion = "";
    const len = modifiedItems.length;
    for(let i = 0; i < len; i++){
      initialPortion += modifiedItems[i];
      initialPortion += i < len - 1 ? ', ' : '';
    }

    return initialPortion + res + lastItem;
  }
}
```
</details>
</details>
