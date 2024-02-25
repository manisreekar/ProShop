import colors from 'colors'
import connectDB from './config/db.js'
import Order from './models/orderModel.js'
import Product from './models/productModel.js'
import User from './models/userModel.js'
import users from './data/users.js'
import products from './data/products.js'
import dotenv from 'dotenv';
dotenv.config();

connectDB();
const importData=async()=>{
    try{
    await Product.deleteMany();
    await Order.deleteMany();
    await User.deleteMany();

    const createdUsers=await User.insertMany(users);

    const adminUser= createdUsers[0]._id;

    const sampleProducts=products.map((product)=>{
        return({...product, user:adminUser});
    })

    await Product.insertMany(sampleProducts);
    
    console.log("data Inserted".green.inverse);
    process.exit()
    }
    catch(err){
        console.log(`${err}`.red.inverse);
        process.exit(1)
    }

}

const destoryData=async()=>{
    try{
        await Product.deleteMany();
        await Order.deleteMany();
        await User.deleteMany();
        console.log("data Deleted".red.inverse);
        process.exit()
    }
    
        catch(err){
            console.log(`${err}`.red.inverse);
            process.exit(1)
        }

}

if(process.argv[2]==='-d')
    destoryData();
else
    importData();