# Performance

![img.png](img.png)
![img_1.png](img_1.png)

Get lot of insights for performance from Cloudflare Radar: https://radar.cloudflare.com/quality


<details >
 <summary style="font-size: x-large; font-weight: bold">Performance Monitoring(Web Vitals)</summary>

https://web.dev/articles/vitals
![img_8.png](img_8.png)

`Interaction to Next Paint (INP)` was initially developed as an experimental metric to address the runtime performance issues present on the web more comprehensively than `First Input Delay (FID)`.

![img_4.png](img_4.png)
<details >
 <summary style="font-size: large; font-weight: bold">LCP(Largest Contentful Paint)</summary>

LCP reports the render time of the largest image or text block visible in the viewport, relative to when the user first navigated to the page.

![img_2.png](img_2.png)
![img_9.png](img_9.png)

In the first example, the Instagram logo is loaded relatively early and it remains the largest element even as other content is progressively shown. In the Google Search results page example, the largest element is a paragraph of text that is displayed before any of the images or logo finish loading. Since all the individual images are smaller than this paragraph, it remains the largest element throughout the load process.
</details>


<details >
 <summary style="font-size: large; font-weight: bold">CLS(Cumulative Layout Shift)</summary>

CLS is a measure of the largest burst of layout shift scores for every unexpected layout shift that occurs during the entire lifecycle of a page.

![img_6.png](img_6.png)

</details>



<details >
 <summary style="font-size: large; font-weight: bold">INP(Interaction to Next Paint)</summary>

INP is a metric that assesses a page's overall responsiveness to user interactions by observing the latency of all click, tap, and keyboard interactions that occur throughout the lifespan of a user's visit to a page. The final INP value is the longest interaction observed, ignoring outliers.

![WSmcjiQC4lyLxGoES4dd.gif](WSmcjiQC4lyLxGoES4dd.gif)

![img_5.png](img_5.png)

INP is the successor metric to First Input Delay (FID). While both are responsiveness metrics, FID only measured the input delay of the first interaction on a page. INP improves on FID by observing all interactions on a page, beginning from the input delay, to the time it takes to run event handlers, and finally up until the browser has painted the next frame.
</details>

Do this in browser using LightHouse
![img_7.png](img_7.png)

![img_10.png](img_10.png)
![img_11.png](img_11.png)
![img_12.png](img_12.png)
</details>





<details >
 <summary style="font-size: x-large; font-weight: bold">Performance Tools</summary>

### Real User Data Monitoring
1. [CRUX](https://developer.chrome.com/docs/crux)
2. [pagespeed.web.dev](https://pagespeed.web.dev/analysis/https-lensview-io/wn663h5be9?form_factor=mobile) (Free)
3. [requestmetrics.com](https://requestmetrics.com/)(Free)
4. [clarity.microsoft.com/](https://clarity.microsoft.com/)(Free)
4. NewRelic
5. Sentry
6. Google Analytics


### Simulated Data
1. [webpagetest.org](https://www.webpagetest.org/result/240712_BiDcDP_2W9/)
   1. ![video.gif](video.gif)


### Developer Mode 
1. LightHouse
   - Always used in Incognito mode, an installed extension might affect the result
   - Dock the dev tool section, as putting it in bottom or right side will affect screen size
   - Choose the right device (Mobile or Desktop) then start test
2. Network Tab
3. Performance Tab


</details>





<details >
 <summary style="font-size: x-large; font-weight: bold">Network Optimization</summary>

1. Critical Rendering Path
2. Minimize the number of HTTP requests
3. Async loading of JS: async / defer
4. Avoid Redirection
5. Resource Hinting
6. Fetch Priority
7. Early Hints
8. HTTP upgrade methods (http1.1 vs http2 vs http3)
9. Compression: brotli / gzip
10. HTTP caching: Cache Control
11. Caching using Service Worker

<details >
 <summary style="font-size: large; font-weight: bold">Critical Rendering Path</summary>

Go through the details how CRP works in [Networking section(How the web work -> CRP)](../networking/readme.md#disadvantage)
![img_14.png](img_14.png)

## _First packet is of 14KB_

- Above point is important as we can make our app such that all required bear minimum 
HTML, CSS & JS are bundle together whose size is below 14KB. This will allow our app
to show something to user very quickly then we can start putting other required files
in parallel.
- This might be straight forward in Vanilla JS project but framework also we have tools and plugin to achieve this
</details>


<details >
 <summary style="font-size: large; font-weight: bold">Minimize the number of HTTP requests</summary>

Challenges
- Connection Time(TCP, SSL): Each request we make has to go through the multiple connection like TCP, SSL etc which can take time and slow down our app
- Browser Limit per domain(6-10 max parallel calls can be made)

Solution
- Inline CSS
- Inline JS
- Base64 for image
- SVG for image

Here by applying above solution we trying to reduce network which can be costlier in terms of application performance

Example:

**Scenario-1:** 
- When we are loading our style is being loaded from file
- All the images are used as .png file

![img_15.png](img_15.png)
![img_16.png](img_16.png)

Here you can see how there are more network calls and because of this there quite gap between FCP & LCP


**Scenario-2:**
- When we insert the required CSS in head tag directly in `index.html`
- Replace all the images with SVG

![img_17.png](img_17.png)
![img_18.png](img_18.png)

Here we have only one network call and it is very fast. There is very little gap between FCP & LCP

We only need to add the required CSS, which is needed when the user first navigated to the page, and we have very fast LCP
</details>



<details >
 <summary style="font-size: large; font-weight: bold">Async loading of JS</summary>

For more details refer [HTML section](../1-html/readme.md)
![img_19.png](img_19.png)


```html
<!-- index.html -->
<head>
    <script src="index.js"></script>
</head>
<body>
...
</body>
```

```js
//index.js
function addListner() {
  document.querySelectorAll(".card").forEach((card) =>
    card.addEventListener("click", function () {
      alert("Hi");
    })
  );
}

// We will not get error even though JS file has ran before HTML loads
// because below line will add lister once window is loaded
window.onload = addListner;
```

**Scenario-1:**
Script tag with no special attributes

![img_20.png](img_20.png)


**Scenario-2:**
Script tag with `async` attribute

![img_21.png](img_21.png)


**Scenario-3:**
Script tag with `defer` attribute

![img_22.png](img_22.png)
</details>


<details >
 <summary style="font-size: large; font-weight: bold">Avoid Redirection</summary>

- Avoid redirection from http to https
- Use website https://hstspreload.org/ to register your domain. So that whenever we call our domain with http then this website takes care of redirection and our server never gets the https request

</details>



<details >
 <summary style="font-size: large; font-weight: bold">Resource Hinting</summary>

![img_23.png](img_23.png)


</details>

</details>




