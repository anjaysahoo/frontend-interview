## React Hooks

<details >
 <summary style="font-size: x-large; font-weight: bold">useMemo/useCallback</summary>

## useMemo

### Usecase-1

Very common problem in React since all the 
component logic is re-computed every time the 
component renders

```jsx
const result = useMemo(() => {
    /** slowFunction take lot of time 
     * to execute **/
  return slowFunction(a)
}, [a])
```
As long as a stays the same the slowFunction will 
not be re-run and instead the cached value will be
used.

### Usecase-2(Referential Equality)

If you are unfamiliar with referential equality it essentially defines whether or not the references of two values are 
the same. For example {} === {} is false because it is checking referential equality. While both of the objects are 
empty, they reference different places in memory where the object is stored.

This referential equality is important when it comes to dependency arrays, for example in `useEffect`.
```jsx
function Component({ param1, param2 }) {
  const params = { param1, param2, param3: 5 }

  useEffect(() => {
    callApi(params)
  }, [params])
}
```

At first glance it may seem this `useEffect` works properly, but since the `params` object is created as a 
new object each render this is actually going to cause the effect to run every render since the reference of 
`params` changes each render. `useMemo` can fix this, though.

```jsx
function Component({ param1, param2 }) {
  const params = useMemo(() => {
    return { param1, param2, param3: 5 }
  }, [param1, param2])

  useEffect(() => {
    callApi(params)
  }, [params])
}
```

Now if `param1` and `param2` do not change the `params` variable will be set to the cached version of 
`params` which means the reference for `params` will only change if `param1`, or `param2` change. 
This referential equality is really useful when comparing objects in dependency arrays,
but if you need to use a function in a dependency array you can use the `useCallback` hook.

Referred Video: https://youtu.be/_AyFP5s69N4?si=V6u1dez7i-UGfCsl



## useCallback

`useCallback` works nearly identically to `useMemo` since it will cache a result based on an array of dependencies, 
but `useCallback` is used **specifically for caching functions instead of caching values.**

```jsx
const handleReset = useCallback(() => {
  return doSomething(a, b)
}, [a, b])
```

Watch this video to understand in 8min: https://youtu.be/_AyFP5s69N4?si=GjVZrUXgoJgi_S9-

Referred article for both topic: https://blog.webdevsimplified.com/2020-05/memoization-in-react/

</details>
