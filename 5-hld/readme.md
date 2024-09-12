Controller: 
1. Business Logic. Lot of if else condition
2. Interact with View, service, storage

<details >
 <summary style="font-size: large; font-weight: bold">1. Photo Sharing App (Instagram)</summary>

### Step-1: Requirements(Functional / Non-Functional) & Scoping
![img.png](img.png)

### Step-2: 
### 1. Architecture Design
![img_1.png](img_1.png)
![img_5.png](img_5.png)

### 2. Component Architecture(If Asked)
![img_2.png](img_2.png)

### Step-3: Data Model
![img_3.png](img_3.png)

### Step-4: API
![img_4.png](img_4.png)

### Step-5: Non-Functional Discussion

### 1. Optimization
![img_6.png](img_6.png)

### Step-6: Implementation
![img_7.png](img_7.png)

**Image Editing:**
1. Canvas API can be used to do cropping and other stuffs
2. CSS Filter Editor
![img_8.png](img_8.png)
https://codepen.io/stoumann/pen/MWeNmyb

**Upload File:**
1. We can different strategies to upload file like by Encoding to Base64 or File Chunking
2. Send data in multipart/form-data
![img_9.png](img_9.png)
</details>


<details >
 <summary style="font-size: large; font-weight: bold">2. E-Commerce App (Amazon, Flipkart)</summary>

### Step-1: Requirements(Functional / Non-Functional) & Scoping
![img_10.png](img_10.png)

### Step-2:
### 1. Architecture Design
![img_11.png](img_11.png)
State Management: Don't call API to store whatever user added to cart, use the information from product details page only

### Step-3: Data Model
![img_12.png](img_12.png)

### Step-4: API
![img_13.png](img_13.png)
When you have lot of filter or parameter like in e-commerce then it is preferred to use POST API than GET API


### Step-5: Non-Functional Discussion

### 1. Optimization
![img_14.png](img_14.png)

### 2. SEO
![img_15.png](img_15.png)

### 3. Internationalization / Localization
![img_16.png](img_16.png)

</details>
