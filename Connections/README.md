# Connecting Backend and Frontend

To seamlessly integrate your backend and frontend in your MERN stack project, follow these steps:

## 1. Create Two Folders

Begin by organizing your project into two main folders: `backend` and `frontend`.

## 2. Setting Up the Backend

Navigate to the `backend` folder and follow the instructions below.

### a. Backend Setup Guide

Refer to the [Get Started with Backend Set Up](../backend/README.md) for detailed instructions on setting up the backend.

### b. Update `index.js`

Make slight adjustments in the `index.js` file to accommodate ES module syntax. Update the code snippet as follows:

```javascript
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
```

## 3. Update Package.json for ES Module Support
Since you're using ES module syntax in your backend code, ensure your package.json in the backend directory includes "type": "module".

## 4. Implement Backend Routes
Define routes in your index.js file within the backend folder to serve data to the frontend. For instance, include a route to fetch jokes data:

```javascript
app.get('/api/jokes',(req, res) =>{
    const jokes = [
        {
            id: 1,
            title: 'First Joke',
            content: 'This is a Joke'
        },
        {
            id: 2,
            title: 'Another Joke',
            content: 'This is Another Joke'
        },
        {
            id: 3,
            title: 'Third Joke',
            content: 'This is a third Joke'
        },
        {
            id: 4,
            title: 'Fourth Joke',
            content: 'This is a fourth Joke'
        },
        {
            id: 5,
            title: 'fifth Joke',
            content: 'This is a fifth Joke'
        },
    ];
    res.send(jokes);
});
```

## 5. Fetching Data in Frontend
Now that your backend is set up, it's time to fetch data from the backend into your frontend components using tools like Axios. Follow the steps below:
1.Refer to the [Frontend Setup with React](../Frontend/README.md) for detailed instructions on setting up the frontend.
2.Once your frontend is set up, remove all the existing code in the App.jsx file and replace it with the following:

```javascript
import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [jokes, setjokes] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3000/api/jokes').then((res) => {
      setjokes(res.data)
    }).catch((err) => {
      console.log(err)
    })
  })

  return (
    <>
      <div>
        <h1>Hello World</h1>
        <p>JOKES:{jokes.length}</p>

        {
          jokes.map((joke) =>{
              <div key={joke.id}>
                <h2>{joke.title}</h2>
                <p>{joke.content}</p>
              </div>
          })
        }
      </div>
    </>
  )
}

export default App
```

3.Install Axios by running the following command in your terminal:

```sh
npm i axios
```

4.Update the vite.config.js file to enable proxying requests to the backend:

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api' : 'http://localhost:5000', // Proxy requests to your backend
    },
  },
  plugins: [react()],
})

```

5.To run the frontend, execute the following command:

```sh
npm run dev
```

With these changes, your frontend will fetch jokes data from the backend and display it accordingly. Ensure that your backend server is running on http://localhost:5000 or adjust the proxy configuration accordingly in the vite.config.js file.