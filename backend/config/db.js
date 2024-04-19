const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async ()=>{
    try{
        const conn = await mongoose.connect(process.env.mongourl, {
            useNewUrlParser : true,
            useUnifiedTopology: true
        });

        console.log(`db is connected : ${conn.connection.host}`.cyan.underline);
    } 
    catch(error){ 
        console.log(`Error : ${error.message}`);
        process.exit(); 
    }  
}; 

module.exports = connectDB;