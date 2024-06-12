const express = require("express");
const dotenv = require("dotenv");
const {MongoClient} = require("mongodb")
dotenv.config()
const app = express();
const PORT = 3003;

MongoClient.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("Connected");
})
.catch((error)=>{
    console.log("error", error);
})

app.get('/', (req, res) => {
    res.send("Hello World");
})


app.listen(process.env.PORT||PORT,()=>{
    console.log(`Example app listening on http://localhost:${PORT}`);
})