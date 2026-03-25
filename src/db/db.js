const mongoose = require('mongoose');

const connectDB = async() =>{
 await mongoose.connect("mongodb+srv://yt-backend:bhavesh_73@cluster0.0qnc8ne.mongodb.net/sherian")
 console.log("mongoose connected");
}


module.exports = connectDB;