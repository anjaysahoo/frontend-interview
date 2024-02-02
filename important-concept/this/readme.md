## `this`

![img.png](img.png)

Depends on where it is used

1. If it is used in browser, it will return a window object & if it is used in node, it will return a global object
![img_1.png](img_1.png)
![img_3.png](img_3.png)
In `use strict` mode `this` will be undefined in browser, so always tend to use `Window` or
`Global` directly
![img_9.png](img_9.png)
![img_4.png](img_4.png)

2. If it is used in a function, it will refer to an object that is calling it
![img_2.png](img_2.png)
![img_5.png](img_5.png)
![img_6.png](img_6.png)


### Most usecase found in 

1. Constructor
![img_7.png](img_7.png)


### Weird Caveat
1. 
![img_10.png](img_10.png)
In case of normal function `this` will be the object that is calling it

But in arrow function `this` will be undefined in `use strict` mode and
in non `use strict` mode it will be the global object

In arrow function it is basically based on an **enclosing object of execution context** in this example it is `global`


Referred Video: https://www.youtube.com/watch?v=YOlr79NaAtQ
