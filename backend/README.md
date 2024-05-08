# Deploying a Node.js Backend

This guide outlines the steps to deploy a Node.js backend server.

## Step 1: Set Up the Project

### Create a New Backend Folder

Navigate to your desired location and create a new folder for your backend.

```sh
cd path/to/your/project
mkdir backend
cd backend
```
### Initialize a New Node.js Project
Run npm init to create a new package.json file and follow the prompts to set up your project.

```sh
  npm init
```
## Step 2: Install Dependencies
Install necessary dependencies for your backend using npm.

```sh
  npm install express cors dotenv
```
## Step 3: Configure Package.json
Edit the package.json file to define the start script.

```javascript
"scripts": {
    "start": "node index.js"
}
```
## Step 4: Create the Server
Create a new JavaScript file named index.js and define your server logic.

```javascript
const express = require("express");
require('dotenv').config()
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) =>{
  res.send('Hello World')
  
})

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});

```

## Step 5: Configure Environment Variables
Create a .env file in the root directory of your project and define your environment variables.

```sh
  PORT=5000
```
## Step 6: Start the Server
Install the dotenv package to access environment variables from the .env file.

```sh
  npm i dotenv
```
Then, start the server using the defined start script.

```sh
  npm run start
```

# Conclusion
Congratulations! You've successfully deployed your Node.js backend. You can now develop and deploy more complex applications using this foundation.

