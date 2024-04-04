1. **Correct way to update array if we are using existing value ?**
![img_1.png](img_1.png)

When multiple states are parallely then we might get stale date we don't do
things like this.
Resource: https://www.udemy.com/course/nextjs-react-the-complete-guide/learn/lecture/41161580#questions

2. **Form**
![img_2.png](img_2.png)

3. Storing input box value
![img_3.png](img_3.png)

4. Post data to backend
![img_4.png](img_4.png)

5. Correct way to fetch data
![img_5.png](img_5.png)

* We should not use `fetchPosts()` directly without `useEffect` since end up in infinite loop
as `fetchPosts()` will update state and hence triggering `PostsList` component
to re-render which will happen in loop
* Also we can't turn `useEffect` function to `async` function, so we create `fetchPosts` function
instead

6. Delay function
![img_6.png](img_6.png)

7. Router
![img_7.png](img_7.png)

8. Better `props` syntax for many variable
![img_8.png](img_8.png)
![img_9.png](img_9.png)

9. Forwarding props
![img_10.png](img_10.png)
![img_11.png](img_11.png)

10. Multiple JSX slots
![img_12.png](img_12.png)
![img_13.png](img_13.png)
Resource: https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/39659754#overview

11. Right way to update 2-D array
![img_14.png](img_14.png)
