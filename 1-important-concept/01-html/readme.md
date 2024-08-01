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
</details>





<details >
 <summary style="font-size: large; font-weight: bold">Script Loading</summary>

Render-blocking resources can include scripts, stylesheets, and HTML imports.

![img.png](img.png)

**Case-1 & 6:** 
- The script starts executing as soon as they are encountered

**Case-2:**
- As soon as scripts are encountered, HTML parsing is stopped and
we load the script then starts executing

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



![img_1.png](img_1.png)
![img_2.png](img_2.png)


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
</details>


