# Performance

![img.png](images/img.png)
![img_1.png](images/img_1.png)

Get lot of insights for performance from Cloudflare Radar: https://radar.cloudflare.com/quality


<details >
 <summary style="font-size: x-large; font-weight: bold">Performance Monitoring(Web Vitals)</summary>

https://web.dev/articles/vitals
![img_8.png](images/img_8.png)

`Interaction to Next Paint (INP)` was initially developed as an experimental metric to address the runtime performance issues present on the web more comprehensively than `First Input Delay (FID)`.

![img_4.png](images/img_4.png)
<details >
 <summary style="font-size: large; font-weight: bold">LCP(Largest Contentful Paint)</summary>

LCP reports the render time of the largest image or text block visible in the viewport, relative to when the user first navigated to the page.

![img_2.png](images/img_2.png)
![img_9.png](images/img_9.png)

In the first example, the Instagram logo is loaded relatively early and it remains the largest element even as other content is progressively shown. In the Google Search results page example, the largest element is a paragraph of text that is displayed before any of the images or logo finish loading. Since all the individual images are smaller than this paragraph, it remains the largest element throughout the load process.
</details>


<details >
 <summary style="font-size: large; font-weight: bold">CLS(Cumulative Layout Shift)</summary>

CLS is a measure of the largest burst of layout shift scores for every unexpected layout shift that occurs during the entire lifecycle of a page.

![img_6.png](images/img_6.png)

</details>



<details >
 <summary style="font-size: large; font-weight: bold">INP(Interaction to Next Paint)</summary>

INP is a metric that assesses a page's overall responsiveness to user interactions by observing the latency of all click, tap, and keyboard interactions that occur throughout the lifespan of a user's visit to a page. The final INP value is the longest interaction observed, ignoring outliers.

![WSmcjiQC4lyLxGoES4dd.gif](images/WSmcjiQC4lyLxGoES4dd.gif)

![img_5.png](images/img_5.png)

INP is the successor metric to First Input Delay (FID). While both are responsiveness metrics, FID only measured the input delay of the first interaction on a page. INP improves on FID by observing all interactions on a page, beginning from the input delay, to the time it takes to run event handlers, and finally up until the browser has painted the next frame.
</details>

Do this in browser using LightHouse
![img_7.png](images/img_7.png)

![img_10.png](images/img_10.png)
![img_11.png](images/img_11.png)
![img_12.png](images/img_12.png)
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
   1. ![video.gif](images/video.gif)


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
6. Early Hints
7. HTTP upgrade methods (http1.1 vs http2 vs http3)
8. Compression: brotli / gzip 
9. HTTP caching: Cache Control 
10. Caching using Service Worker

<details >
 <summary style="font-size: large; font-weight: bold">Critical Rendering Path</summary>

Go through the details how CRP works in [Networking section(How the web work -> CRP)](../09-networking/readme.md#disadvantage)
![img_14.png](images/img_14.png)

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

![img_15.png](images/img_15.png)
![img_16.png](images/img_16.png)

Here you can see how there are more network calls and because of this there quite gap between FCP & LCP


**Scenario-2:**
- When we insert the required CSS in head tag directly in `index.html`
- Replace all the images with SVG

![img_17.png](images/img_17.png)
![img_18.png](images/img_18.png)

Here we have only one network call and it is very fast. There is very little gap between FCP & LCP

We only need to add the required CSS, which is needed when the user first navigated to the page, and we have very fast LCP
</details>



<details >
 <summary style="font-size: large; font-weight: bold">Async loading of JS</summary>

For more details refer [HTML section](../01-html/readme.md)
![img_19.png](images/img_19.png)


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

![img_20.png](images/img_20.png)


**Scenario-2:**
Script tag with `async` attribute

![img_21.png](images/img_21.png)


**Scenario-3:**
Script tag with `defer` attribute

![img_22.png](images/img_22.png)
</details>


<details >
 <summary style="font-size: large; font-weight: bold">Avoid Redirection</summary>

- Avoid redirection from http to https
- Use website https://hstspreload.org/ to register your domain. So that whenever we call our domain with http then this website takes care of redirection and our server never gets the https request

</details>



<details >
 <summary style="font-size: large; font-weight: bold">Resource Hinting</summary>

![img_23.png](images/img_23.png)
![img_24.png](images/img_24.png)
![img_25.png](images/img_25.png)


<details >
 <summary style="font-size: medium; font-weight: bold">Preconnect</summary>

The `preconnect` hint is used to establish a connection to another origin from where you are fetching critical resources. For example, you may be hosting your images or assets on a CDN or other cross-origin:

```html
<head>
   <link rel="preconnect" href="https://cdn.glitch.global" /<
</head>
```

![img_27.png](images/img_27.png)
![img_26.png](images/img_26.png)
https://learn-performance-resource-hints.glitch.me/1

A common use case for preconnect is Google Fonts.

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
```
The crossorigin attribute is used to indicate whether a resource must be fetched using Cross-Origin Resource Sharing (CORS). When using the preconnect hint, if the resource being downloaded from the origin uses CORS—such as font files—then you need to add the crossorigin attribute to the preconnect hint.

**Note:** If you omit the `crossorigin` attribute, the browser opens a new connection when it downloads the font files, and doesn't reuse the connection opened with the `preconnect` hints.

https://web.dev/learn/performance/resource-hints?continue=https%3A%2F%2Fweb.dev%2Flearn%2Fperformance%23article-https%3A%2F%2Fweb.dev%2Flearn%2Fperformance%2Fresource-hints#preconnect
</details>


<details >
 <summary style="font-size: medium; font-weight: bold">dns-prefetch</summary>

While opening connections to cross-origin servers early can significantly improve initial page load time, it may not be either reasonable or possible to establish connections to many cross-origin servers at once. If you're concerned that you may be overusing preconnect, a much less costly resource hint is the dns-prefetch hint.

Per its name, dns-prefetch doesn't establish a connection to a cross-origin server, but rather just performs the DNS lookup for it ahead of time. A DNS lookup occurs when a domain name is resolved to its underlying IP address. While layers of DNS caches at the device and network levels help to make this a generally fast process, it still takes some amount of time.

```html
<link rel="dns-prefetch" href="https://fonts.googleapis.com">
<link rel="dns-prefetch" href="https://fonts.gstatic.com">
```
![img_28.png](images/img_28.png)
DNS lookups are fairly inexpensive, and because of their relatively small cost, they may be a more appropriate tool in some cases than a preconnect. In particular, it may be a desirable resource hint to use in cases of links that navigate to other websites that you think the user is likely to follow. dnstradamus is one such tool that does this automatically using JavaScript, and uses the Intersection Observer API to inject dns-prefetch hints into the current page's HTML when links to other websites are scrolled into the user's viewport.

https://web.dev/learn/performance/resource-hints?continue=https%3A%2F%2Fweb.dev%2Flearn%2Fperformance%23article-https%3A%2F%2Fweb.dev%2Flearn%2Fperformance%2Fresource-hints#dns-prefetch
</details>


<details >
 <summary style="font-size: medium; font-weight: bold">Preload</summary>

The `preload` resource hint instructs the browser to initiate a request for a resource. This is helpful when a critical resource is not immediately discoverable, for example a `background-image` URL.

This demo uses uses CSS `background-image` to create the image grid below, as opposed to `img` elements. To download the first image quicker, the page includes a `preload` hint for the first image resource.


```html
<link rel="preload"
      href="https://cdn.glitch.global/db01a8e4-9230-4c5c-977d-85d0e0c3e74c/image-1.jpg?v=1669198400523"
      as="image" />
```

![img_29.png](images/img_29.png)
![img_30.png](images/img_30.png)
https://learn-performance-resource-hints.glitch.me/3

### Usecase👇🏻


`preload` directives should be limited to late-discovered critical resources. The most common use cases are font files, CSS files fetched through `@import` declarations, or CSS `background-image` resources that are likely to be `Largest Contentful Paint (LCP)` candidates. In such cases, these files wouldn't be discovered by the `preload scanner` as the resource is referenced in external resources.

![img_31.png](images/img_31.png)

https://web.dev/learn/performance/resource-hints?continue=https%3A%2F%2Fweb.dev%2Flearn%2Fperformance%23article-https%3A%2F%2Fweb.dev%2Flearn%2Fperformance%2Fresource-hints#preload
</details>


<details >
 <summary style="font-size: medium; font-weight: bold">Prefetch</summary>

The prefetch directive is used to initiate a low priority request for a resource likely to be used for future navigations:

```html
<link rel="prefetch" href="/next-page.css" as="style">
```
This directive largely follows the same format as the `preload` directive, only the `<link>` element's rel attribute uses a value of `prefetch` instead. Unlike the `preload` directive, however, `prefetch` is largely speculative in that you're initiating a fetch for a resource for a future navigation that may or may not happen.

There are times when `prefetch` can be beneficial—for example, if you've identified a user flow on your website that most users follow to completion, a `prefetch` for a render-critical resource for those future pages can help to reduce load times for them.

Note: Given the speculative nature of prefetch, its use comes with the potential downside that data used to fetch the resource may go unused if the user does not navigate to the page that ends up needing the prefetched resource. Rely on your analytics or other data sources for your website's usage patterns to decide for yourself if using prefetch is a good idea. Alternatively, you can use the Save-Data hint to opt out of prefetches for users who have specified a preference for reduced data usage

https://web.dev/learn/performance/resource-hints?continue=https%3A%2F%2Fweb.dev%2Flearn%2Fperformance%23article-https%3A%2F%2Fweb.dev%2Flearn%2Fperformance%2Fresource-hints#prefetch
</details>


<details >
 <summary style="font-size: medium; font-weight: bold">Fetchpriority</summary>

You can use the `Fetch Priority API` through its fetchpriority attribute to increase the priority of a resource. You can use the attribute with `<link>`, `<img>`, and `<script>` elements.

This demo assigns a fetchpriority="high" to the first, larger image, while a fetchpriority="low" to the remaining images.

![img_32.png](images/img_32.png)
https://learn-performance-resource-hints.glitch.me/5

By default, images are fetched with a lower priority. After layout, if the image is found to be within the initial viewport, the priority is increased to **High** priority. In the preceding HTML snippet, fetchpriority immediately tells the browser to download the larger LCP image with a **High** priority, while the less important thumbnail images are downloaded with a lower priority.

Modern browsers load resources in two phases. The first phase is reserved for critical resources and ends once all blocking scripts have been downloaded and executed. During this phase, **Low** priority resources may be delayed from downloading. By using `fetchpriority="high"` you can increase the priority of a resource, enabling the browser to download it during the first phase.

https://web.dev/learn/performance/resource-hints?continue=https%3A%2F%2Fweb.dev%2Flearn%2Fperformance%23article-https%3A%2F%2Fweb.dev%2Flearn%2Fperformance%2Fresource-hints#fetch_priority_api
</details>

</details>

<details >
 <summary style="font-size: large; font-weight: bold">Early Hints</summary>

Websites have become more sophisticated over time. As such, it's not unusual that a server needs to perform non-trivial work (for example, access to databases, or CDNs accessing the origin server) to produce the HTML for the requested page. Unfortunately, this "server think-time" results in extra latency before the browser can start rendering the page. Indeed, the connection effectively goes idle for as long as it takes the server to prepare the response

![img_33.png](images/img_33.png)

Early Hints is an HTTP status code (`103 Early Hints`) used to send a preliminary HTTP response ahead of a final response. This allows a server to send hints to the browser about critical subresources (for example, style sheets for the page, critical JavaScript) or origins that will be likely used by the page, while the server is busy generating the main resource. The browser can use those hints to warm up connections, and request subresources, while waiting for the main resource. In other words, Early Hints helps the browser take advantage of such "server think-time" by doing some work in advance, thereby speeding up page loads.

![img_34.png](images/img_34.png)

In some cases, the performance improvement to the Largest Contentful Paint can go from several hundred milliseconds, as observed by Shopify and by Cloudflare, and up to a second faster, as seen in this before and after comparison:

![img_35.png](images/img_35.png)

https://developer.chrome.com/docs/web-platform/early-hints#:~:text=The%20browser%20can%20use%20those,thereby%20speeding%20up%20page%20loads.
</details>


<details >
 <summary style="font-size: large; font-weight: bold">HTTP upgrade methods</summary>


![img_37.png](images/img_37.png)
![img_36.png](images/img_36.png)

- HTTP 1.0 was finalized and fully documented in 1996. Every
  request to the same server requires a separate TCP connection.

- HTTP 1.1 was published in 1997. A TCP connection can be left
  open for reuse (persistent connection), but it doesn’t solve the HOL
  (head-of-line) blocking issue.
   - **HOL blocking** - when the number of allowed parallel requests in the
     browser is used up, subsequent requests need to wait for the former
     ones to complete.
     53

- HTTP 2.0 was published in 2015. It addresses HOL issue through
  request multiplexing, which eliminates HOL blocking at the application
  layer, but HOL still exists at the transport (TCP) layer.
  As you can see in the diagram, HTTP 2.0 introduced the concept of
  HTTP “streams”: an abstraction that allows multiplexing different HTTP
  exchanges onto the same TCP connection. Each stream doesn’t need
  to be sent in order.

- HTTP 3.0 first draft was published in 2020. It is the proposed
  successor to HTTP 2.0. It uses QUIC instead of TCP for the underlying
  transport protocol, thus removing HOL blocking in the transport layer.
  QUIC is based on UDP. It introduces streams as first-class citizens at
  the transport layer. QUIC streams share the same QUIC connection,
  so no additional handshakes and slow starts are required to create
  new ones, but QUIC streams are delivered independently such that in
  most cases packet loss affecting one stream doesn't affect others.

Referred Video: https://www.youtube.com/watch?v=a-sBfyiXysI&t=2s


Two main factors dictate which HTTP version will be used for a website:

1. **Server Configuration:** The web server software that hosts the website plays a crucial role. The server administrator configures it to support specific HTTP versions (e.g., HTTP/1.1, HTTP/2). A website can only use a version that the server actively supports.

2. **Client Capabilities:** The web browser or client application used to access the website also has its part. Modern browsers typically support the latest HTTP versions (e.g., HTTP/2). However, older browsers might be limited to earlier versions (e.g., HTTP/1.1).

Here's how the negotiation happens:

* When you try to access a website, your browser initiates a connection with the server.
* The server sends a response header that includes information about the supported HTTP versions.
* The browser checks its own capabilities and negotiates the highest mutually supported version for optimal communication.

In most cases, with modern browsers and up-to-date servers, you'll automatically use the most efficient HTTP version available.

![img_38.png](images/img_38.png)
![img_39.png](images/img_39.png)

#### HTTP/2 & HTTP/3 both need https connection.

Therefore we need to setup our server with SSL certificate to enable `https` connection, then
we use library `spdy` on express server to setup HTTP/2

Below is small example to see this in action

#### HTTP/1.1
When using HTTP/1.1, browsers impose a per-domain limit of 6-8 connections, depending on the browser implementation. This allows at most 6-8 concurrent requests per domain.
![img_40.png](images/img_40.png)

#### HTTP/2
With the HTTP/2 protocol, browsers have to open only 1 connection per domain. However, thanks to its multiplexing feature, HTTP/2 does not quite raise the limit, but simply removes the theoretical limit on the number of concurrent requests per domain.

It is virtually unlimited in the sense that browsers and servers may limit the number of concurrent requests via the HTTP/2 configuration parameter called SETTINGS_MAX_CONCURRENT_STREAMS.

In practice, typical limits are around 100 but could be larger (or, less commonly, smaller), depending on browser implementation and on the server you connect to

![img_41.png](images/img_41.png)
All request are done in parallel in HTTP/2.



```js
//index.js

const express = require("express");
const spdy = require('spdy');
const fs = require("fs");


const PORT = 3010;
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
   console.log(req.url);
   res.sendFile(__dirname + '/index.html');
});

const CERT_DIR = `${__dirname}/cert`;

const server = spdy.createServer(
        {
           key: fs.readFileSync(`${CERT_DIR}/server.key`),
           cert: fs.readFileSync(`${CERT_DIR}/server.cert`),
        },
        app
);

server.listen(PORT, () => {
   console.log(`Server started at https://localhost:${PORT}`);
});
```

Complete code: https://github.com/namastedev/namaste-frontend-system-design/tree/master/Performance/Network%20Optimization/example4

</details>



<details >
 <summary style="font-size: large; font-weight: bold">Compression: brotli / gzip</summary>

Brotli is a newer compression algorithm which can provide even better text compression results than gzip. According to CertSimple, Brotli performance is:

- `14% smaller than gzip` for JavaScript
- `21% smaller than gzip` for HTML
- `17% smaller than gzip` for CSS

1. To use Brotli, your server must support **HTTPS**. 
2. Brotli is supported in the latest versions of most browsers. 
Browsers that support Brotli will include br in Accept-Encoding headers:
   `Accept-Encoding: gzip, deflate, br`

![img_42.png](images/img_42.png)
![img_43.png](images/img_43.png)
![img_44.png](images/img_44.png)

To know how to set things up: https://web.dev/articles/codelab-text-compression-brotli
</details>


<details >
 <summary style="font-size: large; font-weight: bold">Caching</summary>

- Use Cache Policy(cache-control, expire, etag, last-modified)
- Service Worker
To know more refer Database module
</details>

</details>







<details >
 <summary style="font-size: x-large; font-weight: bold">Rendering Pattern</summary>


In Short all rendering pattern: https://www.youtube.com/watch?v=Dkx5ydvtpCA

One of the main aims of all rendering patterns is to optimize how we ship and execute JS on the client side. More JS means less performant website.

![img_45.png](images/img_45.png)



For more detailed description of below content go through this article: https://www.debugbear.com/blog/server-side-rendering
<details >
 <summary style="font-size: large; font-weight: bold">Client Side Rendering(CSR)</summary>

### What is Rendering?

In web development, rendering means the process of converting application code into interactive web pages. The page HTML is generated by a JavaScript engine. With client-side rendering, this is always done on the frontend. The browser then takes the generated HTML to visually render the page.
We get the dynamic part by hitting API during a render period. This can be done server-side or user-side.


- If you use client-side rendering, it’s the user’s browser that generates the entire app, including the `user interface (UI)`, `data`, and `functionality`. No server is involved in the process, except to store the client-side code and data and transfer it to the browser.

- In CSR apps, the HTML file only contains a blank `root` (often also named `app`) element and a `script` tag. The root element is populated by the browser that downloads and processes the JavaScript bundle to render all the other elements:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>CSR</title>
  </head>
  <body>
    <div id="root"><!-- blank --></div>
    <script src="/bundle.js"></script>
  </body>
</html>
```

- Since the browser needs to download and run the whole application code before the content appears on the screen, the first page load is usually slow with client-side rendering (server-side rendering splits this process between the client and server).

- As a result, users see a blank screen or loading spinner for a relatively long time. This leads to a poorer user experience and higher bounce rates (see Google’s discussion of how page load time impacts bounce rates).



![img_48.png](images/img_48.png)
![img_46.png](images/img_46.png)
</details>



<details >
 <summary style="font-size: large; font-weight: bold">Server Side Rendering(SSR)</summary>

- Server-side rendering, also known as universal or isomorphic rendering
-  SSR generates the static HTML markup on the server using a backend runtime such as Node.js that can run the JavaScript code to build the UI components.


All HTML elements inside the root element were rendered on the server:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>SSR</title>
  </head>
  <body>
    <div id="root">
      <div class="container">
        <h2>Stay Updated</h2>
        <form method="post">
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
          />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </div>
    <script src="/bundle.js"></script>
  </body>
</html>
```

### Steps in the server-side rendering process

**An SSR app processes the same JavaScript code on both the client and server side — this is why it’s also called universal rendering.**


1. **Client’s HTTP request** – When the user enters the URL into the browser’s address bar, it establishes an HTTP connection with the server, then sends the server a request for the HTML document.
2. **Data fetching** – The server fetches any required data from the database or third-party APIs.
3. **Server-side pre-rendering** – The server compiles the JavaScript components into static HTML.
4. **Server’s HTTP response** – The server sends this HTML document to the client.
5. **Page load and rendering** – The client downloads the HTML file and displays the static components on the page.
6. **Hydration** – The client downloads the JavaScript file(s) embedded into the HTML, processes the code, and attaches event listeners to the components. This process is also called hydration or rehydration.

Note that the flowchart below starts with Step 4 when the browser gets the server’s response:
![img_49.png](images/img_49.png)

Universal JavaScript code that also runs on the server side
- React uses the `ReactDomServer` object together with the `hydrateRoot()` method.
- Vue has a `createSSRApp()` method and a corresponding server-side rendering API.
- Angular has its in-house server-side rendering tool called `Angular Universal`.

### Advantages
1. **SEO:** These days, search engine bots can easily crawl static HTML, but they still tend to have problems with indexing JavaScript-generated content. Even though Google can now index synchronous JavaScript, JavaScript SEO is a complicated question with several drawbacks such as delays in JavaScript indexing.
2. Faster initial page loads
3. **Faster Largest Contentful Paint (LCP):**  As the largest content element (either an image or text block) is part of the static content your server pre-renders, SSR will display it faster on the screen.
4. **Lower Cumulative Layout Shift (CLS):** With server-side rendering, the browser doesn’t have to go over the rendering process step by step, which typically results in fewer random layout shifts and, therefore, better CLS scores.
5. **Fewer issues with social media indexing:** For example, Facebook’s Open Graph Protocol and Twitter Cards don’t support client-side rendering.
6. **Better for accessibility:** As the server sends pre-rendered content to the browser, SSR apps are more suitable for people who use older devices with less powerful CPUs.
7. **Data Fetching:** Server Components allow you to move data fetching to the server, closer to your data source. This can improve performance by reducing time it takes to fetch data needed for rendering, and the number of requests the client needs to make.
8. **Security:** Server Components allow you to keep sensitive data and logic on the server, such as tokens and API keys, without the risk of exposing them to the client. 
9. **Caching:** By rendering on the server, the result can be cached and reused on subsequent requests and across users. This can improve performance and reduce cost by reducing the amount of rendering and data fetching done on each request.
10. **Streaming:** Server Components allow you to split the rendering work into chunks and stream them to the client as they become ready. This allows the user to see parts of the page earlier without having to wait for the entire page to be rendered on the server.
11. **Bundle Size:** We can reduce bundle size of our app by moving part of code which uses bigger library to server and get the outcome from server.


### Disadvantages
1. If you have any API which takes more time to load, then client will not recieve anything until that API call is made, slow API act like bottleneck.
This will increase LCP(Largest Contentful Paint).
2. Increased complexity
3. **Potentially higher First Input Delay (FID):** With server-side rendering, the browser displays static content faster (which leads to a better LCP), but it still needs time to hydrate the application. As a result, the app looks ready for interaction while the code is still being processed in the background. If the user tries to interact with the app during this period of time, there will be a delay in the browser’s response.
4. **Less efficient caching:** With client-side rendering, you can speed up your app by taking full advantage of browser caching. The initial page HTML is the same for all pages, so you can cache it and load it from a content delivery network (CDN) along with the JavaScript code.With server-side rendering, the page HTML is different for each page, so it’s harder to cache this on a CDN.
5. **Higher costs:** As client-side apps don’t need a server, you can deploy them to a free or cheap static storage service such as Netlifly or Amazon S3. However, you’ll need to pay for a server or at least a “serverless” backend to deploy an SSR application, which means higher running costs.


#### Nextjs14 code -> Use `getServerSideProps` for making route SSR
```js
import Image from 'next/image';

const Tutorials = ({ video }) => {
  return (
      <li className='mb-6'>
        <a
          href={`https://www.youtube.com/watch?v=${video.id}`}
          target='_blank'
          rel='noopener noreferrer'
          className='hover:opacity-80'
        >
          <Image
            src={video.image}
            alt={video.title}
            width={420}
            height={200}
            className='mb-4 rounded-md'
          />
          <h4>{video.title}</h4>
          <div>
            {video.views} &bull; {video.published}
          </div>
        </a>
      </li>
  )
}

export default function Home({ videos }) {
  return (
    <>
    <h1>Tutorials</h1>
    <ul>
        {videos?.map((video, index) => (
          <Tutorials video={video} key={index} />
        ))}
      </ul>
    </>
  )
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  // await new Promise((resolve) => setTimeout(resolve, 3000))
  const res = await fetch('http://localhost:4000/tutorials');
  const videos = await res.json()
  // Pass data to the page via props
  return { props: { videos } }
}
```
</details>



<details >
 <summary style="font-size: large; font-weight: bold">Static Site Generation(SSG)</summary>

During the build time itself all the data will be fetched from API and rendered final HTML is generated
which served whenever we access the page. Even something got changed after that like new images or any data updated,
those thing won't be reflected on the page. It will just show the same content which there during the build time.
![img_47.png](images/img_47.png)

#### Nextjs14 code -> Use `getStaticProps` for making route SSG
```js
import Image from 'next/image';

const Tutorials = ({ video }) => {
  return (
      <li className='mb-6'>
        <a
          href={`https://www.youtube.com/watch?v=${video.id}`}
          target='_blank'
          rel='noopener noreferrer'
          className='hover:opacity-80'
        >
          <Image
            src={video.image}
            alt={video.title}
            width={420}
            height={200}
            className='mb-4 rounded-md'
          />
          <h4>{video.title}</h4>
          <div>
            {video.views} &bull; {video.published}
          </div>
        </a>
      </li>
  )
}

export default function Home({ videos }) {
  return (
    <>
    <h1>Tutorials</h1>
    <ul>
        {videos?.map((video, index) => (
          <Tutorials video={video} key={index} />
        ))}
      </ul>
    </>
  )
}

// This gets called on every request
export async function getStaticProps() {
  // Fetch data from external API
  await new Promise((resolve) => setTimeout(resolve, 3000))
  const res = await fetch('http://localhost:4000/tutorials');
  const videos = await res.json()
  // Pass data to the page via props
  return { props: { videos } }
}
```
</details>


<details >
 <summary style="font-size: large; font-weight: bold">React Server Component(RSC)</summary>

Read full details about RSC here: https://vercel.com/blog/understanding-react-server-components

![img_50.png](images/img_50.png)
![img_51.png](images/img_51.png)
</details>



<details >
 <summary style="font-size: large; font-weight: bold">Qwik(Resumability)</summary>

![img_52.png](images/img_52.png)


Short Video from Fireship: https://www.youtube.com/watch?v=x2eF3YLiNhY
Must read article to understand `Hydration` & `Resumability`: https://www.builder.io/blog/hydration-is-pure-overhead


The hard part of hydration is knowing `WHAT` event handlers we need and `WHERE` they need to be attached.

- `WHAT`: The event handler is a closure that contains the behavior of the event handler. It is what should happen if a user triggers this event.
- `WHERE`: The location of the DOM element where the WHAT needs to be attached to (includes the event type.)

The added complication is that WHAT is a closure that closes over APP_STATE and FRAMEWORK_STATE:

- `APP_STATE`: the state of the application. APP_STATE is what most people think of as the state. Without APP_STATE, your application has nothing dynamic to show to the user.
- `FRAMEWORK_STATE`: the internal state of the framework. Without FRAMEWORK_STATE, the framework does not know which DOM nodes to update or when the framework should update them. Examples are component-tree, and references to render functions.


Hydration is recovering event handlers by downloading and re-executing all components in the SSR/SSG-rendered HTML. The site is sent to the client twice, once as HTML, and again as JavaScript. Additionally, the framework must eagerly execute the JavaScript to recover `WHAT`, `WHERE`, `APP_STATE`, and `FRAMEWORK_STATE`. All this work just to retrieve something the server already had but discarded!

![img_53.png](images/img_53.png)
</details>

</details>


