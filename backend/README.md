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
const port = process.env.PORT || 3000;

app.get('/', (req, res) =>{
  res.send('Hello World')
  
})

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});

```

- Step 4: Create a folder .env and run that following command.
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

