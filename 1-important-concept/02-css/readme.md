### `height` & `width`

- **Thumb rule** - Always set height/width of parent container first only when required, 
first always try to solve using whatever default html is providing.

- **Overflow** - After first rule check where you need to set `height` / `width`, use 
things like % instead of unit then use `overflow: auto`. In case of long word don't use 
`overflow` instead use things like `word-break`

A very good example is `product-chat` app here: https://github.com/anjaysahoo/mini-apps/tree/master/product-chat

### `<img/>`

- For different image size to be shown consistently of uniform size use things like `min-width`
- Read this for optimize image loading: https://www.builder.io/blog/fast-images

<details >
 <summary style="font-size: large; font-weight: bold">CSS3</summary>

![img.png](img.png)

- Rounded Corners and Gradients. When CSS was released, developers used design images to create rounded corners with different gradients and structures
- Pseudo-classes. CSS supports pseudo-classes that let developers define a particular state of an HTML element. For example, developers can use the pseudo-class to highlight the links on a web page that a user has already clicked on or style an HTML element when the user's mouse hovers over it.
![img_1.png](img_1.png)
- https://www.simplilearn.com/difference-between-css-and-css3-article#:~:text=CSS3%20features%20the%20Selector%20concept,be%20applied%20to%20CSS%20styles.
</details>
