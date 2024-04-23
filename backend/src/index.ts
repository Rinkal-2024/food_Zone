import dotenv from 'dotenv'
dotenv.config();
// require('dotenv').config();
import express from "express";
import cors from "cors"
import jwt from "jsonwebtoken"
import { sample_foods, sample_tags, sample_users } from "./data";
import foodRouter from './router/food.router';
import userRouter from './router/user.router';
import { dbConnect } from './configs/database.config';
import orderRouter from './router/order.router';
dbConnect();

const app = express();
app.use(express.json());


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'https://food-zone-alpha-xi.vercel.app');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', '');
    next();
  });
app.use(cors({
    credentials : true,
    origin : ["https://food-zone-alpha-xi.vercel.app"],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use("/api/food" ,foodRouter);
app.use("/api/users" ,userRouter);
app.use("/api/orders" ,orderRouter);

app.get('/api/food/tag', async (req, res) => {
    try {
      const response = await fetch('https://food-zone-server-nine.vercel.app/api/food/tag');
      const data = await response.json();
      res.header('Access-Control-Allow-Origin', 'https://food-zone-alpha-xi.vercel.app');
      res.json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

app.get('/' , (req,res)=>{
    res.status(200).send('hello')
})

const port =5000;
app.listen(port, () => {
    console.log("your website is served on http://localhost:5000");
});
            