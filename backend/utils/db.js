import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const mongoconnection = await mongoose.connect(process.env.MONGO_URI)
        if( mongoconnection ) {
            // console.log(mongoconnection)
            console.log("connected to mongo db ")
        }
    } catch (error) {
        console.log(error) ; 
        process.exit(1)
    }
}