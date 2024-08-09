<details >
 <summary style="font-size: small; font-weight: bold">01. Strings Differ by One Character (Okta SWE 2024)</summary>

###### 01

![img.png](img.png)

1. Time Complexity: O(n * n * m)

```js
function solution(arr){
    const len = arr.length;
    
    for(let i = 0; i < len - 1; i++){
        for(let j = i + 1; j < len; j++){
            if(isStringDiffer(arr[i], arr[j]))
                return true;
        }
    }
    
    return false;
}

function isStringDiffer(str1, str2){
    if(str1.length !== str2.length)
        return false;
    
    let isDifferFound = false;
    for(let i = 0; i < str1.length; i++){
        if(str1.charCodeAt(i) !== str2.charCodeAt(i)){
            if(isDifferFound)
                return false;
            isDifferFound = true;
        }
    }
    
    return isDifferFound;
}
```

2. Time Complexity: O(n * m)
```js
function solution(arr){
    const s = new Set();
    
    for(let str of arr){
        for(let i = 0; i < str.length; i++){
            const modifiedStr = str.substring(0, i) + '*' + str.substring(i+1);
            
            if(s.has(modifiedStr))
                return true;
                
            s.add(modifiedStr);
        }
    }
    
    return false;
}


console.log(solution(["abcd","acbd", "aacd"]));
console.log(solution(["ab","cd","yz"]));
console.log(solution(["abcd","cccc","abyd","abab"]));
```
https://leetcode.ca/2020-03-02-1554-Strings-Differ-by-One-Character/
</details>
