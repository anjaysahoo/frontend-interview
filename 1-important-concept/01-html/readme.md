<details >
 <summary style="font-size: large; font-weight: bold">HTML5</summary>

![img_3.png](img_3.png)

1. Tag
```html
<title>
```

2. Element
```html
<title>Hello</title>
```

3. Attribute
```html
<title id="head">Hello</title>
```

1. New HTML Elements better for Semantic

![img_4.png](img_4.png)

2. Native video support
![img_5.png](img_5.png)

https://www.greatfrontend.com/questions/quiz/html5-as-an-open-web-platform-building-blocks?format=quiz

---
</details>





<details >
 <summary style="font-size: large; font-weight: bold">Script Loading</summary>

Render-blocking resources can include scripts, stylesheets, and HTML imports.

![img_6.png](img_6.png)
![img.png](img.png)

**Case-1 & 6:** 
- The script starts executing as soon as they are encountered

**Case-2:**
- As soon as scripts are encountered, HTML parsing is stopped and
we load the script then starts executing. JS file are Parser blocking

**Case-3(End Of Body):**
- Once all HTML is parsed, scripts load and execute

**Case-4(Defer):**
- Scripts load parallelly, and as soon as HTML parsing is done we execute the 
script
- It maintains the order of execution of scripts as it is declared, hence 
good for a situation when we have interdependency of a script on each other

**Case-5(Async):**
- Scripts loads parallelly and as soon as loading complete it start 
executing and stop HTML parsing.
- Sequence of script execution is not guarantee, hence it is useful for
loading scripts which has no dependency like Google Analytics

**Note:** Even though `async` and `defer` help to make script downloading asynchronous, the scripts are still eventually executed on the main thread. If these scripts are computationally intensive, it can result in laggy/frozen UI. [Partytown](https://partytown.builder.io/) is a library that helps relocate script executions into a [web worker](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API) and off the [main thread](https://developer.mozilla.org/en-US/docs/Glossary/Main_thread), which is great for third-party scripts where you do not have control over the code.

https://www.greatfrontend.com/questions/quiz/describe-the-difference-between-script-async-and-script-defer?practice=practice&tab=quiz

![img_1.png](img_1.png)
![img_2.png](img_2.png)


<details >
 <summary style="font-size: medium; font-weight: bold">Why is it generally a good idea to position CSS link between head and JS scripts just before body?</summary>

https://www.greatfrontend.com/questions/quiz/css-link-between-head-and-js-script-just-before-body?practice=practice&tab=quiz

In a nutshell, such a placement of CSS `<link>`s and JavaScript `<script>`s allows for faster rendering of the page and better overall performance.

### Placing `<link>`s in `<head>`

Putting `<link>`s in `<head>` is part of the proper specification in building an optimized website. When a page first loads, HTML and CSS are being parsed simultaneously; HTML creates the DOM (Document Object Model) and CSS creates the CSSOM (CSS Object Model). Both are needed to create the visuals in a website, allowing for a quick "first meaningful paint" timing. Placing CSS `<link>`s in the `<head>` ensures that the stylesheets are loaded and ready for use when the browser starts rendering the page.


### Placing `<script>`s just before `</body>`

`<script>` tags block HTML parsing while they are being downloaded and executed which can slow down the display of your page. Placing the `<script>`s at the bottom will allow the HTML to be parsed and displayed to the user first.

An exception for positioning of `<script>`s at the bottom is when your script contains `document.write()`, but these days it's not a good practice to use `document.write()`. Also, placing `<script>`s at the bottom means that the browser cannot start downloading the scripts until the entire document is parsed. This ensures your code that needs to manipulate DOM elements will not throw an error and halt the entire script. If you need to put `<script>`s in the `<head>`, use the `defer` attribute, which will achieve the same effect of running the script only after the HTML is parsed but the browser can kick off the network request earlier to download the script.

Keep in mind that putting scripts just before the closing `</body>` tag will create the illusion that the page loads faster on an empty cache (since the scripts won't block downloading the rest of the document). However, if you have some code you want to run during page load, it will only start executing after the entire page has loaded. If you put those scripts in the `<head>` tag, they would start executing before - so on a primed cache the page would actually appear to load faster.

### `<head>` and `<body>` tags are now optional

As per the HTML5 specification, certain HTML tags like `<head>` and `<body>` are optional. Google's style guide even recommends removing them to save bytes. However, this practice is still not widely adopted and the performance gain is likely to be minimal and for most sites it's not likely going to matter.

---
</details>


---
</details>



<details >
 <summary style="font-size: large; font-weight: bold">Block and Inline Elements</summary>

An inline element does not start on a new line.

An inline element only takes up as much width as necessary.

```html
    <a>
    <button>
    <img>
    <input>
    <script>
    <select>
    <textarea>
    <label>
    <abbr>
    <acronym>
    <b>
    <bdo>
    <big>
    <br>
    <cite>
    <code>
    <dfn>
    <em>
    <i>
    <kbd><map><object><output><q><samp><small><span><strong><sub><sup><time><tt><var>
```

**Note:** An `inline element` **cannot** contain a `block-level` element!

---
</details>


