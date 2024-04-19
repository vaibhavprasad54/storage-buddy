import mongoose from "mongoose";

const { MONGODB_URI } = process.env ;

//============== Connection Check =============
const connection: {isConnected?: number} = {};

//====================== ConnectDB Function =====================
async function connectDB() {
    
   //----- Checking if connection is already made 
    if(connection.isConnected){
        return
    }

    //-------------- Connecting to DB --------------
    const db = await mongoose.connect(MONGODB_URI!);
    console.log("Connected to MongoDB...")

    connection.isConnected = db.connections[0].readyState;

}

export default connectDB;