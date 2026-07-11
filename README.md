# Simple-server-with-2-JSON-endpoints
Backend simple server with 2 JSON endpoints using JS and Express.
This simple server.js code will help anyone who wants to understand the request->response loop in servers.

Express.js is a backend web framework for node.js.


## **Explanation for the express functions used in the server.js code**

### **app.get(xx, ):**

First, we need to identify the name of the endpoint (URL request) that the server will respond to, the request will contain the name of this endpoint.

### **app.get( ,xx):**

Second, we will define the request and response variables, and then we will define what the response should actually do (=> {what the response should do})

### **app.listen(port number,void):**

This is a standard 'listening' polling function, polling means its constantly checking if a request has came into the server, the function here is not necessary, however it's recommended to add some sort of print so that you know the server has started successfully.


## **Step 1**

Install the Express library "npm install express"

## **Step 2**

Create your server.js file, and initialize package.json "npm init -y"

## **Step 3**

Write the implemented JS code for the server

## **Step 4**

Results:

![Requesting the first endpoint on localhost](screenshots/Screenshot%202026-07-11%20191254.png)

![Requesting the second endpoint on the local host]("C:\Users\User\OneDrive\Pictures\Screenshots\Screenshot 2026-07-11 191309.png")

![Requesting the first endpoint on the terminal using curl]("C:\Users\User\OneDrive\Pictures\Screenshots\Screenshot 2026-07-11 191408.png")

![Requesting the second endpoint on the terminal using curl]("C:\Users\User\OneDrive\Pictures\Screenshots\Screenshot 2026-07-11 191442.png")


