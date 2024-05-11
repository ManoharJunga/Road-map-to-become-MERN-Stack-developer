# Setup Instructions for Full Stack Application
This guide will walk you through setting up a full-stack application with React for the frontend and a Node.js backend using Express and MongoDB.
## Frontend Setup with React

### Refer to the [Frontend Setup with React](../Frontend/README.md) for detailed instructions on setting up the frontend.
Make sure to install the necessary packages for your application by running the following command in your terminal:

```sh
npm install bootstrap axios react-router-dom
```

Removing CSS Files
- Go to the `src` folder.
- Delete `app.css` and `index.cs`s.
- Remove the import statements for the CSS files from `App.jsx` and `main.jsx`.

Edit `App.jsx` and replace the code with:

```javascript
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Signup from './Signup';
import Login from './Login';
import Home from './Home';
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

```


Create the following components:

- `Signup.jsx`



```javascript
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

function Signup() {    

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:3001/register", { name, email, password })
        .then(result => {console.log(result)
        navigate("/login")
        })
        .catch(err => console.log(err))
    }


  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
        <div className="bg-white p-3 rounded w-25">
        <h2><center>Sign Up</center></h2>

            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email">
                        <strong>Name</strong>
                    </label>
                    <input type="text" 
                    placeholder='Enter Name' 
                    autoComplete='off' 
                    name='email' 
                    className='form-control rounded-0'
                    onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email">
                        <strong>Email</strong>
                    </label>
                    <input type="text" 
                    placeholder='Enter Email' 
                    autoComplete='off' 
                    name='email' 
                    className='form-control rounded-0' 
                    onChange={(e) => setEmail(e.target.value)}

                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email">
                        <strong>Password</strong>
                    </label>
                    <input type="password" 
                    placeholder='Enter Password' 
                    name='password' 
                    className='form-control rounded-0' 
                    onChange={(e) => setPassword(e.target.value)}

                    />
                </div>
                <button type="submit" className="btn btn-success w-100 rounded-0">
                    Sign Up
                </button>
                </form>
                <p>Already have an account?</p>
                <Link to="/login" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
                    Login
                </Link>
            
        </div>
    </div>
  );
}

export default Signup;
```

- `Login.jsx`

```javascript
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

function Login() {    

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:3001/login", { email, password })
        .then(result => {
            console.log(result)
            if(result.data === "Success"){
                navigate("/home")
            }else{
                navigate("/register")
                alert("You are not registered to this service")

            }
       
        })
        .catch(err => console.log(err))
    }


  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
        <div className="bg-white p-3 rounded w-25">
            <h2><center>Login</center></h2>
            <form onSubmit={handleSubmit}>
                
                <div className="mb-3">
                    <label htmlFor="email">
                        <strong>Email</strong>
                    </label>
                    <input type="text" 
                    placeholder='Enter Email' 
                    autoComplete='off' 
                    name='email' 
                    className='form-control rounded-0' 
                    onChange={(e) => setEmail(e.target.value)}

                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email">
                        <strong>Password</strong>
                    </label>
                    <input type="password" 
                    placeholder='Enter Password' 
                    name='password' 
                    className='form-control rounded-0' 
                    onChange={(e) => setPassword(e.target.value)}

                    />
                </div>
                <button type="submit" className="btn btn-success w-100 rounded-0">
                    Login
                </button>
                </form>
                <p>Don't have an account?</p>
                <Link to="/register" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
                    Sign Up
                </Link>
            
        </div>
    </div>
  );
}

export default Login;
```

- `Home.jsx`

```javascript
import React from 'react'

const home = () => {
  return (
    <div>Finally you did it. 😃</div>
  )
}

export default home
```

## Backend Setup
### Refer to the [Get Started with Backend Set Up](../backend/README.md) for detailed instructions on setting up the backend.

1. **Create a new folder for your backend application.**

2. **Initialize a new Node.js project:**

    ```sh
    npm init -y
    ```

3. **Install required dependencies:**

    ```sh
    npm install express mongoose cors
    ```

## MongoDB Setup

1. **Install MongoDB Compass.**

2. **Connect to MongoDB Compass.**

3. **Create a new database named "employee".**

## Setting Up Backend Files

1. **Create `Employee.js` and `index.js` files.**

2. **Add the respective code provided in the instructions to each file.**

`index.js`

```javascript
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const EmployeeModel = require("./Employee")

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://localhost:27017");

app.post("/login", (req, res) => {
    const {email, password} = req.body;
    EmployeeModel.findOne({email : email})
    .then(user => {
        if(user) {
            if(user.password === password){
                res.json("Success")
            }else{
                res.json("The password is incorrect")
            }
        }else{
            res.json("No record existed")
        }
    })
})

app.post("/register", (req, res) => {
    EmployeeModel.create(req.body)
    .then(employees => res.json(employees))
    .catch(err => res.json(err))
})


app.listen(3001, () => {
    console.log("server is running")
})
```


`Employee.js`

```javascript
const mongoose = require('mongoose')

 const EmployeeSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String
 })

 const EmployeeModel = mongoose.model("employees", EmployeeSchema)
 
 module.exports = EmployeeModel
```
## Final Steps

1. **Install MongoDB Compass app:**
   
   - Download and install MongoDB Compass from [here](https://www.mongodb.com/try/download/compass).
   
2. **Start MongoDB Compass:**

   - Launch MongoDB Compass.
   
3. **Connect to MongoDB:**

   - Click on the "Connect" button in MongoDB Compass.
   - Set up a new connection and provide the necessary details (e.g., host, port).
   
4. **Create a New Database:**

   - Once connected, create a new database named "employee".
   
5. **Start the Frontend and Backend Servers:**

   - Navigate to the frontend and backend folders.
   - Start the frontend server using `npm start`.
   - Start the backend server using `node index.js`.

6. **You're Ready to Go:**

   - With both frontend and backend servers running, your full-stack application is now set up and ready to use!
