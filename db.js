const mongoose = require('mongoose');


const mongoURI = "mongodb://127.0.0.1:27017/inotebook?directConnection=true"

const connectToMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to Mongo Successfully")
    },6000)
}

// const connectToMongo = ()=>{
//     mongoose.connect(mongoURI,).then(()=> console.log("Successfully connected to Mongo"))
//     .catch((err)=>{console.error(err);});
// }


module.exports = connectToMongo;