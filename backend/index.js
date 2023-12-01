import express, { request, response } from 'express';
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';


const app = express();

app.use(express.json());



app.use("/api/user", userRouter);
app.use('/api/auth', authRouter);
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



