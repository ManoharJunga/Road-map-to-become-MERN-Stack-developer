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
const prot = 4000

app.get('/', (req, res) =>{
  res.send('Hello World')
  
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


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
