Controller: 
1. Business Logic. Lot of if else condition
2. Interact with View, service, storage

<details >
 <summary style="font-size: large; font-weight: bold">1. Photo Sharing App (Instagram)</summary>

GreatFrontend: https://www.greatfrontend.com/questions/system-design/photo-sharing-instagram

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

---
</details>


<details >
 <summary style="font-size: large; font-weight: bold">2. E-Commerce App (Amazon, Flipkart)</summary>

GreatFrontend: https://www.greatfrontend.com/questions/system-design/e-commerce-amazon

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


---
</details>



<details >
 <summary style="font-size: large; font-weight: bold">3. News Feed (e.g. Facebook, Twitter)</summary>

GreatFrontend: https://www.greatfrontend.com/questions/system-design/news-feed-facebook

### Step-1: Requirements(Functional / Non-Functional) & Scoping
![img_17.png](img_17.png)

### Step-2: Architecture Design

![img_18.png](img_18.png)

### Step-3: Data Model
![img_19.png](img_19.png)

### Implementation Details

![img_20.png](img_20.png)
![img_22.png](img_22.png)
![img_21.png](img_21.png)
![img_23.png](img_23.png)

---
</details>




<details >
 <summary style="font-size: large; font-weight: bold">4. Chat App (e.g. Messenger, Whatsapp, Slack)</summary>

- GreatFrontend: https://www.greatfrontend.com/questions/system-design/chat-application-messenger
- Chirag Goel: https://www.youtube.com/watch?v=3mi-Cah2PtM

### Step-1: Requirements(Functional / Non-Functional) & Scoping
![img_24.png](img_24.png)

### Step-2: Architecture Design
![img_26.png](img_26.png)

### Step-3: Data Model
![img_27.png](img_27.png)

### Step-4: API

- **Send Message**:
    - Adds a new message to the Message table with a "sending" status.
    - Adds a row to the SendMessageRequest table with a "pending" status.
    - Deletes any draft messages for the current conversation.
    - Message Scheduler handles syncing the pending messages with the server.

- **Sync Outgoing Messages**:
    - Message Scheduler syncs outgoing messages, maintaining its task queue.
    - Monitors the SendMessageRequest table to process messages based on their status:
        - **pending**: Queue the message to be sent via the real-time channel, mark as "in_flight."
        - **in_flight**: If a timeout occurs, mark the message as "fail."
        - **fail**: Retry sending with exponential backoff based on fail_count.

- **Server Events**:
    - Receives real-time updates via events (e.g., message_sent, message_delivered).

    - **message_sent event**:
        - Updates the Message status to "sent."
        - Cleans up related tasks in the Message Scheduler.
        - Notifies the Conversation UI to update if the message's conversation is shown.

    - **message_delivered event**:
        - Updates the Message status to "delivered."
        - Notifies the Conversation UI to update.

    - **message_failed event**:
        - Updates the SendMessageRequest row to "fail" and increments fail_count.
        - Notifies the Conversation UI to update.

    - **incoming_message event**:
        - Adds the new message to the Message table.
        - Creates a new row in the Conversation and User tables if necessary.
        - Updates the Conversations List UI and Conversation UI.

    - **sync event**:
        - Triggered when a client connects to the server, ensuring the client is up-to-date with server data.
        - Syncs data based on the client's last update timestamp or conversation's cursor.


### Step-5: Non-Functional Discussion

![img_25.png](img_25.png)

---
</details>






<details >
 <summary style="font-size: large; font-weight: bold">5. Live Commentary (e.g. CricInfo, Cricbuzz)</summary>

![img_29.png](img_29.png)
![img_28.png](img_28.png)

### 1. Realtime
![img_30.png](img_30.png)
Avoid million request on your server
1. Inactive tab don't make any new request
2. Fallback to polling in case of websocket


### 2. Notification
![img_36.png](img_36.png)
In this user can decide what notification they want like which match, only six & fours etc
![img_31.png](img_31.png)
![img_32.png](img_32.png)

Things we need for setting notification on
1. Frontend
   1. Service Worker: Which handle push notification
   2. Permission to send notification
3. Backend
   1. Match Server: It will send live score 
   2. Message Queue
   3. Notification Server
   4. User DB
   5. FCM(Firebase Cloud Messaging): Firebase notification service
   6. Registration Server

#### How it will work
1. User give permission for notification to send on browser
2. They can choose for which stuff they want to receive notification
3. Once they set this up a `token` will be generated by `registration server` and it will stored in `user DB`
4. Whenever `match server` add anything to message queue notification server check in user DB if any user that we need to send notification
5. If yes then FCM will send notification to them which is received by service worker and delivered to user device.

![img_33.png](img_33.png)
![img_34.png](img_34.png)
![img_35.png](img_35.png)

---
</details>





<details >
 <summary style="font-size: large; font-weight: bold">6. Email Client (e.g. Outlook, Gmail)</summary>

![img_37.png](img_37.png)
![img_38.png](img_38.png)
![img_39.png](img_39.png)
![img_40.png](img_40.png)
![img_41.png](img_41.png)
![img_42.png](img_42.png)
![img_43.png](img_43.png)
![img_44.png](img_44.png)
![img_45.png](img_45.png)

---
</details>






<details >
 <summary style="font-size: large; font-weight: bold">7. Analytics Dashboard (e.g. Google Analytics)</summary>

![img_46.png](img_46.png)

**Heat Map**
![img_47.png](img_47.png)

**Session Recording**
![img_48.png](img_48.png)
There are different way to do the session recording. 
1. You can simply record whole screen, masking user credentials 
![img_50.png](img_50.png)
2. Store all render html with user click and event listeners, which can be inspected further like it is done by Microsoft Clarity
![img_51.png](img_51.png)
3. We can also stream this data using things PEER JS
![img_52.png](img_52.png)


GTM tag used to map what kind of thing we want to track
![img_49.png](img_49.png)


![img_53.png](img_53.png)
![img_54.png](img_54.png)

![img_55.png](img_55.png)
![img_56.png](img_56.png)

![img_57.png](img_57.png)
![img_58.png](img_58.png)

Refer code for different concept from here:
<br>
https://github.com/namastedev/namaste-frontend-system-design/tree/master/HLD/AnalyticsDashboard

---
</details>








<details >
 <summary style="font-size: large; font-weight: bold">8. Video Streaming (e.g. Youtube, Netflix)</summary>

![img_60.png](img_60.png)


1. **Streaming:** We can't download whole at a time in Youtube, hence streaming of chunks of data are send by backend
2. **Buffering:** Here we try to download some chunks of data before hand for small portion of which is about to come
3. **Bitrate:** More Bitrate means we can have higher resolution and better quality video
4. **Frame Rate(24fps, 30 fps, 60fps):** How many frames can be shown in a second. More frame rate is better quality
5. **Codec(H.264, H.265(HECV), VP9, AV1):** It is the algorithm used to encode and decode the video chunks
6. **Poster:** Thumbnail
7. **Open / Closed Caption:** Open are controlled caption and closed are embedded caption
8. **Seeking:** Accessing video different parts through clicking on video timeline
9. **Scrubbing:** Accessing video by dragging on video timeline
10. **Manifest file:** Metadata for video chunks are stored in manifest file. It will have info like resolution, chunks size etc
11. **Subtitle file(srt, TTML, SCC, WebVTT) :**


Small Video glimpses in Netflix are send from backend in binary format but `video` tag don't understand this hence we need to convert it in blob

![img_61.png](img_61.png)
For Pagination in Netflix, it send all the Video IDs on page loading, then as per our need to use Video ID to fetch video information when we will do horizontal scrolling

![img_62.png](img_62.png)

Tool for defining video player control
![img_63.png](img_63.png)
![img_64.png](img_64.png)
![img_65.png](img_65.png)
![img_66.png](img_66.png)
![img_67.png](img_67.png)

---
</details>






<details >
 <summary style="font-size: large; font-weight: bold">9. Diagram Tool (e.g. Miro, MS Whiteboard)</summary>

![img_68.png](img_68.png)
![img_69.png](img_69.png)

### Canvas API
![img_70.png](img_70.png)
![img_72.png](img_72.png)
In canvas we have just one element tag where things are printed.
1. Hence less accessible
2. Smaller size added to DOM
3. Resizing of drawn is not possible
https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API

### SVG
![img_71.png](img_71.png)
![img_73.png](img_73.png)
In SVG we have actual DOM created for each continuous line drawn.

1. More Accessible
2. Resizing has no loss because it is using actual vector
https://developer.mozilla.org/en-US/docs/Web/SVG

![img_74.png](img_74.png)

![img_75.png](img_75.png)
![img_76.png](img_76.png)

Localstorage by default have tab syncing
![img_77.png](img_77.png)

IndexDB Syncing logic
![img_78.png](img_78.png)
![img_79.png](img_79.png)


![img_80.png](img_80.png)
![img_81.png](img_81.png)

---
</details>
