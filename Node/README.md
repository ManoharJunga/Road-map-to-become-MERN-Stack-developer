# Node.js
 - Node.js is a server-side platform that takes requests from users, processes those requests and returns responses to the corresponding users.

## Node.js WorkFlow

 - Event Loop: The event loop is a core concept in Node.js. It continuously checks the message queue for new events or tasks. When an asynchronous operation completes or a new event occurs, a corresponding message (or callback) is added to the event queue.

 - Event Queue: This is where events (such as I/O operations, timers, or other asynchronous tasks) are queued for the event loop to process. The event loop checks the queue and executes the associated callbacks in a non-blocking manner.

 - Call Stack: The call stack is used for managing the execution of synchronous code, keeping track of function calls. When a function is called, a new frame is pushed onto the stack, and when the function completes, its frame is popped off the stack.

## What is NPM?

 - NPM stands for Node Package Manager
 - NPM is responsible for managing all the packages and modules for Node.js
 - Node package manager provides two main functionalities:
    - it provides online repositories for node.js packages/modules which are searchable on search.nodejs.org

## Why NPM?
 - Helps in adding the reuired packages into a project
 - Manages and maintains various versions of codes and their dependencies
 - NPM automatically updates the application when the project code undergoes any change

## Lets talk about Express.js
 - So Express is a Flexible Node.js web application framework which provides a wide set of features to develop both web and mobile applications
 - Express JS makes it much easier and simpler to build a web server with the use of middleware that can handle requests and responses