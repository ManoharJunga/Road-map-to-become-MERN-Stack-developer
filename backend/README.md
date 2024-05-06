# Steps to get Started with Backend Connection 

- Step 1: Create a new backend or Server Folder.
- Initialize a new Node.js Project
```sh
  npm init
```
- Install the below dependencies

```sh
    npm install express cors dotenv
```
- Step 2: Go to the package.json file and edit the script accordingly

```javascript
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
    "start": "nodemon dist/index.js"
}
```
- Step 3: Create a new javascript file and name it as index.js and add these lines to connect the server to the MongoDB.


```javascript
const express = require("express");

const app = express();

const cors = require("cors");

require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;

app.use(cors());

app.use(express.json());

app.use(require("./routes/record"));

// Get MongoDB driver connection
const dbo = require("./db/conn");
 
app.listen(port, () => {
  // Perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
 
  });
  console.log(`Server is running on port: ${port}`);
});
```

- Step 4: Install Mongoose and MongoDB drivers

```sh
    npm install mongoose
```
- Step 5: Connect to MongoDB Database
create a new file name .env

```sh
ATLAS_URI=mongodb+srv://<username>:<password>@sandbox.jadwj.mongodb.net/employees?retryWrites=true&w=majority
PORT=5000
```
