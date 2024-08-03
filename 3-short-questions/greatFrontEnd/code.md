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
