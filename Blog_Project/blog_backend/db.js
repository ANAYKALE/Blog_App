const mongoose=require('mongoose')
require('dotenv').config();

mongoose.connect(process.env.MONGO_URL,{
    dbName:process.env.DB_NAME
}).then(
    ()=>{
        console.log("Conntcted to database");
    }
).catch((err)=>{
    console.log("Error"+err);
})