import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import customerRouter from './routers/customerRouter.js'; // Ensure the .js extension is included
import dotenv from "dotenv";

dotenv.config();

mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log("DB Connected");
    })
    .catch((error) => {
        console.log("error", error);
        console.log("DB is Not Connected");
    });

const app = express();
app.use(bodyParser.json());
app.use("/customers", customerRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
