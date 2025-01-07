import mongoose from "mongoose";
import chalk from 'chalk';

// Farben definieren
const DB = chalk.bgWhite.red;
const b = chalk.bgRed.white;

const connectDB =async () =>{
    try{
        await mongoose.connect(process.env.URL);
    }catch(error){
        console.log(b(error)+"  🥵")
    }
    
};
export default connectDB;