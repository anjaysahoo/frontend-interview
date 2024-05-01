## Aria

https://css-tricks.com/why-how-and-when-to-use-semantic-html-and-aria/

_What is difference using nav tag instead of defining aria-role
ChatGPT?_

The `<nav>` element is a semantic HTML5 element used to define a section of navigation links on a webpage. It's used to mark up blocks of navigation links, such as menus, tables of contents, and indexes.

On the other hand, ARIA (Accessible Rich Internet Applications) attributes like role are used to enhance the accessibility of web content. The role attribute specifies the role of an element in the document structure. It can be used to indicate to assistive technologies, like screen readers, how an element should be interpreted.

Using the `<nav>` element is preferred over manually defining aria-role="navigation" for navigation sections because:

- **Semantic Meaning:** `<nav>` carries semantic meaning inherently. It clearly signifies to both humans and machines that the enclosed content represents navigation links.
- **Accessibility:** While ARIA roles can enhance accessibility, relying on semantic HTML elements like `<nav>` reduces the need for additional attributes and ensures better compatibility with assistive technologies.
- **Readability and Maintainability:** Semantic HTML improves code readability and maintainability. Using `<nav>` makes the code cleaner and more understandable compared to manually adding ARIA attributes.
In summary, while both methods can achieve similar results, using semantic HTML elements like `<nav>` is generally preferred because it promotes better accessibility, readability, and maintainability of the code.

```html
<nav>: Represents a section of navigation links.
Instead of aria-role="navigation".
<main>: Represents the main content of the document.
Instead of aria-role="main".
<article>: Represents an independent piece of content that is self-contained and can be distributed and reused independently.
Instead of aria-role="article".
<section>: Represents a generic section of a document or application.
Instead of aria-role="region" (when used for generic sections).
<aside>: Represents content tangentially related to the content around it, such as sidebars.
Instead of aria-role="complementary".
<header>: Represents introductory content, typically containing headings and/or navigational aids.
Instead of aria-role="banner" (when used for page headers).
<footer>: Represents a footer for its nearest sectioning content or sectioning root element.
Instead of aria-role="contentinfo".
<figure>: Represents self-contained content, typically with an optional caption, such as images or diagrams.
Instead of aria-role="figure".
<figcaption>: Represents the caption or legend for a figure element.
Instead of aria-role="caption".
<dialog>: Represents a dialog box or other interactive component.
Instead of aria-role="dialog".
<menu>: The <menu> HTML element is described in the HTML 
    specification as a semantic alternative to <ul>, 
    but treated by browsers (and exposed through the accessibility tree) 
    as no different than <ul>. It represents an unordered list of items
   (which are represented by <li> elements).
```
