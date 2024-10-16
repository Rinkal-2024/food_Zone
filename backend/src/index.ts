import dotenv from 'dotenv'
dotenv.config();
import express from "express";
import cors from "cors"
import jwt from "jsonwebtoken"
import { sample_foods, sample_tags, sample_users } from "./data";
import foodRouter from './router/food.router';
import userRouter from './router/user.router';
import { dbConnect } from './configs/database.config';
import orderRouter from './router/order.router';
dbConnect();

// require('dotenv').config();

const app = express();
app.use(express.json());

app.use(cors({
    credentials : true,
    origin : ["https://food-zone-pearl.vercel.app" ,'http://localhost:4200']
}));

app.use("/api/food" ,foodRouter);
app.use("/api/users" ,userRouter);
app.use("/api/orders" ,orderRouter);


app.get('/', (req,res)=>{
    res.send('hii')
})
app.get('/home', (req , res)=>{
    res.send('hello ')
})


console.log("JWT_SECRET:", process.env.JWT_SECRET); // Debug log
// console.log('Environment Variables:', process.env);

const port = process.env.PORT ||7000;
app.listen(port, () => {
    console.log("your website is served on http://localhost:"+port);
});