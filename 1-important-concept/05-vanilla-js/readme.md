<details >
 <summary style="font-size: x-large; font-weight: bold">DOM Traversal</summary>

### 1. `getElementById`

```html
<div class="grandparent" id="grandparent-id">
        <div class="parent">
            <div class="child"></div>
            <div class="child"></div>
        </div>
        <div class="parent">
            <div class="child"></div>
            <div class="child"></div>
        </div>
    </div>
```

```javascript
const grandparent = document.getElementById("grandparent-id");

const changeColor = (element) => {
    element.style.backgroundColor = "grey";
}

changeColor(grandparent);

```


### 2. `getElementsByClassName`

```javascript
const parents = Array.from(document.getElementsByClassName("parent"));

parents.forEach(changeColor);
```

### 3. `querySelector`

```javascript
const grandparent = document.querySelector("#grandparent-id");
const grandparent = document.querySelector(".grandparent");
changeColor(grandparent);
```
If want to know all selectors we can use refer "CSS Selector Cheat Sheet - Dark" pdf present in this repo

By defult it will select first element
```javascript
const parent = document.querySelector(".parent");
```

To select all the elements
```javascript
const parents = document.querySelectorAll(".parent");
```

#### i. Selecting Children

```javascript
const grandparent = document.querySelector(".grandparent");
const parents = Array.from(grandparent.children);

parents.forEach(changeColor)
```

```javascript
const parentOne = parents[0];
const childerns = parentOne.children;

changeColor(childerns[0]);
```

#### ii. Selecting Parent

```javascript
const childOne = document.querySelector("#child-one");

const parent = childOne.parentElement;
const grandparent = parent.parentElement;

changeColor(grandparent)
```

Referred Video: https://www.youtube.com/watch?v=v7rSSy8CaYE&t=334s

</details>








<details >
 <summary style="font-size: x-large; font-weight: bold">DOM Manipulation</summary>


### 1. Modifying Element

```javascript
const body = document.body;

const div = document.createElement('div');
div.innerText = 'Hello World';

body.append(div);
```

### 2. `innerText` vs `textContent`
![img_1.png](dom-manipulation/img_1.png)
![img.png](dom-manipulation/img.png)


### 3. Inserting HTML in DOM
```javascript
const body = document.body;

const div = document.createElement('div');

// 1st Method: Unsafe
// div.innerHTML = "<strong>Hello World</strong>";

// 2nd Method: Safe
const strong = document.createElement('strong');
strong.innerText = 'Hello World';
div.append(strong);

body.append(div);
```


### 4. Removing HTML from DOM

```html

<body>
<div>
    <span id="hello">Hello</span>
    <span id="bye">Bye</span>
</div>

<script src="index.js"></script>
</body>
```

```javascript
const body = document.body;
const div = document.querySelector('div');
const spanHello = document.querySelector('#hello');
const spanBye = document.querySelector('#bye');

spanBye.remove();
```


### 5. Fetching, Adding & Removing Attributes
```javascript
console.log(spanHello.getAttribute('id'));
spanHello.setAttribute('id', "span-hello-id");
spanHello.removeAttribute('id')


// 2nd Method
spanHello.id = 'span-hello-id';
```

### 6. Data Attributes

```html
<div
  id="test-div"
  data-first-name="Kyle"
  data-last-name="Cook"
  data-active
></div>
```

#### i. Reading
```javascript
const div = document.getElementById("test-div")

console.log(div.dataset)
```

Our dataset looks like this.
```json
{
  "active": "",
  "firstName": "Kyle",
  "lastName": "Cook"
}
```

#### ii. Writing
```javascript
const div = document.getElementById("test-div")

div.dataset.test = "Hi"
console.log(div.dataset.test)
// Hi
```

```html
<div
  id="test-div"
  data-test="Hi"
  data-first-name="Kyle"
  data-last-name="Cook"
  data-active
></div>
```

#### iii. Delete
```javascript
const div = document.getElementById("test-div")

delete div.dataset.active
console.log(div.dataset.active)
// undefined
```

```html
<div id="test-div" data-first-name="Sally" data-last-name="Cook"></div>
```

Referred article: https://blog.webdevsimplified.com/2020-10/javascript-data-attributes/


### 7. `classList`

#### i. Remove & Add
```javascript
element.classList.add("new-class", "another-class")
console.log(element.classList.value)
// new-class another-class

element.classList.remove("another-class")
console.log(element.classList.value)
// new-class
```

#### ii. Contains
```javascript
console.log(element.classList.contains("new-class"))
// false

element.classList.add("new-class")
console.log(element.classList.contains("new-class"))
// true
```

#### iii. Toggle
This method lets you toggle a class on/off depending on if the class is already on the element.

```javascript
element.classList.toggle("new-class")
```

The above is the same as the below.
```javascript
if (element.classList.contains("new-class")) {
  element.classList.remove("new-class")
} else {
  element.classList.add("new-class")
}
```

Referred article: https://blog.webdevsimplified.com/2020-11/class-list/


### 8. Modifying Element Style

Convert property name to camel case
```javascript
spanHi.style.backgroundColor = "red";
```

Referred Video: https://www.youtube.com/watch?v=y17RuWkWdn8&t=1s


### Good Example of DOM Manipulation

<details >
 <summary style="font-size: medium; font-weight: bold">How can you add a span element inside a div element using web APIs?</summary>

```js
// Get a reference to the div element
const myDiv = document.getElementById('myDiv');

// Create a new span element
const newSpan = document.createElement('span');

// Set attributes (optional)
newSpan.id = 'mySpan';
newSpan.className = 'mySpanClass';

// Add text content (optional)
newSpan.textContent = 'This is some text';

// Append the span to the div
myDiv.appendChild(newSpan);
```
</details>



<details >
 <summary style="font-size: medium; font-weight: bold">Todo List</summary>

![img_2.png](dom-manipulation/img_2.png)

```html
<!doctype html>
<html lang="">
<head>
    <meta charset="UTF-8"/>
    <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"/>
    <title></title>
</head>
<body>
<div>
    <h1>Todo List</h1>
    <div>
        <input
                aria-label="Add new task"
                type="text"
                placeholder="Add your task"/>
        <div>
            <button id="submit">Submit</button>
        </div>
    </div>
    <ul>
        <li>
            <span>Walk the dog</span>
            <button>Delete</button>
        </li>
        <li>
            <span>Water the plants</span>
            <button>Delete</button>
        </li>
        <li>
            <span>Wash the dishes</span>
            <button>Delete</button>
        </li>
    </ul>
</div>
<script src="src/index.js"></script>
</body>
</html>
```

```javascript
import './styles.css';

(() => {
  // Retain a reference to the elements which persist
  // throughout usage of the app.
  const $inputEl = document.querySelector('input');
  const $submitButtonEl = document.querySelector('#submit');
  const $todoListEl = document.querySelector('ul');

  function addTask(label) {
    // Create the DOM elements for the new task.
    const $newTaskElement = document.createElement('li');

    const $span = document.createElement('span');
    $newTaskElement.appendChild($span);
    // Using Node.textContent here instead of Element.innerHTML
    // to prevent XSS (Cross Site Scripting).
    $span.textContent = label;

    const $btn = document.createElement('button');
    $btn.textContent = 'Delete';
    $newTaskElement.appendChild($btn);

    // Add the new task to the list.
    $todoListEl.append($newTaskElement);
  }

  function deleteTask($itemEl) {
    // Remove the task from the list.
    $itemEl.parentNode.removeChild($itemEl);
  }

  $submitButtonEl.addEventListener('click', () => {
    addTask($inputEl.value);
    // Reset the input so that new tasks can be added.
    $inputEl.value = '';
  });

  // Add a listener to the list instead of individual tasks.
  // This is called event delegation and the benefit is that
  // the Delete button of newly-added tasks will also respond
  // to clicks without you having to manually add event listeners
  // to them. You also don't have to remove any event listeners
  // when the task is removed.
  $todoListEl.addEventListener('click', (event) => {
    // Check that the button is being clicked and not something
    // else (e.g. the task label).
    if (event.target.tagName === 'BUTTON') {
      deleteTask(event.target.parentNode);
    }
  });
})();

```

Referred from: https://www.greatfrontend.com/questions/user-interface/todo-list/vanilla
</details>



<details >
 <summary style="font-size: medium; font-weight: bold">Signup Form</summary>

![img.png](img.png)


```html
//index.html

<!doctype html>
<html>
<head>
    <meta charset="UTF-8" />
    <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0" />
</head>
<body>
<form>
    <div>
        <label for="username-input">Username</label>
        <input
                id="username-input"
                name="username"
                required
                type="text"
                pattern="^[a-zA-Z0-9]+$"
                minlength="4" />
    </div>
    <div>
        <label for="email-input">Email</label>
        <input
                id="email-input"
                name="email"
                required
                type="email" />
    </div>
    <div>
        <label for="password-input">Password</label>
        <input
                id="password-input"
                name="password"
                required
                type="password"
                minlength="6" />
    </div>
    <div>
        <label for="password-confirm-input">
            Confirm Password
        </label>
        <input
                id="password-confirm-input"
                name="password_confirm"
                required
                type="password"
                minlength="6"
                aria-describedby="password-mismatch-error" />
        <div
                class="error hidden"
                id="password-mismatch-error">
            The passwords do not match
        </div>
    </div>
    <div>
        <button type="submit">Sign Up</button>
    </div>
</form>
<script src="src/index.js"></script>
</body>
</html>
```


```js
//index.js

import './styles.css';

/**
 * @param {string} username
 * @param {string} email
 * @param {string} password
 * @param {string} passwordConfirm
 */
async function submitForm(
    username,
    email,
    password,
    passwordConfirm,
) {
    try {
        const response = await fetch(
            'https://www.greatfrontend.com/api/questions/sign-up',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username,
                    email,
                    password,
                    password_confirm: passwordConfirm,
                }),
            },
        );

        const { message } = await response.json();
        alert(message);
    } catch (_) {
        alert('Error submitting form!');
    }
}

(() => {
    const $form = document.querySelector('form');
    const $passwordConfirmInput = document.getElementById(
        'password-confirm-input',
    );
    const $passwordMismatchError = document.getElementById(
        'password-mismatch-error',
    );

    $form.addEventListener('submit', async (event) => {
        event.preventDefault();
        // Reset the password confirm field.
        $passwordConfirmInput.removeAttribute('aria-invalid');
        $passwordMismatchError.classList.add('hidden');

        // Construct a FormData object based on form values.
        const formData = new FormData($form);
        const password = formData.get('password');
        const passwordConfirm = formData.get(
            'password_confirm',
        );

        // The only fields we cannot leverage the browser to validate
        // is the password confirmation, so we use JavaScript to achieve that.
        if (password !== passwordConfirm) {
            $passwordConfirmInput.setAttribute(
                'aria-invalid',
                'true',
            );
            $passwordMismatchError.classList.remove('hidden');
            return;
        }

        await submitForm(
            formData.get('username'),
            formData.get('email'),
            formData.get('password'),
            formData.get('password_confirm'),
        );
    });
})();
```

Referred from: https://www.greatfrontend.com/questions/user-interface/signup-form/solution
</details>

</details>







<details >
 <summary style="font-size: x-large; font-weight: bold">Intersection Observer</summary>

### Usecase
1. Lazy loading
2. Infinite scroll


#### Basic intersection observer code

```javascript
const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            entry.target.classList.toggle('show', entry.isIntersecting);

            /** unobserve the element once it become visible **/
            if(entry.isIntersecting) observer.unobserve(entry.target);
        })
    },
    {
        threshold: 1
    }
)


const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    observer.observe(card);
})
```


#### Code for Infinite scroll
```javascript
/**
 * This function replicate like calling api to load more items to list
 */
const loadNewCards = () => {
    for(let i = 0; i < 10; i++){
        const cardContainer = document.querySelector(".card-container");
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerText = "New card";
        observer.observe(card);
        cardContainer.append(card);
    }
}


const lastCardObserver = new IntersectionObserver(
    entries => {
        const lastCard = entries[0];

        if(!lastCard.isIntersecting) return;

        /** You make the network call here for infinite scrolling **/
        loadNewCards();

        /*** Unobserve the last card once it become visible ***/
        lastCardObserver.unobserve(lastCard.target);

        /*** Observe the new last card ***/
        const newLastCard = document.querySelector(".card:last-child");
        lastCardObserver.observe(newLastCard);
    },
    {
        rootMargin: "100px" // During network request you want to load card before 100px of the last card
    }
)

lastCardObserver.observe(document.querySelector(".card:last-child"));
```

Referred Video: https://www.youtube.com/watch?v=2IbRtjez6ag

</details>
