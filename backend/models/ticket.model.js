import mongoose from "mongoose";

const ticketSchema = new mongoose.Schema({
    title : {
        type : String 
    } , 
    description : {
        type : String 
    } , 
    status : {
        type : String , 
        default : "TODO"
    } , 
    createdBy : {
        type : mongoose.Schema.Types.ObjectId , 
        ref : "User"
    } , 
    assignedTo : {
        type : mongoose.Schema.Types.ObjectId , 
        ref: "User"
    } , 
    priority : {
        type : String
    } , 
    deadline : {
        type : String
    } , 
    helpfullNotes : {
        type : String 
    } , 
    relatedSkills : [String] ,
    createdAt : {type:Date , default:Date.now}


})


export default Ticket = mongoose.model( 'Ticket', ticketSchema)
