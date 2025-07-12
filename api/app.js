import dotenv from 'dotenv';
dotenv.config();

// app.js
import express from 'express';
import authRoute from "./routes/auth.route.js";
// import postRoute from "./routes/post.route.js";
import cookieparser from "cookie-parser";


const app = express();

//input will be in json format
app.use(express.json());
app.use(cookieparser());
app.use("/api/auth", authRoute);
// app.use("/api/posts",postRoute);

app.listen(3000, () => {
  console.log(`Server is running on port`);
});
