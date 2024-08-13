
<details >
 <summary style="font-size: small; font-weight: bold">
01. Input->
computeAmount().Iacs(15).
crore(5).crore(2).lacs(20).thousand(45).crore(7).value()[Chirag Goel]
</summary>

###### 01

Solution: [1-important-concept / 04-js-concept / 5-functions / constructor](.././1-important-concept/04-js-concept/5-functions/readme.md)
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

Write a function which below input, give below output

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
