## Revision Questions:
<details >
 <summary style="font-size: small; font-weight: bold">01. Two-way binding [BFE]</summary>

###### r01

**Question:**

Let's do some simple two-way binding.

Please create a function `model(state, element)`, to bind `state.value` to the HTMLInputElement `element`.

```js
const input = document.createElement('input')
const state = { value: 'BFE' }
model(state, input)

console.log(input.value) // 'BFE'
state.value = 'dev'
console.log(input.value) // 'dev'
input.value = 'BFE.dev'
input.dispatchEvent(new Event('change'))
console.log(state.value) // 'BFE.dev'
```
https://bigfrontend.dev/problem/two-way-binding

**Solution:**

```js
function model(state, input){
    input.value = state.value;

    /**
     * Here whenever we set or get the value of object `state` and key `value`
     * then below function will be called which can then be used to update the `input` value
     */
    Object.defineProperty(state, 'value', {
        get(){
            console.log("get called: ");
            /**
             * Below return will send you in infinite loop because each time
             * you do state.value it will call this get method and it will
             * keep calling itself
             *
             * return state.value
             */
            return input.value;
        },
        set(new_value) {
            console.log("set called: ");
            input.value = new_value;
        }
    })

    /**
     * Below eventlistner just listen to `change` event of `input`
     * and update the value of object `state` and key `value`
     */
    input.addEventListener('change',(event) => {
        state.value = event.target.value;
    })
}
```
</details>




<details >
 <summary style="font-size: small; font-weight: bold">02. auto-retry Promise on rejection [BFE]</summary>

###### r02

**Question:**

For a web application, fetching API data is a common task.

But the API calls might fail because of Network problems. Usually we could show a screen for Network Error and ask users to retry.

One approach to handle this is auto retry when network error occurs.

You are asked to create a `fetchWithAutoRetry(fetcher, count)`, which automatically fetch again when error happens, until the maximum count is met.

For the problem here, there is no need to detect network error, you can just retry on all promise rejections.

https://bigfrontend.dev/problem/retry-promise-on-rejection


**Solution-1:**

```js

/**
 * @param {() => Promise<any>} fetcher
 * @param {number} maximumRetryCount
 * @return {Promise<any>}
 */
function fetchWithAutoRetry(fetcher, maximumRetryCount) {

    return new Promise((resolve, reject) => {
        let count = 0;

        const callFetcher = () => {
            /**
             * 1. Note that fetcher return Promise hence executing is important
             * 2. Here we could have did just `fetcher().then((data) => { ... })`
             * but we have to check whether `fetcher()` is `Promise` or not
             * Hence using `Promise.resolve(fetcher())`
             */
            return Promise.resolve(fetcher()).then((resp) => {
                    resolve(resp);
                    return;
                },
                (error) => {
                    if(count === maximumRetryCount){
                        reject(error);
                        return;
                    }
                    else
                        callFetcher();

                    count++;
                });
        };

        callFetcher();
    });

}
```

**Solution-2:**

```js
/**
 * @param {() => Promise<any>} fetcher
 * @param {number} maximumRetryCount
 * @return {Promise<any>}
 */
function fetchWithAutoRetry(fetcher, maximumRetryCount) {
  return fetcher().catch((error) => {
    if(maximumRetryCount === 0)
      throw error;
    else
      return fetchWithAutoRetry(fetcher, maximumRetryCount - 1);
  })
}
```
</details>




## Questions:
<details >
 <summary style="font-size: small; font-weight: bold">
01. Input->
computeAmount().Iacs(15).
crore(5).crore(2).lacs(20).thousand(45).crore(7).value()[Chirag Goel]
</summary>

###### 01

Solution: [1-important-concept / 04-js-concept / 5-functions / constructor](../../1-important-concept/04-js-concept/5-functions/readme.md)
</details>


<details >
 <summary style="font-size: small; font-weight: bold">02. find all the prime numbers up to n?</summary>

###### 02

```js
function isPrime(num) { 
    for (let i = 2; i <= Math.sqrt(num); i++) { 
        if (num % i === 0) { 
            return false; 
        } 
    } 
    return num > 1; 
} 
  
function printPrimeNumbers(n) { 
    for (let i = 2; i <= n; i++) { 
        if (isPrime(i)) { 
            console.log(i); 
        } 
    } 
} 
  
printPrimeNumbers(100);
```
</details>



<details >
 <summary style="font-size: small; font-weight: bold">03. Parent Child Relationship Tree Formation [Amazon FE 2020]</summary>

###### 03

1. https://leetcode.com/discuss/interview-question/847073/amazon-phone-front-end-engineer
2. Similar like above: https://leetcode.com/discuss/interview-experience/508233/amazon-sde1-front-end-feb-2020-rejected
<details >
 <summary style="font-size: small; font-weight: bold">Question</summary>

Given a series of child-parent relations like
```js
['dog', 'mammal'],
["shark, fish"],
["cat", "mammal"],
["mammal", "animal"],
['fish', 'animal']
```


capture the relationship of these entities so you can print the
relationships in a nested format at any point.

Notes:

Siblings may be returned in any order.
Your add function will be called multiple times to add relationships
Example Outputs (any are valid):

```js
Option 1:
animal
  fish
    shark
  mammal
    dog
    cat

Option 2:
{
  "value": "animal",
  "children": [
    {
      "value": "fish",
      "children": [
        {
          "value": "shark",
          "children": []
        }
      ]
    },
    {
      "value": "mammal",
      "children": [
        {
          "value": "dog",
          "children": []
        },
        {
          "value": "cat",
          "children": []
        }
      ]
    }
  ]
}

Option 3:
{
  "animal": {
    "fish": {
      "shark": {}
    },
    "mammal": {
      "cat": {},
      "dog": {}
    }
  }
}
```
</details>


<details >
 <summary style="font-size: small; font-weight: bold">Solution</summary>

```js
class TreeNode{
    constructor(val) {
        this.value = val;
        this.children = [];
    }

    addChild(child){
        this.children.push(child);
    }

    print(prefix = ' '){
        console.log(prefix + this.value);
        this.children.forEach((child) => child.print(prefix + ' '));
    }
}


class Hierarchy{
    constructor() {
        this.node = {};
        this.root = null;
    }

    addRelationship(child, parent){
        if(!this.node[child]){
            this.node[child] = new TreeNode(child);
        }

        if(!this.node[parent]){
            this.node[parent] = new TreeNode(parent);
        }

        this.node[parent].addChild(this.node[child]);

        /* Here we are trying to get the root of the tree,
        if there is no root then we assign the current parent, or
         if the current root is equal to the child, then we need to update
        our root with its parent
        */
        if(!this.root || this.root === this.node[child]){
            this.root = this.node[parent];
        }
    }


    printHierarchy(){
        if(this.root){
            this.root.print();
        }
        else{
            console.log("No tree possible");
        }
    }
}


// Example Usage
const hierarchy = new Hierarchy();
hierarchy.addRelationship('dog', 'mammal');
hierarchy.addRelationship('cat', 'mammal');
hierarchy.addRelationship('mammal', 'animal');
hierarchy.addRelationship('whitesheep', 'sheep');
hierarchy.addRelationship('shark', 'fish');
hierarchy.addRelationship('fish', 'animal');
hierarchy.addRelationship('sheep', 'mammal');
hierarchy.addRelationship('sparrow', 'bird');
hierarchy.addRelationship('blacksheep', 'sheep');

hierarchy.printHierarchy();

```
</details>

</details>



<details >
 <summary style="font-size: small; font-weight: bold">04. Data Transformation [Chirag Goel]</summary>

###### 04
https://youtu.be/uhtmTe26rqo?si=wAEuFy8zBopNpB8E&t=284
<details >
 <summary style="font-size: small; font-weight: bold">Question</summary>

Write a function given input, give below output

```js
const input = [
    {
        key: 'sample1',
        data: 'data1',
    },
    {
        key: 'sample1',
        data: 'data2'
    },
    {
        key: 'sample1',
        data: 'data3'
    },
    {
        key: 'sample2',
        data: 'data2',
    },
    {
        key: 'sample3',
        data: 'data3',
    },
]

const output =
    {
        'sample1': [
            {
                key: 'sample1',
                data: 'data1',
            },
            {
                key: 'sample1',
                data: 'data2'
            },
            {
                key: 'sample1',
                data: 'data3'
            }
        ],
        'sample2': [
            {
                key: 'sample2',
                data: 'data2',
            }
        ],
        'sample3': [
            {
                key: 'sample3',
                data: 'data3',
            }
        ]
    }


```
</details>

<details >
 <summary style="font-size: small; font-weight: bold">Solution</summary>

```js
function transform(input){
    let output = {};

    for(let item of input){
        if(output[item.key]){
            output[item.key].push(item);
        }
        else{
            output[item.key] = [item];
        }
    }

    console.log("Output : ", output);
}

transform(input);

```
</details>
</details>


<details >
 <summary style="font-size: small; font-weight: bold">05. Map Async [Uber, Lyft, Google]</summary>

###### 05

Question:
https://www.greatfrontend.com/questions/javascript/map-async
![img.png](img.png)

My Solution:

```js
export default function mapAsync(iterable, callbackFn) {
  let res = [];

  return new Promise((resolve, reject) => {
    let yetToResolve = iterable.length;

    if(yetToResolve === 0)
      resolve(res);

    for(let i = 0; i < iterable.length; i++){
      const value = iterable[i];
      Promise.resolve(callbackFn(value)).then((response) => {
        yetToResolve--;
        res[i] = response;

        if(yetToResolve === 0)
          resolve(res);
      }, (error) => {
        reject(error);
      })
    }
  })
}
```

Refer Concept [04-js-concept/polyfills/readme.md -> Promise.all() [GreatFrontend Edge Cases]](../../1-important-concept/04-js-concept/polyfills/readme.md)


Small Clean Solution:

```ts
export default function mapAsync<T, U>(
  iterable: Array<T>,
  callbackFn: (value: T) => Promise<U>,
): Promise<Array<U>> {
  return Promise.all(iterable.map(callbackFn));
}
```
</details>



<details >
 <summary style="font-size: small; font-weight: bold">06. Map Async Limit [Uber, Lyft, Google]</summary>

###### 06
https://www.greatfrontend.com/questions/javascript/map-async-limit
![img_1.png](img_1.png)

![img_2.png](img_2.png)
- **Sequential:** A sequential (one at a time) approach will certainly stay within the concurrency limit, but is extremely slow and not utilizing the fact that we can have concurrent async tasks.
- **Chunks:** The chunks approach improves the concurrency but it waits for all items in the current chunk to be completed before moving on to the next. If there's a task that is much slower than the rest, there will be idle cycles and the available limit is not fully-utilized.
- **Chunkless:** The most efficient approach is to immediately start processing the next item when an item is completed. This ensures that there are always size ongoing async tasks (when there are unprocessed items) and the available limit is fully-utilized.

❌Solution(Sequential):

```ts
export default function mapAsyncLimit<T, U>(
  iterable: Array<T>,
  callbackFn: (value: T) => Promise<U>,
  size: number = Infinity,
): Promise<Array<U>> {
  return new Promise((resolve, reject) => {
    const results: Array<U> = [];

    function processItem(index: number) {
      if (index === iterable.length) {
        resolve(results);
      }

      return callbackFn(iterable[index])
        .then((result) => {
          results.push(result);
          processItem(index + 1);
        })
        .catch(reject);
    }

    return processItem(0);
  });
}

```

✅Solution(Chunks):
```js
export default async function mapAsyncLimit(iterable, callbackFn, size = Infinity) {
  const res = [];
  const len = iterable.length;

  if(len === 0)
    return res;

  for(let i = 0; i < len; i += size){
    const response = await Promise.all(iterable.slice(i, i + size).map(callbackFn));

    res.push(...response);
  }

  return res;
}
```

✅Solution(Chunkless):

Don't need to go through this while revising the code
```js
export default function mapAsyncLimit<T, U>(
  iterable: Array<T>,
  callbackFn: (value: T) => Promise<U>,
  size: number = Infinity,
): Promise<Array<U>> {
  return new Promise((resolve, reject) => {
    const results: Array<U> = [];
    let nextIndex = 0;
    let resolved = 0;

    if (iterable.length === 0) {
      resolve(results);
      return;
    }

    async function processItem(index: number) {
      nextIndex++;
      try {
        const result = await callbackFn(iterable[index]);
        results[index] = result;
        resolved++;

        if (resolved === iterable.length) {
          resolve(results);
          return;
        }

        if (nextIndex < iterable.length) {
          processItem(nextIndex);
        }
      } catch (err) {
        reject(err);
      }
    }

    for (let i = 0; i < Math.min(iterable.length, size); i++) {
      processItem(i);
    }
  });
}
```

For other solution using `then` instead of `await` check GreatFrontend solutions
</details>
