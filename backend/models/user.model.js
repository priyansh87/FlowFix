import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
        email : {
            type: String , 
            required : [true , "email is required"] , 
            unique: true 
        } , 
        password : {
            type : String , 
            required: [true , "password is required"]
        } , 
        role : {
            type : String , 
            default: 'user' , 
            enum : ["user" , "admin" , "moderator"]
        } , 
        skills : [String] , 
        createdAt : {type:Date , default:Date.now}

    } 
)


export const User = mongoose.model( 'User', userSchema)
