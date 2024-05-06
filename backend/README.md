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
- Step 3: Create a new javascript file and