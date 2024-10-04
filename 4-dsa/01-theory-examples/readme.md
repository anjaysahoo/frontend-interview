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
</details>


<details >
 <summary style="font-size: medium; font-weight: bold">5. Reverse a Stack</summary>

![Recursion_9.jpg](images/Recursion_9.jpg)
![Recursion_10.jpg](images/Recursion_10.jpg)
</details>


<details >
 <summary style="font-size: medium; font-weight: bold">6. Kth Symbol in Grammar</summary>

![Recursion_11.jpg](images/Recursion_11.jpg)
</details>


<details >
 <summary style="font-size: medium; font-weight: bold">7. Tower of Hanoi</summary>

![Recursion_12.jpg](images/Recursion_12.jpg)
</details>


<details >
 <summary style="font-size: medium; font-weight: bold">8. Print Subsets / Print Powersets</summary>

![Recursion_13.jpg](images/Recursion_13.jpg)
</details>


<details >
 <summary style="font-size: medium; font-weight: bold">9. Print Unique Subsets & Variations</summary>

![Recursion_14.jpg](images/Recursion_14.jpg)
</details>


<details >
 <summary style="font-size: medium; font-weight: bold">10. Permutation with Spaces</summary>

![Recursion_15.jpg](images/Recursion_15.jpg)
![Recursion_16.jpg](images/Recursion_16.jpg)
</details>


<details >
 <summary style="font-size: medium; font-weight: bold">11. Permutation with Case Change</summary>

![Recursion_17.jpg](images/Recursion_17.jpg)
</details>


<details >
 <summary style="font-size: medium; font-weight: bold">12. Letter Case Permutation</summary>

![Recursion_18.jpg](images/Recursion_18.jpg)
![Recursion_19.jpg](images/Recursion_19.jpg)
</details>


<details >
 <summary style="font-size: medium; font-weight: bold">13. Generate All Balanced Parenthesis</summary>

![Recursion_20.jpg](images/Recursion_20.jpg)
![Recursion_21.jpg](images/Recursion_21.jpg)

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
