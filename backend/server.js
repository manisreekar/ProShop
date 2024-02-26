import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js'
import { notFound,errorHandler } from './middleware/errorMiddleware.js';
import router from './routes/productRoutes.js';
dotenv.config();


const port=process.env.PORT || 5001;
connectDB();
const app=express();

app.get('/',(req,res)=>{
res.send("API is running");
});

app.use('/api/products',router)

app.use(notFound);
app.use(errorHandler);
 
app.listen(port,()=>console.log(`Server running on port ${port}`))