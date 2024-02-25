import express from 'express';
import router from './routes/productRoutes.js';
import dotenv from 'dotenv';
import connectDB from './config/db.js'
dotenv.config();


const port=process.env.PORT || 5001;
connectDB();
const app=express();

app.get('/',(req,res)=>{
res.send("API is running");
});

app.use('/api/products',router)
 
app.listen(port,()=>console.log(`Server running on port ${port}`))