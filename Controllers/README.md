# CONTROLLER

**What is a Controller?**

In backend development, a controller is a component that handles incoming requests, interacts with models and services, and returns responses to the client.

**Why Do We Need Controllers?**

Controllers act as an intermediary between the client-side of the application (React JS) and the server-side (backend). They receive requests from the client, process them, and return responses.

**Basic Structure of a Controller**

A basic controller typically consists of the following components:

* **Routes**: Define the endpoints that the controller will respond to.
* **Request Handling**: Handle incoming requests, extract data, and validate inputs.
* **Business Logic**: Interact with models and services to perform the necessary actions.
* **Response**: Return a response to the client.

**Creating a Simple Controller**

Let's create a simple controller using Node.js and Express.js.

```javascript
// users.controller.js
const express = require('express');
const router = express.Router();

// Route: GET /users
router.get('/', async (req, res) => {
  try {
    const users = await getUsers(); // Call a service to get users
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users' });
  }
});

// Route: POST /users
router.post('/', async (req, res) => {
  try {
    const user = req.body; // Extract user data from request body
    await createUser(user); // Call a service to create a new user
    res.json({ message: 'User created successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error creating user' });
  }
});

module.exports = router;
```
