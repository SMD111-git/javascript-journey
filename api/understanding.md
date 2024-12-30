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





# promises
### Understanding Promises and Asynchronous JavaScript: A Complete Guide

In modern web development, handling asynchronous operations like API calls, file reading, or timeouts is a common task. JavaScript provides several ways to handle these operations, but the introduction of **Promises** has significantly improved the process. Promises allow us to write cleaner, more manageable code for dealing with asynchronous operations. In this blog post, we will walk through the code and explain how Promises work, including various methods for handling success, failure, and chaining asynchronous tasks.

---

### **What Are Promises?**

A **Promise** in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation. Promises allow you to handle asynchronous operations in a more organized way compared to traditional callback functions.

### **States of a Promise:**

1. **Pending**: The asynchronous operation is still in progress.
2. **Resolved (Fulfilled)**: The operation completed successfully, and you now have access to the result.
3. **Rejected**: The operation failed, and you can handle the error.

### **Why Use Promises?**

Promises offer several benefits over traditional callbacks:
- They help avoid **callback hell** (nesting multiple callbacks).
- They allow better error handling.
- They offer a way to **chain** multiple asynchronous operations and control the flow.

---

### **Breaking Down the Code**

Let's go through the code and understand how it handles asynchronous operations using Promises.

#### 1. **Creating and Using a Promise**

```javascript
const promiseone = new Promise(function (resolve, reject) {
    setTimeout(function(){
        console.log("async task is completed");
        resolve(); // Resolving the promise after the task is complete
    }, 1000);
});
```

Here, we create a new Promise. Inside the promise, we simulate an asynchronous task using `setTimeout()`, which waits for 1 second before logging a message and resolving the promise. The `resolve()` function indicates that the asynchronous task was successful.

After the promise is resolved, we can use `.then()` to handle the successful completion:

```javascript
promiseone.then(function() {
    console.log("promise consumed");
});
```

The `.then()` method runs when the promise is successfully resolved. In this case, after the async task completes, it prints "promise consumed".

#### 2. **Chaining Promises**

You can chain multiple `.then()` blocks to handle different stages of asynchronous operations.

```javascript
new Promise((resolve, reject) => {
    setTimeout(function () {
        console.log("async task 2");
        resolve();
    }, 1000);
}).then(function () {
    console.log("async 2 resolved ");
});
```

This is a simple example where a second asynchronous task is executed, and once it is resolved, we log a success message.

#### 3. **Passing Data Through Promises**

In this example, we resolve the promise with an object containing user data:

```javascript
const promisethree = new Promise(function(resolve, reject) {
    setTimeout(() => {
        resolve({ username: 'chai', email: 'chai@example.com' });
    }, 1000);
});

promisethree.then(function(user) {
    console.log(user);
});
```

Here, `promisethree` resolves with an object containing a username and email. We then access this object in the `.then()` function, logging the user details.

#### 4. **Handling Errors with Promises**

What if something goes wrong? Promises allow you to handle errors using the `.catch()` method. 

```javascript
const promisefour = new Promise(function(resolve, reject) {
    setTimeout(function(){
        let error = false;
        if (!error) {
            resolve({ username: "SMD", password: "123" });
        } else {
            reject('ERROR: something went wrong');
        }
    }, 1000);
});

promisefour.then((user) => {
    console.log(user);
    return user.username;
}).then(function(username) {
    console.log(username);
}).catch(function(error) {
    console.log(error);
}).finally(() => {
    console.log("the promise is resolved or rejected");
});
```

In this case, if an error occurs (i.e., `error = true`), we reject the promise and catch the error using `.catch()`. Regardless of success or failure, the `.finally()` block will always execute, making it a good place to perform cleanup or log status messages.

#### 5. **Using `async` and `await` with Promises**

The `async` and `await` keywords offer a cleaner way to work with Promises by allowing you to write asynchronous code in a more synchronous style.

```javascript
const promisefive = new Promise(function(resolve, reject) {
    setTimeout(function(){
        let error = false;
        if (!error) { 
            resolve({ username: "js", password: "123" });
        } else {
            reject('ERROR: something went wrong in js');
        }
    }, 1000);
});

async function consumerpromisefive() {
    try {
        const response = await promisefive; // Waits for the promise to resolve
        console.log(response);
    } catch(error) {
        console.log(error);
    }
}

consumerpromisefive();
```

In the above code:
- **`async`**: This keyword marks the function as asynchronous and ensures it always returns a Promise.
- **`await`**: This pauses the function execution until the promise resolves or rejects. It makes asynchronous code look and behave like synchronous code, making it easier to read and understand.

If the promise is resolved, `response` will hold the result, which we log to the console. If there’s an error, the `catch` block handles it.

#### 6. **Fetching Data Using Promises**

Promises are commonly used with **fetch** to retrieve data from APIs. Here's an example of using the `fetch` API to get data from GitHub:

```javascript
fetch('https://api.github.com/users/SMD111-git')
    .then(function(response) {
        return response.json(); // Converts the response to JSON
    })
    .then(function(data) {
        console.log(data); // Logs the data retrieved from GitHub
    })
    .catch((error) => console.log(error)); // Catches any errors
```

- **`fetch()`**: This function initiates the request to the URL provided and returns a Promise.
- **`.then()`**: The first `.then()` is used to parse the response body to JSON format.
- **`.catch()`**: The `.catch()` method is used to handle any errors that occur during the request, such as network issues or invalid responses.

---

### **Summary of Key Points**

1. **Promises** help handle asynchronous operations by allowing you to chain multiple operations and handle errors more cleanly than callbacks.
2. You can create a promise with `new Promise()`, and inside it, perform asynchronous operations (like API calls or timeouts).
3. **`then()`** is used to handle the success case, while **`catch()`** handles errors.
4. The **`finally()`** block is always executed, regardless of whether the promise was resolved or rejected.
5. **`async` and `await`** allow you to write asynchronous code in a more synchronous, readable way, without needing to use `.then()` chains.

### **Further Reading**

For more information about handling asynchronous operations and Promises in JavaScript, check out the [MDN Promises documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

By understanding Promises and mastering their usage, you can write cleaner, more manageable asynchronous code for your web applications!
