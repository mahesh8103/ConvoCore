import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
dotenv.config({
    path:'../.env'
})

const PORT =process.env.PORT || 4000


const app = express();

app.use("/api/auth",authRoutes);
app.use("/api/message",messageRoutes);


app.listen(PORT,()=>console.log(`server is running on ${PORT} `))