### Understanding the Code: Making an API Call with XMLHttpRequest

This blog post will walk you through an example of how to make an API call using JavaScript’s `XMLHttpRequest` (XHR) object and track its different states.

#### What is `XMLHttpRequest`?

The `XMLHttpRequest` object is a built-in JavaScript object used to send and receive HTTP requests from a server asynchronously. It's primarily used to make API calls in web applications to fetch data without needing to reload the page.

In the code example below, we will make a **GET** request to the GitHub API to retrieve user data and log some of the response details to the console.

---

### Breakdown of the Code

#### HTML Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body style="background-color:black;color: white;">
    0  UNSENT    Client has been created. open() not called yet.
    1  OPENED    open() has been called.
    2  HEADERS_RECEIVED    send() has been called, and headers and status are available.
    3  LOADING    Downloading; responseText holds partial data.
    4  DONE    The operation is complete.
</body>
<script>
    const requesturl='https://api.github.com/users/SMD111-git'
    const xhr=new XMLHttpRequest()
    xhr.open('GET',requesturl)
    xhr.onreadystatechange=function(){
        console.log(xhr.readyState)
        if (xhr.readyState===4) {
            const data=JSON.parse(this.responseText)
            console.log(typeof  data)
            console.log(data.followers)
        }
    }
    xhr.send()
</script>
</html>
```

Let’s break it down step-by-step:

---

### **HTML Part**

```html
<body style="background-color:black;color: white;">
    0  UNSENT    Client has been created. open() not called yet.
    1  OPENED    open() has been called.
    2  HEADERS_RECEIVED    send() has been called, and headers and status are available.
    3  LOADING    Downloading; responseText holds partial data.
    4  DONE    The operation is complete.
</body>
```

This part of the code contains some text to visually represent the different states of an `XMLHttpRequest`. These states are shown in the browser to understand the progression of the request, from the initial state (`UNSENT`) to when the request is complete (`DONE`).

---

### **JavaScript Code Explanation**

```javascript
const requesturl = 'https://api.github.com/users/SMD111-git';
```

Here, we define the URL to the GitHub API. This URL will provide information about the user `SMD111-git`, such as their followers, repositories, and more.

```javascript
const xhr = new XMLHttpRequest();
```

We create a new instance of the `XMLHttpRequest` object. This will be used to make the API request.

```javascript
xhr.open('GET', requesturl);
```

The `open()` method initializes the request. In this case, we are using the **GET** method to request data from the provided `requesturl`.

- `'GET'`: This is the HTTP method. GET is used to fetch data from the server.
- `requesturl`: This is the URL from which we want to fetch data (the GitHub API for the `SMD111-git` user).

```javascript
xhr.onreadystatechange = function() {
    console.log(xhr.readyState);
```

The `onreadystatechange` property is an event handler that is triggered every time the state of the request changes. The `readyState` property holds the current state of the request, and we log it to the console to track how the request is progressing.

Here’s what the states mean:

- `0 (UNSENT)`: The request has been created, but the `open()` method has not yet been called.
- `1 (OPENED)`: The `open()` method has been called, but the request has not been sent yet.
- `2 (HEADERS_RECEIVED)`: The `send()` method has been called, and the headers and status are available.
- `3 (LOADING)`: The request is downloading, and partial data is available in `responseText`.
- `4 (DONE)`: The operation is complete, and we have received the full response.

```javascript
if (xhr.readyState === 4) {
    const data = JSON.parse(this.responseText);
    console.log(typeof data);
    console.log(data.followers);
}
```

Once the request reaches the `DONE` state (`xhr.readyState === 4`), we:

1. **Parse the Response**: `this.responseText` contains the response from the server, which is a JSON string. We use `JSON.parse()` to convert it into a JavaScript object.
2. **Log the Type of Data**: `console.log(typeof data)` will show that the data is now an object.
3. **Log Specific Data**: Finally, we log `data.followers`, which will display the number of followers of the user `SMD111-git` on GitHub.

```javascript
xhr.send();
```

This sends the actual request to the server. After this, the `onreadystatechange` event handler will be triggered as the request progresses through its states.

---

### **How This Code Works:**

1. **Create a Request**: A new `XMLHttpRequest` object (`xhr`) is created.
2. **Configure the Request**: The `open()` method is called to set up the request with the **GET** method and the GitHub API URL.
3. **Monitor Request States**: The `onreadystatechange` handler is set up to monitor the different states of the request.
4. **Send the Request**: The `send()` method is called to send the request to the server.
5. **Handle Response**: Once the request is completed (when `xhr.readyState === 4`), the response data is logged to the console.

---

### **Expected Output**

If everything works correctly, in the **Developer Console** of the browser (accessible by pressing `F12` or `Ctrl+Shift+I`), you will see:

1. **ReadyState Changes**: The numbers `0, 1, 2, 3, 4` representing the states of the request.
2. **Data Output**: The type of the parsed data (which will be `object`), followed by the number of followers of the GitHub user `SMD111-git`.

---

### **Conclusion**

This example demonstrates how to use the `XMLHttpRequest` object to make an asynchronous HTTP request in JavaScript. By tracking the state of the request with `onreadystatechange`, we can see how it progresses through its various stages, from opening the request to receiving the response.

Although `XMLHttpRequest` is a powerful tool, newer libraries like `fetch()` are often used today due to their simpler syntax and more modern features. However, understanding how `XMLHttpRequest` works is still valuable, especially for legacy projects.
