## Event Listeners

Understand whole concept in just 18 min through this video: https://www.youtube.com/watch?v=XF1_MlZ5l6M

Article for same: https://blog.webdevsimplified.com/2022-01/event-listeners/

### Event Bubbling & Capture
```html
<div class="parent">
  <div class="child"></div>
</div>
```
```javascript
parent.addEventListener("click", () => {
  console.log("Parent Bubble")
})

parent.addEventListener(
  "click",
  () => {
    console.log("Parent Capture")
  },
  { capture: true }
)

child.addEventListener("click", () => {
  console.log("Child Bubble")
})

child.addEventListener(
  "click",
  () => {
    console.log("Child Capture")
  },
  { capture: true }
)
```

With the above code if we click on the child it will log out the following.

```javascript
Parent Capture
Child Capture
Child Bubble
Parent Bubble
```

As you can see all the capture event listeners we created 
fire first and then the bubble event listeners fire next.

### Stopping Event Propagation

**stopPropagation()**

```javascript
parent.addEventListener(
    "click",
    e => {
        console.log("Parent Capture 1")
        e.stopPropagation()
    },
    { capture: true }
)

parent.addEventListener("click",() => {
    console.log("Parent Capture 2")
}, {
    capture: true
})

child.addEventListener("click", () => {
    console.log("Child Bubble")
})
```

If you click on child or parent output will be
```javascript
Parent Capture 1
Parent Capture 2
```

**stopImmediatePropagation()**
```javascript
parent.addEventListener(
  "click",
  e => {
    console.log("Parent Capture 1")
    e.stopImmediatePropagation()
  },
  { capture: true }
)

parent.addEventListener(
  "click",
  e => {
    console.log("Parent Capture 2")
  },
  { capture: true }
)

child.addEventListener("click", () => {
  console.log("Child Bubble")
})
```

If you click on child or parent output will be
```javascript
Parent Capture 1
```

Note: It is important to note that the event listeners 
on the same element will trigger in the order they 
are defined so if you want to stop other event listeners 
from firing with this method they must be defined after 
the listener that stops propagation.

Bubble Note: One important thing to know about event bubbling is that not all events bubble up. 
Events like the focus event which fire when an element receives focus do not bubble up. 
Generally events that do not bubble make sense not to bubble since they only pertain to 
the individual element the event fires on such as the focus event.


### removeEventListener()

```javascript
button.addEventListener("click", sayHi)
button.removeEventListener("click", sayHi)

function sayHi() {
  console.log("Hi")
}
```

### Running Events Once
```javascript
button.addEventListener(
  "click",
  () => {
    console.log("Clicked")
  },
  { once: true }
)
```

### Abortable Event Listeners
If you wanted to create an event listener that works 
until a certain condition is met this may be the 
perfect option for you.

```javascript
let count = 0
const controller = new AbortController()

button.addEventListener(
  "click",
  () => {
    count++
    console.log(count)
    if (count >= 3) {
      controller.abort()
    }
  },
  { signal: controller.signal }
)
```

### Event Delegation

```javascript
const buttons = document.querySelectorAll("button")
buttons.forEach(button => {
  button.addEventListener("click", () => {
    console.log("Clicked Button")
  })
})

const newButton = document.createElement("button")
document.body.append(newButton)
```

This new button does NOT have any click event listener 
attached to it since it was added to the page after 
our event listeners were added.

```javascript
document.addEventListener("click", e => {
  if (e.target.matches("button")) {
    console.log("Clicked Button")
  }
})

const newButton = document.createElement("button")
document.body.append(newButton)
```

```javascript
function addGlobalEventListener(type, selector, callback, options) {
  document.addEventListener(
    type,
    e => {
      if (e.target.matches(selector)) callback(e)
    },
    options
  )
}

addGlobalEventListener(
  "click",
  ".btn",
  () => {
    console.log("Clicked Button")
  },
  { once: true }
)
```

For Interview Questions: https://youtu.be/rS_4YfbEo2U?si=zw-vPyr8lzchUFR9
