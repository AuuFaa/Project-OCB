import express, { request, response } from 'express';
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import userRouter from './routes/user.route.js';


const app = express();



app.use("/api/user", userRouter);
// //GET DATABASE_URL variable from the .env file
// const uri = process.env.MONGO;

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App connected to database");
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });



