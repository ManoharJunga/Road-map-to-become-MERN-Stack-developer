
# Data Fetching from MongoDB to frontend using backends API's

This project is a full-stack application for managing user data. The backend is built with Express and MongoDB, and the frontend is built with React.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed
- MongoDB installed and running
- npm (Node Package Manager) installed

## Backend Setup

### Step 1: Initialize Project

1. Create a new directory for your project and navigate into it:
   ```bash
   mkdir user-management-app
   cd user-management-app
   ```

2. Initialize a new Node.js project:
   ```bash
   npm init -y
   ```

### Step 2: Install Dependencies

Install the required packages:
```bash
npm install express mongoose cors
```

### Step 3: Setup Server

Create a file named `server.js` and add the following code:

```javascript
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserModel = require('./models/Users.models');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Failed to connect to MongoDB', err);
});

app.get('/getUsers', (req, res) => {
    UserModel.find()
    .then(users => res.json(users))
    .catch(err => res.status(500).json({ error: err.message }));
});

app.listen(3001, () => {
    console.log(`Server running on port 3001`);
});
```

### Step 4: Setup User Model

Create a directory named `models` and inside it create a file named `Users.models.js`:

```javascript
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    country: { type: String, required: true },
    zipcode: { type: String, required: true },
    isAdmin: { type: Boolean, default: false },
    isVerified: { type: Boolean, default: false }
});

const UserModel = mongoose.model('User', UserSchema);
module.exports = UserModel;
```

### Step 5: Run the Server

Start your MongoDB server and then run your Express server:
```bash
node server.js
```

## Frontend Setup

### Step 1: Initialize React App

1. In the root directory of your project, create a new React app:
   ```bash
   npx create-react-app client
   ```

2. Navigate into the React app directory:
   ```bash
   cd client
   ```

### Step 2: Install Axios

Install Axios for making HTTP requests:
```bash
npm install axios
```

### Step 3: Setup React Component

Replace the content of `src/App.js` with the following code:

```javascript
import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:3001/getUsers')
      .then(response => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Users</h1>
      {users.length > 0 ? (
        users.map(user => (
          <div key={user._id}>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <p>{user.phone}</p>
          </div>
        ))
      ) : (
        <p>No users found.</p>
      )}
    </div>
  );
}

export default App;
```

### Step 4: Run the React App

1. Navigate to the root directory of your React app:
   ```bash
   cd client
   ```

2. Start the React development server:
   ```bash
   npm start
   ```

## Accessing the Application

1. Ensure your MongoDB server is running.
2. Ensure your Express server is running (via `node server.js`).
3. Ensure your React development server is running (via `npm start` in the `client` directory).
4. Open your web browser and go to `http://localhost:3000`.

You should see a list of users fetched from your backend.

## Troubleshooting

- Ensure MongoDB is running and accessible.
- Ensure there are no typos in the URL or port numbers.
- Check the browser console and server logs for error messages.

## Conclusion

This setup allows you to run a full-stack application with a MongoDB, Express, and React stack. You can extend the functionality by adding more routes and frontend components as needed.

---

This README should guide you through setting up and running your project from scratch.