# Steps to Deploy Backend. 

- Step 1: Create a new backend or Server Folder.
- Initialize a new Node.js Project
```sh
  cd backend
  npm init
```
- Install the below dependencies

```sh
  npm install express cors dotenv
```
- Step 2: Go to the package.json file and edit the script accordingly

```javascript
"scripts": {
    "start": "node index.js"
}
```
- Step 3: Create a new javascript file and name it as index.js and add these lines into the file.


```javascript
const express = require("express");
require('dotenv').config()
const app = express();
const prot = 4000

app.get('/', (req, res) =>{
  res.send('Hello World')
  
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})


```

- Step 4: Install Mongoose and MongoDB drivers

```sh
  npm install mongoose
```

```sh
  npm i dotenv
```
- Step 5: Connect to MongoDB Database,
Create a new file name .env

```sh
  PORT=5000
```

- Step 6: To run the application Type this command in the terminal

```sh
  npm run start
```

