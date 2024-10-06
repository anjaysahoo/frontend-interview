<details >
 <summary style="font-size: x-large; font-weight: bold">Binary Search</summary>

<details >
 <summary style="font-size: large; font-weight: bold">Concept</summary>

![BinarySearch_1.jpg](images/BinarySearch_1.jpg)
</details>


<details >
 <summary style="font-size: large; font-weight: bold">Important Examples</summary>

<details >
 <summary style="font-size: medium; font-weight: bold">1. First & Last Occurrence of a Element / Count of an Element</summary>

![BinarySearch_2.jpg](images/BinarySearch_2.jpg)
</details>


<details >
 <summary style="font-size: medium; font-weight: bold">2. Number of times a Sorted Array is Rotated</summary>

![img_3.png](img_3.png)
</details>


<details >
 <summary style="font-size: medium; font-weight: bold">3. Find element in Rotated Sorted Array</summary>

![img_4.png](img_4.png)
</details>


<details >
 <summary style="font-size: medium; font-weight: bold">4. Searching in a Nearly Sorted Array</summary>

![img_5.png](img_5.png)
</details>


<details >
 <summary style="font-size: medium; font-weight: bold">5. Find position of an element in a Infinite Sorted Array</summary>

![img_6.png](img_6.png)
</details>


<details >
 <summary style="font-size: medium; font-weight: bold">6. Index of First 1 in a Binary Sorted Infinite Array</summary>

![img_7.png](img_7.png)
</details>


<details >
 <summary style="font-size: medium; font-weight: bold">8. Peak Element</summary>

![img_8.png](img_8.png)
</details>


<details >
 <summary style="font-size: medium; font-weight: bold">9. Find Maximum element in Bitonic Array</summary>

![img_9.png](img_9.png)
</details>


<details >
 <summary style="font-size: medium; font-weight: bold">10. Search an element in Bitonic Array</summary>

![img_10.png](img_10.png)
</details>

<details >
 <summary style="font-size: medium; font-weight: bold">11. Search in Row-wise & Column-wise Sorted Array</summary>

![img_11.png](img_11.png)
</details>

</details>

</details>





<details >
 <summary style="font-size: x-large; font-weight: bold">Sliding Window</summary>

<details >
 <summary style="font-size: large; font-weight: bold">Concept</summary>

![img_12.png](img_12.png)

### Fixed Size Window Template
![img_13.png](img_13.png)

### Variable Size Window Template
![img_14.png](img_14.png)

</details>


<details >
 <summary style="font-size: large; font-weight: bold">Important Examples</summary>

<details >
 <summary style="font-size: medium; font-weight: bold">1. Maximum Sum Subarray of Size K</summary>

![img_15.png](img_15.png)
</details>


<details >
 <summary style="font-size: medium; font-weight: bold">2. First -ve number in every window of size K</summary>

![img_16.png](img_16.png)
</details>


<details >
 <summary style="font-size: medium; font-weight: bold">3. Minimum Window Substring</summary>

- Using variable sliding window
- Time - O(|s|)
- Space - O(|t|)
- Very good question

**Identification :**
1. Involves string & substring
2. Condition given
3. Minimize window size K



</details>

</details>

</details>







<details >
 <summary style="font-size: x-large; font-weight: bold">Stack</summary>

<details >
 <summary style="font-size: large; font-weight: bold">Concept</summary>

![Stack_1.jpg](images/Stack_1.jpg)

**Identification:**
1. There is high probability that stack questions are on `ARRAY`.
2. Reducing time complexity from `O(n ^ 2) to O(n)`
3. Two FOR loop where `j is dependent on i`.
</details>


<details >
 <summary style="font-size: large; font-weight: bold">Important Examples</summary>

<details >
 <summary style="font-size: medium; font-weight: bold">1. Nearest Greater to Right / Next Largest Element</summary>

![Stack_2.jpg](images/Stack_2.jpg)
![Stack_3.jpg](images/Stack_3.jpg)
</details>


<details >
 <summary style="font-size: medium; font-weight: bold">3. Stock Span Problem</summary>

![Stack_4.jpg](images/Stack_4.jpg)
</details>


<details >
 <summary style="font-size: medium; font-weight: bold">4. Maximum Area Histogram</summary>

![Stack_5.jpg](images/Stack_5.jpg)
</details>


<details >
 <summary style="font-size: medium; font-weight: bold">5. Max Area Rectangle in Binary Matrix</summary>

![Stack_6.jpg](images/Stack_6.jpg)
</details>


<details >
 <summary style="font-size: medium; font-weight: bold">6. Rain Water Trapping</summary>

![Stack_7.jpg](images/Stack_7.jpg)
</details>


<details >
 <summary style="font-size: medium; font-weight: bold">7. Minimum Element in Stack</summary>

![Stack_8.jpg](images/Stack_8.jpg)
![Stack_9.jpg](images/Stack_9.jpg)
![Stack_10.jpg](images/Stack_10.jpg)
</details>

</details>
</details>







<details >
 <summary style="font-size: x-large; font-weight: bold">Recursion</summary>

<details >
 <summary style="font-size: large; font-weight: bold">Concept</summary>

![img.png](img.png)

**Input-Output Method**
![img_1.png](img_1.png)

**IBH(Induction - Base Condition - Hypothesis)**
![img_2.png](img_2.png)

Referred Video: https://youtube.com/playlist?list=PL_z_8CaSLPWeT1ffjiImo0sYTcnLzo-wY&si=0Xck63pHJ1y7DBp4
</details>

<details >
 <summary style="font-size: large; font-weight: bold">Important Examples</summary>

<details >
 <summary style="font-size: medium; font-weight: bold">1. Height of Binary Tree</summary>

![Recursion_3.jpg](images/Recursion_3.jpg)

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

 let res = 0;
var maxDepth = function(root) {
    if(!root)
        return 0;

    solve(root);

    const ans = res;
    res = 0;


    return ans;
};

function solve(root) {
    //Base Condition
    if(!root)
        return 0;

    //Hypothesis
    const lh = solve(root.left);
    const rh = solve(root.right);

    //Induction
    const temp = Math.max(lh, rh) + 1;
    res = Math.max(temp, res);

    return temp;
}
```

Leetcode: https://leetcode.com/problems/maximum-depth-of-binary-tree/
Referred Video: https://www.youtube.com/watch?v=aqLTbtWh40E&list=PL_z_8CaSLPWeT1ffjiImo0sYTcnLzo-wY&index=5
</details>

<details >
 <summary style="font-size: medium; font-weight: bold">2. Sort An Array </summary>

![Recursion_4.jpg](images/Recursion_4.jpg)

#### Recursion
```js
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    //Base Condition
    if(nums.length === 1)
        return nums;
    
    //Hypothesis(reducing input & calling again)
    const temp = nums.pop();
    sortArray(nums);

    //Induction
    insert(nums, temp);
    
    return nums;
};

function insert(arr, val) {
    //Base Condition
    const len = arr.length;
    if(len === 0 || val >= arr[len - 1]){
        arr.push(val);
        return;
    }

    //Hypothesis(reducing input & calling again)
    const temp = arr.pop();
    insert(arr, val);

    //Induction
    arr.push(temp);
}
```

#### Merge Sort

````js
/**
 * @param {number[]} nums
 * @return {number[]}
 */
function sortArray(nums) {
    const len = nums.length;
    mergeSort(0, len - 1, nums);
    
    return nums;
};

function mergeSort(p, r, nums) {
    if(p < r){
        const q = Math.floor((p + r) / 2);
        mergeSort(p, q, nums);
        mergeSort(q + 1, r, nums);
        merge(p, q, r, nums);
    }
}

function merge(p, q, r, nums) {
    const len1 = (q - p) + 2;
    const len2 = (r - q) + 1;

    const arr1 = new Array(len1);
    const arr2 = new Array(len2);

    for(let i = 0; i < len1 - 1; i++){
        arr1[i] = nums[p + i];
    }
    arr1[len1 - 1] = Infinity;


    for(let i = 0; i < len2 - 1; i++){
        arr2[i] = nums[q + i + 1];
    }
    arr2[len2 - 1] = Infinity;

    let i = 0;
    let j = 0;
    let k = p;

    while(k <= r){
        if(arr1[i] <= arr2[j]){
            nums[k] = arr1[i];
            i++;
        }
        else{
            nums[k] = arr2[j];
            j++;
        }
        k++;
    }
}
````
Leetcode: https://leetcode.com/problems/sort-an-array/
<br>
Referred Video: https://www.youtube.com/watch?v=AZ4jEY_JAVc&list=PL_z_8CaSLPWeT1ffjiImo0sYTcnLzo-wY&index=6
</details>


<details >
 <summary style="font-size: medium; font-weight: bold">3. Sort a Stack </summary>

![Recursion_5.jpg](images/Recursion_5.jpg)
![Recursion_6.jpg](images/Recursion_6.jpg)
</details>


<details >
 <summary style="font-size: medium; font-weight: bold">4. Delete Middle Element of a Stack</summary>

![Recursion_7.jpg](images/Recursion_7.jpg)
![Recursion_8.jpg](images/Recursion_8.jpg)

- Using recursion
- Time -` O(n / 2)`
- Space - `O(n / 2)`

1. **Identification :** Deleting without extra space possible only through recursion.
2. **Approach :** Able to reduce the input size to solve the problem, so **IBH**
</details>


<details >
 <summary style="font-size: medium; font-weight: bold">5. Reverse a Stack</summary>

Question: https://www.geeksforgeeks.org/problems/reverse-a-stack/1

![Recursion_9.jpg](images/Recursion_9.jpg)
![Recursion_10.jpg](images/Recursion_10.jpg)

- Time - `O(n)`
- Space - `O(1)` or Auxiliary space - `O(n)`

1. **Identification :** Reversing without extra space only possible with stack.
2. **Approach :** Able to reduce input sixe to solve the problem, so **IBH**.

```js
class Solution {
    //Function to reverse a string.
    reverse(s) {
        //Base Condition
        if(s.length === 0)
            return;
            
        //Hypothesis
        const temp = s.pop();
        this.reverse(s);
        
        //Induction
        this.insert(s, temp);
    }
    
    insert(s, val) {
        //Base Condition
        if(s.length === 0){
            s.push(val);
            return;
        }
        
        //Hypothesis
        const temp = s.pop();
        this.insert(s, val);

        //Induction
        s.push(temp);
    }
}
```


My Java solution(Different from above notes because of question return type, but same time & space complexity)
```js
class Solution
{ 
    
    static ArrayList<Integer> reverse(Stack<Integer> s)
    {
        ArrayList<Integer> res = new ArrayList<>();
        
        return reverseStack(s, res);
    }
    
    static ArrayList<Integer> reverseStack(Stack<Integer> s,
    ArrayList<Integer> res){
        /** Base Condition **/
        if(s.isEmpty())
            return new ArrayList<>();
            
        /** Induction **/
        int temp = s.pop();
        res.add(temp);
            
        /** Hypothesis **/  
        reverseStack(s, res);
        
        return res;
    }
}
```
</details>


<details >
 <summary style="font-size: medium; font-weight: bold">6. Kth Symbol in Grammar</summary>


1. My TLE Solution:
```js
/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
 let s = '0';
var kthGrammar = function(n, k) {
    getFullString(1, n);

    const res = Number(s[k - 1]);
    s = '0';

    return res;
};

function getFullString(input, n){
    if(input === n)
        return;

    getFullString(input + 1, n);

    const arr = s.split('');

    s = '';
    for(let a of arr){
        if(a === '0')
            s += '01';
        else
            s += '10';
    }

    return;
}
```

2.

![Recursion_11.jpg](images/Recursion_11.jpg)

- Recursion
- Time - `O(n / 2)`
- Space - Auxiliary space `O( n / 2)`
1. **Identification :** Problem itself is defined **recursively**.
2. **Approach :** Reducing input size we are able to solve the problem, so **IBH**
```js
/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthGrammar = function(n, k) {
    //Base Condition
    if(n === 1 && k === 1)
        return 0;

    const mid = Math.floor(Math.pow(2, n - 1) / 2);

    //Induction (Here If else statement is induction)
    if(k <= mid){
        //Hypothesis 
        return kthGrammar(n - 1, k);
    } 
    else{
        //Hypothesis
        /*In case k bigger than mid we need to return Complementary value*/
        return kthGrammar(n - 1, k - mid) === 0 ? 1 : 0;
    }
};
```
</details>


<details >
 <summary style="font-size: medium; font-weight: bold">7. Tower of Hanoi</summary>

![img_31.png](img_31.png)

![Recursion_12.jpg](images/Recursion_12.jpg)

```js
function towerOfHanoi(N){
    solve(1, 2, 3, N);
}

function solve(s, h, d, N){
    //Base Condition
    if(N === 1){
        console.log("Move plate from " + s + " to " + d);
        return;
    }
    
    //Hypothesis
    /* Here we are first moving N - 1 plate from source
    to helper box*/
    solve(s, d, h, N - 1);
    
    //Induction
    console.log("Move plate from " + s + " to " + d);
    /* After we move last plate to right place we will move remaining 
    N - 1 plate from helper to destination*/
    solve(h, s, d, N - 1);
    
    return;
}
```

Input:
```js
console.log("Number of plate = 1");
towerOfHanoi(1);

console.log("");

console.log("Number of plate = 2");
towerOfHanoi(2);

console.log("");

console.log("Number of plate = 3");
towerOfHanoi(3);
```

Output:
```bash
Number of plate = 1
Move plate from 1 to 3

Number of plate = 2
Move plate from 1 to 2
Move plate from 1 to 3
Move plate from 2 to 3

Number of plate = 3
Move plate from 1 to 3
Move plate from 1 to 2
Move plate from 3 to 2
Move plate from 1 to 3
Move plate from 2 to 1
Move plate from 2 to 3
Move plate from 1 to 3
```

Visual: https://www.mathsisfun.com/games/towerofhanoi.html
</details>


<details >
 <summary style="font-size: medium; font-weight: bold">8. Print Subsets / Print Powersets</summary>

Question: https://leetcode.com/problems/subsets/description/
![img_32.png](img_32.png)

**Recursive Solution:**

![Recursion_13.jpg](images/Recursion_13.jpg)

- Time - `O(2 ^ N)`
- Space - Auxiliary Space `O(2 ^ N)`
1. Identification - It involves choice & decision whether to add a value to result list or not, so **recursion**.
2. Approach - It involves decision in each step, so **Input-Output** method.
```js
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let res = [];

    solve(nums, [], res);

    return Array.from(res);
};

function solve(input, output, res){
    if(input.length === 0){
        res.push(output);
        return;
    }
        
    const temp = input.shift();
    
    /* using spread operator is important because if same input is
    * passed then second `solve` function won't even run because 
    * input will be empty by the it reaches second `solve`*/
    solve([...input], [...output], res);
    solve([...input], [...output, temp], res);
}
```

**Iterative Solution:**
```js
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const res = [];

    res.push([]);

    for(let num of nums){
        const len = res.length;

        for(let i = 0; i < len; i++){
            const subset = [...res[i]];
            subset.push(num);
            res.push(subset);
        }
    }

    return res;
};
```
</details>


<details >
 <summary style="font-size: medium; font-weight: bold">9. Print Unique Subsets & Variations</summary>

Question: https://leetcode.com/problems/subsets-ii/description/
![img_33.png](img_33.png)

**Recursive Solution:**
![Recursion_14.jpg](images/Recursion_14.jpg)

- Time - `O(2 ^ N)`
- Space - Auxiliary space `O(2N * X)`, X = Length of each subset.
1. Identification : In here each step we need to make choice & decision, so recursion
2. Approach : Since in each step we are making decision, so **Input-Output** method

```js
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    const set = new Set();

    solve(nums, [], set);

    const res = [];
    for(let [s] of set.entries())
        res.push(JSON.parse(s));

    return res;
};


function solve(input, output, set){
    if(input.length === 0){
        /* Here two thing to note:-
        1. Since Array are not primitive type hence using Stringifying
        is important to remove duplicate ones.
        2. Also `sorting` is important to get same value when numbers in
        array are shuffled */
        set.add(JSON.stringify(output.sort()));
        return;
    }

    const temp = input.shift();

    solve([...input], [...output], set);
    solve([...input], [...output, temp], set);
}
```

**Iterative Solution:**
```js
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    const set = new Set();
    set.add(JSON.stringify([]))

    for(let num of nums){
        const newSet = new Set(set)

        for(let s of newSet){
            const subset = [...JSON.parse(s)];
            subset.push(num);
            set.add(JSON.stringify(subset.sort()));
        }
    }

    const res = [];

    for(let s of set.keys()){
        res.push(JSON.parse(s));
    }

    return res;
};
```
</details>


<details >
 <summary style="font-size: medium; font-weight: bold">10. Permutation with Spaces</summary>

Question: https://www.geeksforgeeks.org/problems/permutation-with-spaces3627/1
![img_34.png](img_34.png)

![Recursion_15.jpg](images/Recursion_15.jpg)
![Recursion_16.jpg](images/Recursion_16.jpg)

- Time - `O(2 ^ N)`
- Space -
1. Identification : In each step we need to make choice & decision, so recursion
2. Approach : Since each step involves decision, **Input-Output** method

```js
/**
 * @param {string} s
 * @return {string[]}
 */
class Solution {
  permutation(s) {
    const result = [];
    
    this.solve(s.slice(1), s[0], result);
    
    return result;
  }
  
  solve(input, output, result){
      if(input.length === 0){
          result.push(output);
          return;
      }
       
      const c = input[0];
      
      this.solve(input.slice(1), `${output} ${c}`, result);
      this.solve(input.slice(1), `${output}${c}`, result);
  }
}
```
</details>


<details >
 <summary style="font-size: medium; font-weight: bold">11. Permutation with Case Change</summary>

![Recursion_17.jpg](images/Recursion_17.jpg)
</details>


<details >
 <summary style="font-size: medium; font-weight: bold">12. Letter Case Permutation</summary>

Question: https://leetcode.com/problems/letter-case-permutation/description/
![img_35.png](img_35.png)


![Recursion_18.jpg](images/Recursion_18.jpg)
![Recursion_19.jpg](images/Recursion_19.jpg)

- Time - `O(2 ^ N)`
- Space -
1. Identification : In each step we need to make choices & decision, so **recursion**.
2. Approach : Since evry step involves descision making, so **Input-Output** method.

```js
/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function(s) {
    const set = new Set();

    solve(s, '', set);

    return Array.from(set);
};

function solve(input, output, res){
    if(input.length === 0){
        res.add(output);
        return;
    }

    const c = input[0];

    if(c.charAt(0) >= '0' && c.charAt(0) <= '1'){
        solve(input.slice(1), `${output}${c}`, res);
    }
    else{
        solve(input.slice(1), `${output}${c.toLowerCase()}`, res);
        solve(input.slice(1), `${output}${c.toUpperCase()}`, res);
    }
}
```
</details>


<details >
 <summary style="font-size: medium; font-weight: bold">13. Generate All Balanced Parenthesis</summary>

Question: https://leetcode.com/problems/generate-parentheses/description/
![img_36.png](img_36.png)

![Recursion_20.jpg](images/Recursion_20.jpg)
![Recursion_21.jpg](images/Recursion_21.jpg)

- Time -
- Space -
1. Identification : In each step we need to make choice & decision, so recusrion.
2. Approach : Since each step involves decsion making, so **Input-Output** method.
```js
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const res = [];

    solve(n, n, '', res);

    return res;
};

function solve(open, close, output, res){
    if(open === 0 && close === 0){
        res.push(output);
        return;
    }

    if(open > 0)
        solve(open - 1, close, `${output}(`, res);
    
    if(close > 0 && close > open)
        solve(open, close - 1, `${output})`, res);
}
```
</details>


<details >
 <summary style="font-size: medium; font-weight: bold">14. Print N-bit Binary Numbers having more 1's than 0's for any Prefix</summary>

![Recursion_22.jpg](images/Recursion_22.jpg)
![Recursion_23.jpg](images/Recursion_23.jpg)
</details>

<details >
 <summary style="font-size: medium; font-weight: bold">13. Generate All Balanced Parenthesis</summary>

![Recursion_24.jpg](images/Recursion_24.jpg)
</details>

</details>
</details>





<details >
 <summary style="font-size: x-large; font-weight: bold">DP on Tree</summary>

<details >
 <summary style="font-size: large; font-weight: bold">Concept</summary>

The **diameter of a binary tree** is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.
![DP On Tree_1.jpg](images/DPOnTree_1.jpg)

**Identification:** To solve this question we need to traverse through each node and on each node we need to check its
left and right tree height to find the longest path. Hence, we need to apply DP on tree here

**General Syntax:**
![DP On Tree_2.jpg](images/DPOnTree_2.jpg)

Points to understand:
1. **Hypothesis**: We don't have to care how we are getting answer from these steps, we just know that 
we will get answer for `left` and `right` **subtree,** and we will use them in an induction step
2. **Induction:** Here we need to check whether the `final result` passes through the `current node` or not
   1. We will first calculate `temp` result 
   2. Then we will compare whether it is better than the result we can get from the `current node` if the `final result` pass through it
   3. Then we will compare with the `final result` and update it accordingly

Referred Video: https://youtube.com/playlist?list=PL_z_8CaSLPWfxJPz2-YKqL9gXWdgrhvdn&si=qpaVRPrWeRK9IA2I
</details>

<details >
 <summary style="font-size: large; font-weight: bold">Important Examples</summary>


<details >
 <summary style="font-size: medium; font-weight: bold">01. Diameter of a Binary Tree</summary>

![DP On Tree_3.jpg](images/DPOnTree_3.jpg)
![DP On Tree_4.jpg](images/DPOnTree_4.jpg)

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 let res = 0;
var diameterOfBinaryTree = function(root) {
    if(!root)
        return 0;

    solve(root);

    /**
    Since each node return height as 1 so we 
    need to reduce 1 from final result
    **/
    const ans = res - 1;

    /**
    Since we are using same variable 
    hence resetting is required
    **/
    res = 0;

    return ans;
};

function solve(root) {
    // BASE CONDITION
    if(!root)
        return 0;

     // HYPOTHESIS
    const lh = solve(root.left);
    const rh = solve(root.right);

      // INDUCTION
    const temp = Math.max(lh, rh) + 1;
    const max = Math.max(temp, lh + rh + 1);
    res = Math.max(res, max);

    return temp;
}
```

Points to understand:
1. **Hypothesis**: We don't have to care how we are getting answer from these steps, we just know that
   we will get answer for `left` and `right` **subtree,** and we will use them in an induction step
2. **Induction:** Here we need to check whether the `final result` passes through the `current node` or not
   1. We will first calculate `temp` result
   2. Then we will compare whether it is better than the result we can get from the `current node` if the `final result` pass through it
   3. Then we will compare with the `final result` and update it accordingly

Leetcode: https://leetcode.com/problems/diameter-of-binary-tree/
</details>


<details >
 <summary style="font-size: medium; font-weight: bold">02. Maximum Path Sum</summary>

### 1. From any node to any node
![DP On Tree_5.jpg](images/DPOnTree_5.jpg)
```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 let res = -Infinity;
var maxPathSum = function(root) {
    if(!root)
        return 0;

    solve(root);

    const finalResult = res;
    res = -Infinity;

    return finalResult;
};


function solve(root){
    //Base Condition
    if(!root)
        return 0;

    //Hypothesis
    const l = solve(root.left);
    const r = solve(root.right);

    //Induction
    const temp = Math.max(l, r) + root.val;
    const ans = Math.max(temp, l + r + root.val);
    res = Math.max(res, ans);

    /*Since we need maximum path sum from any node to any node, therefore
    child node can skip sending its value to parent if it is negative*/
    return temp < 0 ? 0 : temp;
}
```

Points to understand:
1. **Hypothesis**: We don't have to care how we are getting answer from these steps, we just know that
   we will get answer for `left` and `right` **subtree,** and we will use them in an induction step
2. **Induction:** Here we need to check whether the `final result` passes through the `current node` or not
   1. We will first calculate `temp` result
   2. Then we will compare whether it is better than the result we can get from the `current node` if the `final result` pass through it
   3. Then we will compare with the `final result` and update it accordingly

Leetcode: https://leetcode.com/problems/binary-tree-maximum-path-sum/description/
<br>
Referred Video: https://www.youtube.com/watch?v=Osz-Vwer6rw&list=PL_z_8CaSLPWfxJPz2-YKqL9gXWdgrhvdn&index=4

### 2. From leaf node to leaf node

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
let res = -Infinity;
var maxPathSum = function(root) {
   if(!root)
      return 0;

   solve(root);

   const finalResult = res;
   res = -Infinity;

   return finalResult;
};


function solve(root){
   //Base Condition
   if(!root)
      return 0;

   //Hypothesis
   const l = solve(root.left);
   const r = solve(root.right);

   //Induction
   const temp = Math.max(l, r) + root.val;
   const ans = Math.max(temp, l + r + root.val);
   res = Math.max(res, ans);

   /*Since we need maximum path sum from leaf node to leaf node, therefore
   child node can't skip sending its value to parent if it is negative*/
   return temp;
}
```
**Since we need maximum path sum from leaf node to leaf node, therefore
child node can't skip sending its value to parent if it is negative**

Referred Video: https://www.youtube.com/watch?v=ArNyupe-XH0&list=PL_z_8CaSLPWfxJPz2-YKqL9gXWdgrhvdn&index=5
</details>
</details>

</details>







<details >
 <summary style="font-size: x-large; font-weight: bold">Knapsack</summary>

<details >
 <summary style="font-size: large; font-weight: bold">Concept</summary>

<details >
 <summary style="font-size: medium; font-weight: bold">Hand Written Notes</summary>

![Knapsack_1.jpg](images/Knapsack_1.jpg)
![Knapsack_2.jpg](images/Knapsack_2.jpg)
![Knapsack_3.jpg](images/Knapsack_3.jpg)
![Knapsack_4.jpg](images/Knapsack_4.jpg)
![Knapsack_5.jpg](images/Knapsack_5.jpg)
![Knapsack_6.jpg](images/Knapsack_6.jpg)
![Knapsack_7.jpg](images/Knapsack_7.jpg)
![Knapsack_8.jpg](images/Knapsack_8.jpg)
![Knapsack_9.jpg](images/Knapsack_9.jpg)
![Knapsack_10.jpg](images/Knapsack_10.jpg)
</details>

### Dynamic Programming Introduction
![img_17.png](img_17.png)

### Knapsack Introduction
![img_18.png](img_18.png)

**BASE CONDITION :**
1. Base condition will be near valid/invalid input.
2. Base condition will always be formed in conjuction with both changing variable in problem like
-  ```js
   if(n == 0 || w == 0){ ........ }
   ```

-  ```js
   if(n - 1 == - 1){
        if(sum == 0){ ....... } else { ...... }
   }
   ```
![img_19.png](img_19.png)

**Note : We may need to maintain separate table to know whether DP is filled or not.**

![img_20.png](img_20.png)
![img_21.png](img_21.png)

![Knapsack_16.jpg](images/Knapsack_16.jpg)

</details>


<details >
 <summary style="font-size: large; font-weight: bold">Important Examples</summary>

### 1. 0 / 1 Knapsack
<details >
 <summary style="font-size: medium; font-weight: bold">1. Subset Sum</summary>

![img_22.png](img_22.png)
</details>


<details >
 <summary style="font-size: medium; font-weight: bold">2. Equal Sum Partition</summary>

![img_23.png](img_23.png)
</details>


<details >
 <summary style="font-size: medium; font-weight: bold">3. Count of Subsets Sum with a given Sum</summary>

![img_24.png](img_24.png)
</details>


<details >
 <summary style="font-size: medium; font-weight: bold">4. Minimum Subset Sum Difference</summary>

![img_25.png](img_25.png)
</details>


<details >
 <summary style="font-size: medium; font-weight: bold">5. Target Sum</summary>

![img_26.png](img_26.png)
</details>


### 2. Unbounded Knapsack
<details >
 <summary style="font-size: medium; font-weight: bold">1. Rod Cutting Problem</summary>

![Knapsack_17.jpg](images/Knapsack_17.jpg)
</details>


<details >
 <summary style="font-size: medium; font-weight: bold">2. Coin Change Maximum Number of Ways</summary>

![Knapsack_18.jpg](images/Knapsack_18.jpg)
</details>


<details >
 <summary style="font-size: medium; font-weight: bold">3. Coin Change Minimum Number of Ways</summary>

![Knapsack_19.jpg](images/Knapsack_19.jpg)
</details>

</details>
</details>






<details >
 <summary style="font-size: x-large; font-weight: bold">Longest Common Subsequence</summary>

<details >
 <summary style="font-size: large; font-weight: bold">Concept</summary>

![LongestCommonSubsequence_1.jpg](images/LongestCommonSubsequence_1.jpg)
![LongestCommonSubsequence_2.jpg](images/LongestCommonSubsequence_2.jpg)
![LongestCommonSubsequence_3.jpg](images/LongestCommonSubsequence_3.jpg)
</details>


<details >
 <summary style="font-size: large; font-weight: bold">Important Examples</summary>

<details >
 <summary style="font-size: medium; font-weight: bold">1. Longest Common Substring</summary>

![LongestCommonSubsequence_4.jpg](images/LongestCommonSubsequence_4.jpg)
</details>

<details >
 <summary style="font-size: medium; font-weight: bold">2. Printing Longest Common Subsequence</summary>

![LongestCommonSubsequence_5.jpg](images/LongestCommonSubsequence_5.jpg)
</details>

<details >
 <summary style="font-size: medium; font-weight: bold">3. Shortest Common Super Sequence</summary>

![img_27.png](img_27.png)
</details>

<details >
 <summary style="font-size: medium; font-weight: bold">4. Long Palindromic Subsequence</summary>

![img_28.png](img_28.png)
</details>


<details >
 <summary style="font-size: medium; font-weight: bold">5. Print Shortest Common Super Sequence</summary>

![LongestCommonSubsequence_7.jpg](images/LongestCommonSubsequence_7.jpg)
![img_29.png](img_29.png)
</details>


<details >
 <summary style="font-size: medium; font-weight: bold">7. Longest Repeating Subsequence</summary>

![LongestCommonSubsequence_9.jpg](images/LongestCommonSubsequence_9.jpg)
</details>


<details >
 <summary style="font-size: medium; font-weight: bold">8. Sequence Pattern Matching</summary>

![img_30.png](img_30.png)
</details>

<details >
 <summary style="font-size: medium; font-weight: bold">9. Minimum Number of Insertion in a String to make it a Palindrome</summary>

![LongestCommonSubsequence_11.jpg](images/LongestCommonSubsequence_11.jpg)
</details>

</details>

</details>
